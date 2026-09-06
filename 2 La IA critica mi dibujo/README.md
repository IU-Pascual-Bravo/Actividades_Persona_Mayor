# IA Critica Mi Dibujo

Aplicación educativa que permite a una persona crear un dibujo, generar una imagen con inteligencia artificial y recibir una crítica artística en español.

## Propósito

Esta actividad está diseñada especialmente para **personas adultas mayores**. Busca facilitar un acercamiento amable y entretenido a la inteligencia artificial mediante una experiencia visual, creativa y sencilla.

La aplicación permite:

- Escribir una descripción y generar una imagen con IA.
- Dibujar directamente sobre un lienzo digital.
- Usar colores, grosor de pincel y herramienta de relleno.
- Elegir el tono de la crítica artística.
- Escuchar la crítica mediante audio.
- Descargar la obra junto con su crítica.

## Uso básico

1. Escriba qué imagen desea crear y pulse **Generar con IA**, o dibuje directamente en el lienzo.
2. Seleccione el tono de la crítica.
3. Pulse **Enviar a Crítica**.
4. Espere la descripción y el comentario de la inteligencia artificial.
5. Use **Repetir** para escuchar nuevamente el comentario o **Descarga tu Obra** para conservarlo.

## Accesibilidad y facilidad de uso

- Los controles tienen textos claros y visibles.
- La interfaz utiliza botones grandes y una distribución sencilla.
- La aplicación funciona en computador, tableta y teléfono.
- No es necesario introducir una clave de API: las credenciales se mantienen protegidas en el servidor.
- La crítica puede adoptar un tono humorístico, poético, técnico o descriptivo.

## Arquitectura

- `index.html`: interfaz principal y funcionamiento de la actividad.
- `style.css`: estilos visuales y adaptación a dispositivos móviles.
- `script.js`: versión auxiliar de la lógica de interacción.
- `logoPB1.png`: logo de la Institución Universitaria Pascual Bravo.
- `logo_escuela.png`: logo de la Escuela de Pensamiento Educativo y Pedagógico.

Las solicitudes de texto, imagen y audio se realizan mediante peticiones `POST` al backend Node.js:

- `https://node.proyectodescartes.org/api/ia/text`
- `https://node.proyectodescartes.org/api/ia/image`
- `https://node.proyectodescartes.org/api/ia/audio`

La clave del proveedor se administra exclusivamente en las variables de entorno del backend y nunca se expone en el navegador.

## Créditos

Diseñado por Juan Guillermo Rivera Berrío con tecnología de inteligencia artificial y las API de Pollinations.
