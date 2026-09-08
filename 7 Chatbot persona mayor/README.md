# 🧓 Chatbot para Personas Mayores

Aplicación web (un único archivo `chatbot.html`) que ofrece un **acompañante conversacional pensado, diseñado y calibrado para personas mayores**: combate la soledad, ejercita la memoria y ofrece entretenimiento terapéutico a través de una interfaz simple, cálida y accesible.

Proyecto desarrollado para la **Institución Universitaria Pascual Bravo** — Escuela de Pensamiento Educativo y Pedagógico.

---

## 👵👴 Enfoque en la persona mayor

Todo el diseño de esta app gira alrededor de las necesidades de una persona mayor, no de un usuario genérico:

- **Compañía, no solo respuestas.** El asistente no está configurado como un buscador de información: se presenta como un *acompañante empático y estimulador cognitivo*, interesado genuinamente en el día a día del usuario (su ánimo, sus comidas, su música, sus recuerdos).
- **Avatar de persona mayor.** El chatbot conversa a través de un avatar que representa a una persona mayor sonriente y cálida (una figura de "abuelo/abuela" cercana), generado automáticamente con IA y con un ícono de respaldo mientras se genera.
- **Estimulación cognitiva y de memoria (reminiscencia).** El asistente dirige la charla hacia temas nostálgicos y agradables (infancia, música de juventud, películas antiguas, historia) y recuerda detalles de la conversación para darle continuidad, como ejercicio de memoria.
- **Ritmo pausado y sin presión.** El lenguaje evitado es el técnico o apresurado: frases claras, cortas y cálidas. Si la persona mayor muestra cansancio o quiere despedirse, el asistente cierra la conversación de inmediato, sin insistir con más preguntas.
- **Juegos mentales suaves.** Incluye un módulo de juegos de palabras (por ejemplo, palabras desordenadas por temática) como entrenamiento cerebral entretenido y no exigente.
- **Salvaguardas de bienestar.** El asistente hace, de forma natural, preguntas que ayudan a detectar tempranamente señales de pérdida de memoria o de aislamiento/depresión, y ante señales de riesgo prioriza reconectar a la persona con su red familiar real o activar protocolos de alerta, en lugar de validar el aislamiento. Siempre se presenta como un "compañero virtual de Inteligencia Artificial", sin fingir ser humano.
- **Accesibilidad pensada para ojos y oídos que se cansan más rápido:**
  - Texto leído en voz alta (síntesis de voz en español) para quienes prefieren escuchar antes que leer, con controles grandes de **reproducir / pausar / detener**.
  - Botones grandes, redondeados, con colores contrastantes y sombra, fáciles de identificar y de tocar.
  - Opción de **mostrar u ocultar las imágenes** del chat, para no sobrecargar visualmente a quien lo prefiera más simple.
  - Interfaz limpia, con una sola columna de conversación y botones de preguntas frecuentes ("¿Qué es?", "Importancia", "Curiosidades") para quienes prefieren tocar en lugar de escribir.
- **Recuerdo imprimible.** Botón para exportar toda la conversación a PDF, útil para que un familiar o cuidador revise después cómo estuvo la charla.

---

## ✨ Interfaz

- Barra superior con los logos de la **Institución Universitaria Pascual Bravo** y la **Escuela de Pensamiento Educativo y Pedagógico**, y el título **"Chatbot para personas mayores"** centrado, con degradados de color animados y un subtítulo dinámico que rota mensajes de bienvenida.
- Burbujas de chat con degradados suaves para diferenciar claramente los mensajes del usuario y del asistente.
- Botones de audio y PDF rediseñados con colores por función (verde cuando el audio está activo, ámbar para pausar, rojo para detener/exportar), para que la persona mayor identifique de un vistazo qué hace cada uno.
- Imágenes de apoyo generadas en **estilo cartoon**, con instrucciones explícitas para que la IA nunca incluya texto, letras o números ilegibles dentro de la imagen.

---

## ⚙️ Funcionalidades técnicas

| Función | Descripción |
|---|---|
| Chat con IA | Conversación en español vía API de texto (modelo configurable, por defecto `openai`) |
| Voz | Lectura en voz alta de las respuestas (Web Speech API, voz en español) con reproducir/pausar/detener |
| Imágenes | Generación opcional de imágenes cartoon de apoyo por cada respuesta (activable/desactivable) |
| Avatar del bot | Generado por IA como persona mayor amable; con ícono de respaldo mientras carga |
| Matemáticas | Renderizado de fórmulas con MathJax (notación LaTeX) |
| Exportar PDF | Descarga de la conversación completa en PDF |
| Preguntas frecuentes | Botones rápidos de "¿Qué es?", "Importancia" y "Curiosidades" sobre el tema configurado |

---

## 🔧 Configuración rápida

Dentro de `chatbot.html`, al inicio del bloque `<script>`, se pueden ajustar variables como:

```js
var TOPIC = "Persona mayor";   // Tema/nombre del asistente
var PERSONA = "";              // Rasgos de personalidad adicionales del avatar
var USE_IMAGES = true;         // Mostrar imágenes por defecto (también editable desde la interfaz)
var USE_MATHJAX = true;        // Activar renderizado de fórmulas matemáticas
```

No requiere instalación: es un único archivo HTML que se abre directamente en el navegador.

---

*Diseñado por Juan Guillermo Rivera Berrío, con tecnología Claude Sonnet 5.*
