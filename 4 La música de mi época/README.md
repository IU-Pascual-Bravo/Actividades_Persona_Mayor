# La música de mi época

Aplicación educativa para que las personas mayores puedan recordar, explorar y conversar sobre la música de habla hispana de un año significativo de sus vidas.

## Propósito

La aplicación convierte un año en una experiencia de memoria y aprendizaje. La persona usuaria escribe un año y el asistente genera:

- Una narración sobre la música de habla hispana de ese periodo.
- Cantantes o grupos destacados.
- Canciones representativas.
- Hechos importantes de la historia musical.
- Una ilustración estilo cartoon.
- Un cuestionario interactivo de comprensión lectora.

El objetivo es estimular los recuerdos, la conversación, la lectura y la participación activa de las personas mayores, sin exigir conocimientos técnicos ni musicales previos.

## Uso para personas mayores

1. Abra `index.html` en un navegador moderno.
2. Lea el mensaje inicial del asistente.
3. Escriba un año de cuatro cifras, por ejemplo `1968`, `1975` o `1989`.
4. Pulse **Enviar** o presione la tecla `Enter`.
5. Lea la narración y observe la ilustración generada.
6. Responda el cuestionario seleccionando una opción por pregunta.
7. Pulse **Evaluar Taller** para conocer el resultado.
8. Pulse **Nueva consulta** para comenzar con otro año sin recargar la página.

## Diseño accesible

La interfaz está pensada para facilitar el uso durante actividades de acompañamiento, alfabetización digital y memoria autobiográfica:

- Instrucciones iniciales claras y directas.
- Una sola entrada principal: el año que se desea consultar.
- Mensajes y botones visibles en español.
- Validación que indica cuando el año no tiene cuatro cifras.
- Contraste entre el fondo, el texto y los controles.
- Tipografía sans-serif de lectura sencilla.
- Botón **Nueva consulta** para evitar pasos técnicos como recargar la página.
- Cuestionario visual con opciones grandes y resultados inmediatos.
- Selector de paletas, incluido un modo claro.
- La experiencia puede realizarse con acompañamiento de un familiar, docente o cuidador.

Se recomienda usar la aplicación en una pantalla con buen tamaño, mantener el zoom del navegador entre 110 % y 125 % cuando sea necesario y leer en voz alta las instrucciones durante actividades grupales.

## Preferencias disponibles

La aplicación permite ajustar:

- Idioma de la interfaz.
- Estilo de la narración.
- Modelo de inteligencia artificial.
- Modelo de imagen: `zimage`, `flux`, `klein` o `gptimage`.
- Número de preguntas.
- Número de opciones por pregunta.
- Paleta de colores o modo claro.

Estas preferencias permanecen al iniciar una nueva consulta.

## Funcionamiento técnico

La aplicación está construida como una página web autónoma en `index.html`, con HTML, CSS y JavaScript integrados. Utiliza los siguientes servicios remotos:

- API de texto: `https://node.proyectodescartes.org/api/ia/text`
- API de imágenes: `https://node.proyectodescartes.org/api/ia/image`

El prompt enviado al modelo solicita información sobre cantantes, canciones y hechos importantes de la música de habla hispana del año indicado. La respuesta se transforma en una narración y un cuestionario interactivo dentro de la página.

Para usarla sin conexión a internet sería necesario incorporar un modelo de texto y un generador de imágenes locales; la versión actual requiere conexión para generar el contenido.

## Consideraciones pedagógicas

La aplicación puede utilizarse para:

- Evocar recuerdos asociados a una época de la vida.
- Comparar gustos musicales entre generaciones.
- Practicar comprensión lectora.
- Conversar sobre cambios culturales y tecnológicos.
- Fortalecer la autonomía digital de las personas mayores.

La información generada por inteligencia artificial debe revisarse y conversarse con la persona usuaria. Cuando un dato histórico o musical sea importante, se recomienda contrastarlo con fuentes confiables.

## Autoría

Proyecto educativo de la Institución Universitaria Pascual Bravo y la Escuela de Pensamiento Educativo y Pedagógico.
