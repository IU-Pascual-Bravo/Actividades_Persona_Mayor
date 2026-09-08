# Adivinanzas: Cuestionario Interactivo

Aplicación web de una sola página (HTML/CSS/JavaScript, sin dependencias de backend) que presenta un cuestionario de adivinanzas tradicionales en español con tres opciones de respuesta por pregunta[cite: 1]. Fue desarrollada pensando especialmente en **personas mayores** como público objetivo, tanto en su contenido como en sus decisiones de diseño e interacción[cite: 1].

## 📋 Descripción general

La app selecciona de forma aleatoria 15 adivinanzas de un repositorio de 50, cada una acompañada de una imagen ilustrativa y tres opciones de respuesta[cite: 1]. El usuario responde una pregunta a la vez, recibe retroalimentación visual inmediata (correcto/incorrecto) y avanza a la siguiente hasta completar el cuestionario, donde obtiene un puntaje final y un mensaje motivacional[cite: 1]. Al finalizar, puede iniciar un nuevo cuestionario con una selección distinta de adivinanzas[cite: 1].

## Características principales

- **Banco de 50 adivinanzas** en español, con temática cotidiana y culturalmente familiar (frutas, objetos del hogar, animales, naturaleza)[cite: 1].
- **Selección aleatoria de 15 preguntas** por partida, para que cada cuestionario sea distinto[cite: 1].
- **Imágenes ilustrativas** por pregunta, que refuerzan la comprensión más allá del texto[cite: 1].
- **Temporizador visual de 60 segundos** por pregunta, con barra de color que cambia de verde a rojo a medida que se agota el tiempo[cite: 1].
- **Retroalimentación inmediata**: la opción correcta se resalta en verde y la incorrecta en rojo apenas se responde[cite: 1].
- **Barra de progreso** que indica en todo momento cuántas preguntas faltan[cite: 1].
- **Pantalla de resultados** con puntaje final, porcentaje de aciertos y mensaje de ánimo[cite: 1].
- **Botón "Nuevo cuestionario"** disponible en cualquier momento para reiniciar con otra combinación de preguntas[cite: 1].
- **Diseño responsive**, adaptado a computador, tablet y celular[cite: 1].
- **Un solo archivo HTML autocontenido**: no requiere instalación, servidor ni conexión a internet para funcionar (salvo la carga de la tipografía Poppins desde Google Fonts)[cite: 1].

## Diseñada para personas mayores

Más allá de sus características funcionales, cada decisión de diseño de esta app responde a las necesidades de un usuario adulto mayor[cite: 1]:

- **Tipografía grande y legible** (Poppins, con tamaños que se ajustan según el dispositivo) para facilitar la lectura a quienes tienen dificultades visuales[cite: 1].
- **Botones y áreas de clic amplias**, con alto contraste de color, pensadas para personas con menor precisión motriz o destrezas táctiles reducidas[cite: 1].
- **Una sola pregunta visible a la vez**, evitando la sobrecarga de información en pantalla y facilitando la concentración[cite: 1].
- **Retroalimentación inmediata y clara** (colores, texto explícito) que refuerza el aprendizaje sin ambigüedad[cite: 1].
- **Apoyo visual (imágenes)** junto a cada adivinanza, que ayuda a quienes procesan mejor la información combinando texto e imagen[cite: 1].
- **Contenido culturalmente cercano**: las adivinanzas son parte del acervo popular hispanohablante, muchas de ellas aprendidas en la infancia, lo que genera familiaridad, nostalgia y confianza en lugar de frustración[cite: 1].
- **Sin necesidad de registro, instalación ni configuración previa**: se abre y se juega, reduciendo las barreras de acceso a la tecnología[cite: 1].

## Justificación: por qué esta actividad importa para las personas mayores

Los juegos de estimulación cognitiva como este cuestionario de adivinanzas no son un simple entretenimiento: constituyen una herramienta de apoyo al bienestar de las personas mayores, por razones como las siguientes[cite: 1]:

