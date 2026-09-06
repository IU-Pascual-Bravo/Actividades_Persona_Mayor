document.addEventListener('DOMContentLoaded', () => {
    // --- Element Selectors ---
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const colorPicker = document.getElementById('colorPicker');
    const brushSize = document.getElementById('brushSize');
    const submitBtn = document.getElementById('submitBtn');
    const clearBtn = document.getElementById('clearBtn');
    const roastOutput = document.getElementById('roast-output');
    const colorPalette = document.getElementById('color-palette');
    const fillBtn = document.getElementById('fillBtn');
    const promptInput = document.getElementById('promptInput');
    const generateBtn = document.getElementById('generateBtn');
    const canvasOverlay = document.getElementById('canvas-overlay');
    const downloadBtn = document.getElementById('downloadBtn');
    const critiqueTone = document.getElementById('critiqueTone');
    const critiqueTitle = document.getElementById('critique-title');
    const backendUrl = 'https://node.proyectodescartes.org';

    // --- State Variables ---
    let isDrawing = false, lastX = 0, lastY = 0;
    let currentRoastText = null, currentAudio = null, latestTTSRequestId = 0;
    let fillMode = false, isAiGenerated = false, lastPrompt = '';

    if (!window.audioContext) {
        window.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    function resetCanvas() {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        isAiGenerated = false; lastPrompt = ''; if (promptInput) promptInput.value = '';
    }
    resetCanvas();

    // --- Helper functions ---
    function getMousePos(canvasDom, event) {
        const rect = canvasDom.getBoundingClientRect();
        return { x: event.clientX - rect.left, y: event.clientY - rect.top };
    }

    function setActiveSwatch(selectedSwatch) {
        colorPalette.querySelectorAll('.color-swatch').forEach(swatch => swatch.classList.remove('active'));
        if (selectedSwatch) selectedSwatch.classList.add('active');
    }

    function startDrawing(e) {
        e.preventDefault();
        const pos = getMousePos(canvas, e);
        if (fillMode) { floodFill(pos.x, pos.y); return; }
        isDrawing = true;[lastX, lastY] = [pos.x, pos.y];
    }

    function draw(e) {
        if (!isDrawing) return;
        e.preventDefault();
        const pos = getMousePos(canvas, e);
        ctx.beginPath();
        ctx.strokeStyle = colorPicker.value;
        ctx.lineWidth = brushSize.value;
        ctx.lineCap = 'round';
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        [lastX, lastY] = [pos.x, pos.y];
    }

    function stopDrawing(e) { e.preventDefault(); isDrawing = false; }

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    if (fillBtn) {
        fillBtn.addEventListener('click', () => {
            fillMode = !fillMode;
            fillBtn.classList.toggle('active', fillMode);
            canvas.style.cursor = fillMode ? 'copy' : 'crosshair';
        });
    }

    colorPalette.addEventListener('click', (e) => {
        if (e.target.classList.contains('color-swatch')) {
            const hexColor = '#' + e.target.style.backgroundColor.match(/\d+/g).map(x => parseInt(x).toString(16).padStart(2, '0')).join('');
            colorPicker.value = hexColor;
            setActiveSwatch(e.target);
        }
    });

    clearBtn.addEventListener('click', () => {
        resetCanvas();
        roastOutput.innerHTML = `<p>¡Lienzo limpio! ¿Qué nueva abominación crearás?</p>`;
        if (critiqueTitle) critiqueTitle.textContent = 'La Crítica:';
        currentRoastText = null;
        if (currentAudio) currentAudio.stop();
        if (downloadBtn) downloadBtn.style.display = 'none';
    });

    submitBtn.addEventListener('click', async () => {
        submitBtn.disabled = true;
        roastOutput.innerHTML = `<p class="loading-text">Consultando a los críticos...</p>`;
        currentRoastText = null;
        if (currentAudio) currentAudio.stop();

        try {
            const imageDataUrl = canvas.toDataURL('image/png');
            const imageDescription = await callBackend('/api/ia/vision', {
                prompt: 'Describe este dibujo literalmente y de forma concisa. Identifica los elementos principales, colores, formas y composición.',
                system: 'Analiza la imagen visualmente. No inventes detalles que no puedas observar. Responde en español y describe solo lo que aparece en el dibujo.',
                image: imageDataUrl,
                model: 'openai'
            });

            const critiqueSystemPrompt = `Eres "El Crítico Despiadado", un crítico de arte sarcástico. Ofrece críticas hilarantes y exageradas de los dibujos. Dirígete al usuario como "querido artista". Responde en español.`;
            const critiqueMessages = [{ role: "system", content: critiqueSystemPrompt }, { role: "user", content: `Critica este dibujo: "${imageDescription}".` }];
            roastOutput.innerHTML = `<p></p><button id="replayBtn" class="replay-button" disabled>🔊 Repetir</button>`;
            currentRoastText = await callBackend('/api/ia/text', {
                prompt: critiqueMessages.map(message => message.content).join('\n\n'),
                model: 'openai'
            });
            roastOutput.querySelector('p').textContent = currentRoastText;

            if (currentRoastText) {
                speak(currentRoastText);
                if (downloadBtn) downloadBtn.style.display = 'inline-block';
            }
        } catch (error) {
            console.error('Error getting roast:', error);
            roastOutput.innerHTML = `<p>Error: ${error.message}</p>`;
        } finally {
            submitBtn.disabled = false;
        }
    });

    if (generateBtn) {
        generateBtn.addEventListener('click', async () => {
            const prompt = promptInput.value.trim();
            if (!prompt) { alert("Por favor, escribe una descripción para la IA."); return; }
            generateBtn.disabled = true;
            if (canvasOverlay) canvasOverlay.style.display = 'flex';
            try {
                const response = await fetch(`${backendUrl}/api/ia/image`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ prompt, model: 'zimage', width: canvas.width, height: canvas.height })
                });
                if (!response.ok) throw new Error(`Error del servidor: ${response.status}`);
                const imageUrl = URL.createObjectURL(await response.blob());
                const img = new Image();
                img.onload = () => {
                    resetCanvas();
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    URL.revokeObjectURL(imageUrl);
                    isAiGenerated = true;
                    lastPrompt = prompt;
                    generateBtn.disabled = false;
                    if (canvasOverlay) canvasOverlay.style.display = 'none';
                };
                img.onerror = () => { throw new Error('No se pudo cargar la imagen.'); };
                img.src = imageUrl;
            } catch (error) {
                console.error('Error generando imagen:', error);
                generateBtn.disabled = false;
                if (canvasOverlay) canvasOverlay.style.display = 'none';
            }
        });
    }

    async function callBackend(path, body) {
        const response = await fetch(`${backendUrl}${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) throw new Error(`Error del servidor: ${response.status}`);
        return response.text();
    }

    function speak(text) {
        latestTTSRequestId++;
        const thisRequestId = latestTTSRequestId;
        if (currentAudio) currentAudio.stop();
        const replayBtn = document.getElementById('replayBtn');
        if (replayBtn) replayBtn.disabled = true;
        if (window.audioContext.state === "suspended") window.audioContext.resume();
        let audioSources = [];
        let abortController = new AbortController();
        const plainText = text.replace(/<[^>]*>/g, ' ').trim();
        currentAudio = {
            stop: () => {
                audioSources.forEach(src => { try { src.stop(); } catch (e) { } });
                abortController.abort();
            }
        };
        let playbackTimeOffset = window.audioContext.currentTime;
        fetch(`${backendUrl}/api/ia/audio`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify({
                model: "openai-audio",
                modalities: ["text", "audio"],
                stream: false,
                audio: { voice: "shimmer", format: "mp3" },
                messages: [{ role: "user", content: "Lee este texto en español: " + plainText }]
            }),
            signal: abortController.signal
        }).then(response => {
            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            function pump() {
                reader.read().then(({ done, value }) => {
                    if (done) { if (replayBtn) replayBtn.disabled = false; return; }
                    const chunk = decoder.decode(value, { stream: true });
                    const lines = chunk.split("\n");
                    for (const line of lines) {
                        if (line.startsWith("data: ")) {
                            const json = line.slice(6).trim();
                            if (json === "[DONE]") continue;
                            try {
                                const obj = JSON.parse(json);
                                const base64 = obj.choices?.[0]?.delta?.audio?.data;
                                if (base64) {
                                    const binary = atob(base64);
                                    const bytes = new Uint8Array(binary.length);
                                    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
                                    const floatData = new Float32Array(bytes.buffer.byteLength / 2);
                                    const view = new DataView(bytes.buffer);
                                    for (let i = 0; i < floatData.length; i++) floatData[i] = view.getInt16(i * 2, true) / 32768;
                                    const buffer = window.audioContext.createBuffer(1, floatData.length, 24000);
                                    buffer.copyToChannel(floatData, 0);
                                    const src = window.audioContext.createBufferSource();
                                    src.buffer = buffer;
                                    src.connect(window.audioContext.destination);
                                    const now = window.audioContext.currentTime;
                                    playbackTimeOffset = Math.max(now, playbackTimeOffset);
                                    src.start(playbackTimeOffset);
                                    playbackTimeOffset += buffer.duration;
                                    audioSources.push(src);
                                }
                            } catch (e) { }
                        }
                    }
                    pump();
                });
            }
            pump();
        });
    }

    function floodFill(startX, startY) {
        startX = Math.floor(startX); startY = Math.floor(startY);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const startPos = (startY * canvas.width + startX) * 4;
        const startR = data[startPos], startG = data[startPos + 1], startB = data[startPos + 2];
        const hex = colorPicker.value;
        const fillR = parseInt(hex.slice(1, 3), 16), fillG = parseInt(hex.slice(3, 5), 16), fillB = parseInt(hex.slice(5, 7), 16);
        if (startR === fillR && startG === fillG && startB === fillB) return;
        const pixelStack = [[startX, startY]];
        while (pixelStack.length) {
            const [x, y] = pixelStack.pop();
            let currentPos = (y * canvas.width + x) * 4;
            if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) continue;
            if (data[currentPos] === startR && data[currentPos + 1] === startG && data[currentPos + 2] === startB) {
                data[currentPos] = fillR; data[currentPos + 1] = fillG; data[currentPos + 2] = fillB; data[currentPos + 3] = 255;
                pixelStack.push([x + 1, y]); pixelStack.push([x - 1, y]); pixelStack.push([x, y + 1]); pixelStack.push([x, y - 1]);
            }
        }
        ctx.putImageData(imageData, 0, 0); isAiGenerated = false;
    }
});
