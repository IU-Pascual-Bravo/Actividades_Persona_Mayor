# IA interpreta mi boceto

Aplicación educativa para que las personas mayores puedan dibujar o subir un boceto, recibir una descripción mediante inteligencia artificial y generar una imagen a partir de esa idea.

## Uso previsto

La herramienta está diseñada para adultos mayores como una experiencia sencilla, visual y accesible de exploración creativa. No requiere conocimientos técnicos ni una cuenta de inteligencia artificial: las credenciales se gestionan exclusivamente en el backend.

## Funciones principales

- Dibujar con ratón, pantalla táctil o tableta.
- Elegir colores desde una paleta amplia o mediante el selector de color.
- Usar la herramienta de relleno y el borrador.
- Deshacer los últimos trazos o rellenos.
- Subir un boceto existente como imagen.
- Analizar el boceto con el endpoint de visión del backend.
- Generar una imagen con modelos autorizados.
- Comparar el boceto y la imagen generada mediante el deslizador.
- Descargar el boceto y la imagen generada con IA.

## Cómo utilizarla

1. Dibuja una idea en el lienzo o pulsa **Subir Boceto** para cargar una imagen.
2. Usa **Borrador**, **Rellenar**, **Deshacer** y la paleta para editarla.
3. Pulsa **Analizar tu obra** y espera la descripción del dibujo.
4. Elige un estilo y un modelo de imagen.
5. Pulsa **Generar con IA**.
6. Utiliza el deslizador para comparar ambas imágenes.
7. Descarga el boceto o la imagen generada cuando lo desees.

## Seguridad

El frontend no contiene API keys. Todas las solicitudes de texto, visión e imagen se realizan mediante el servidor Node.js configurado en:

`https://node.proyectodescartes.org/`

La API key se mantiene en las variables de entorno del backend y no se almacena en el navegador.

## Archivos de imagen

- `logo_escuela.png`: logo de la Escuela de Pensamiento Educativo y Pedagógico.
- `logoPB1.png`: logo disponible de la Institución Universitaria Pascual Bravo. El frontend también intenta primero `logoPB10.png` y usa `logoPB1.png` como respaldo.