1. **Estimulación cognitiva activa.** Resolver adivinanzas exige procesos de razonamiento, memoria semántica, asociación de ideas y recuperación de vocabulario, funciones cognitivas que se benefician del ejercicio regular, especialmente en la vejez[cite: 1].
2. **Prevención del deterioro cognitivo.** La literatura en gerontología y neuropsicología señala que mantener la mente activa mediante actividades desafiantes pero alcanzables contribuye a preservar la reserva cognitiva y puede retrasar la aparición de deterioros asociados a la edad[cite: 1].
3. **Refuerzo de la memoria a largo plazo y la identidad cultural.** Las adivinanzas tradicionales suelen estar ligadas a recuerdos de infancia y a la tradición oral familiar, por lo que jugar con ellas no solo ejercita la memoria, sino que también fortalece el sentido de identidad y pertenencia cultural[cite: 1].
4. **Aumento de la autoestima y la motivación.** El diseño con retroalimentación positiva y puntajes alcanzables genera sensación de logro, algo especialmente valioso en personas mayores que a veces sienten inseguridad frente a la tecnología o a las propias capacidades cognitivas[cite: 1].
5. **Alfabetización digital con bajo riesgo de frustración.** Al ser una interfaz simple, sin necesidad de crear cuentas ni instalar aplicaciones, la persona mayor practica el uso de dispositivos digitales (tabletas, computadores, celulares) en un entorno amigable, lo que favorece su autonomía digital[cite: 1].
6. **Herramienta útil para talleres y espacios de cuidado.** Puede integrarse fácilmente en programas de estimulación cognitiva en centros de bienestar del adulto mayor, hogares geriátricos, jornadas intergeneracionales o actividades familiares, sirviendo como recurso pedagógico de bajo costo y fácil despliegue[cite: 1].
7. **Interacción social e intergeneracional.** Al tratarse de un contenido con el que también disfrutan niños y jóvenes, la app facilita momentos de juego compartido entre generaciones, fortaleciendo vínculos familiares y comunitarios[cite: 1].

En síntesis, esta app no es solo un cuestionario: es una actividad de estimulación cognitiva, cultural y social diseñada para que las personas mayores se mantengan mentalmente activas, se sientan capaces frente a la tecnología y disfruten de un momento de entretenimiento significativo[cite: 1].

## Cómo usar la aplicación

1. Descargue o abra el archivo `index.html` en cualquier navegador web moderno (Chrome, Firefox, Edge, Safari)[cite: 1].
2. No requiere instalación ni conexión a un servidor: funciona directamente desde el archivo local[cite: 1].
3. El cuestionario inicia automáticamente al cargar la página, mostrando la primera de 15 adivinanzas seleccionadas al azar[cite: 1].
4. Seleccione una opción de respuesta; la app mostrará de inmediato si es correcta o incorrecta[cite: 1].
5. Use el botón **"Siguiente"** para avanzar (o **"Ver Resultados"** en la última pregunta)[cite: 1].
6. Al finalizar, revise su puntaje y presione **"Nuevo cuestionario"** para jugar de nuevo con otra selección de preguntas[cite: 1].

## Estructura del proyecto

index.html          # Aplicación completa (HTML, CSS y JavaScript en un solo archivo)
images/             # Imágenes ilustrativas de cada adivinanza (nombradas por id, ej. 1.jpg, 2.jpg...)
logoPB1.png         # Logo institucional (Institución Universitaria Pascual Bravo)
logo_escuela.png    # Logo de la Escuela de Pensamiento Educativo y Pedagógico

> Nota: si una imagen no está disponible, la app continúa funcionando con normalidad (la imagen se muestra con menor opacidad como marcador visual de ausencia), sin afectar la jugabilidad[cite: 1].

## Requisitos técnicos

- Navegador web moderno con soporte de JavaScript habilitado[cite: 1].
- Conexión a internet únicamente para cargar la tipografía Poppins desde Google Fonts (opcional; la app sigue siendo usable sin ella, con la tipografía de reemplazo del sistema)[cite: 1].
- No requiere backend, base de datos ni instalación de dependencias[cite: 1].

## Público objetivo

Personas mayores, en el marco de programas de estimulación cognitiva, bienestar del adulto mayor, alfabetización digital o actividades intergeneracionales[cite: 1]. También es apta para todo público interesado en adivinanzas tradicionales en español, incluyendo contextos educativos con niños[cite: 1].