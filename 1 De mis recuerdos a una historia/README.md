# De mis recuerdos a una historia

Aplicación educativa para convertir recuerdos personales en relatos ilustrados y en un taller sencillo de comprensión lectora. Está pensada especialmente para que las personas mayores puedan compartir experiencias de vida, recuperar su memoria autobiográfica y disfrutar de sus historias junto con familiares, cuidadores, docentes o compañeros.

## ¿Qué permite hacer?

- Escribir un recuerdo y convertirlo en una historia de cinco párrafos.
- Elegir el nombre de la persona que será protagonista del relato.
- Seleccionar un estilo literario: épico, realismo mágico, comedia costumbrista, policial, carta íntima, crónica histórica, aventuras, comedia romántica o misterio.
- Generar una ilustración tipo cartoon relacionada con el recuerdo.
- Crear entre 5 y 10 preguntas de comprensión, con 3 o 4 opciones por pregunta.
- Responder el cuestionario y ver el resultado inmediatamente.
- Descargar cada historia como un archivo HTML independiente para conservarla, compartirla o imprimirla.
- Usar la interfaz en español, inglés, francés o alemán.
- Cambiar entre varias paletas de color, incluida una opción de modo claro.

## Público y propósito

La aplicación puede utilizarse en:

- Talleres de memoria y escritura con personas mayores.
- Actividades familiares para conservar anécdotas y tradiciones.
- Procesos de alfabetización digital acompañados.
- Ejercicios de lectura, conversación y expresión oral.
- Espacios educativos, comunitarios o institucionales.

La herramienta no pretende evaluar la memoria de una persona ni reemplazar una conversación humana. El cuestionario es una actividad lúdica de lectura: equivocarse está bien y puede servir para conversar sobre el relato.

## Cómo abrirla

### Opción rápida

1. Abra la carpeta del proyecto.
2. Haga doble clic en `index.html`.
3. Si el navegador pregunta si desea permitir la conexión a Internet, acéptela para generar historias e ilustraciones.

### Opción recomendada para una institución

Sirva la carpeta mediante un servidor web local. Por ejemplo, si tiene Python instalado:

```bash
python -m http.server 8000
```

Después abra `http://localhost:8000/` en el navegador.

Usar un servidor local evita algunas restricciones de los navegadores al abrir archivos directamente y facilita el trabajo en computadores de una sala, biblioteca o centro de atención.

## Guía para la persona mayor

### Antes de comenzar

- Use un computador o tableta con pantalla suficientemente grande.
- Aumente el zoom del navegador si las letras se ven pequeñas. En Windows puede usar `Ctrl` + `+`; para volver al tamaño normal, use `Ctrl` + `0`.
- Procure contar con una conexión estable a Internet.
- Si es posible, realice la actividad con un familiar, cuidador, docente o compañero que pueda ayudar con el teclado y el navegador.

### Crear una historia

1. Abra `index.html`.
2. En **Tu nombre**, escriba el nombre de la persona que contará el recuerdo. Este campo es opcional.
3. En el campo grande, escriba un recuerdo. No hace falta redactarlo perfectamente. Puede escribir frases cortas, por ejemplo: `La primera vez que viajé en tren con mi hermana`.
4. Si desea, escoja un estilo. Para una experiencia cercana y amable se recomiendan **Comedia Costumbrista**, **Crónica Histórica** o **Carta Íntima**.
5. Revise el número de preguntas y de opciones. Para una primera actividad conviene empezar con 5 preguntas y 3 opciones, si esas opciones están disponibles en la versión que se está usando.
6. Pulse **Enviar**. La aplicación mostrará el relato y una ilustración.
7. Lea con calma. También puede leer la historia en voz alta o comentarla con otra persona.

### Resolver el taller

1. Desplácese hasta **Taller de Comprensión Lectora**.
2. Lea una pregunta cada vez.
3. Toque o haga clic en la respuesta que considere correcta. La opción elegida quedará resaltada.
4. Pulse **Evaluar Taller**.
5. Revise el resultado. La aplicación marca las respuestas correctas y, cuando corresponde, muestra cuál era la opción correcta.

### Guardar y compartir

Pulse **Descargar historia**. El navegador descargará un archivo `.html` que puede:

- Abrirse sin volver a generar la historia.
- Guardarse con un nombre reconocible, por ejemplo `historia-de-maria.html`.
- Enviarse como adjunto por correo o mensajería.
- Imprimirse desde el navegador.

El archivo descargado conserva el relato, la ilustración y el cuestionario. Para volver a responderlo, ábralo y seleccione las opciones nuevamente.

## Recomendaciones de accesibilidad y acompañamiento

La aplicación incluye texto ampliable, diseño adaptable a pantallas pequeñas, etiquetas visibles, contraste entre fondos y textos, modo claro, varias paletas y cambio de idioma. También permite avanzar con la tecla `Enter` desde los campos de nombre y recuerdo.

Para una experiencia más cómoda:

- Prefiera el modo claro si el fondo oscuro produce cansancio visual.
- Pruebe la paleta que ofrezca mayor contraste para cada persona. La percepción del color puede variar.
- Lea las instrucciones en voz alta cuando sea necesario.
- Dé tiempo suficiente para recordar y escribir; no es necesario responder rápidamente.
- Permita que la persona dicte el recuerdo mientras otra persona lo escribe, si el teclado resulta difícil.
- Use el zoom del navegador en vez de acercarse demasiado a la pantalla.
- Evite presentar muchos controles a la vez durante una sesión; configure idioma, estilo y preguntas al principio.
- Acompañe siempre el uso si el contenido despierta recuerdos tristes, difíciles o muy personales.

### Importante sobre accesibilidad

La app está orientada a un uso sencillo, pero no reemplaza una auditoría formal de accesibilidad. Las respuestas del cuestionario se implementan como elementos seleccionables y conviene usar ratón o pantalla táctil. Si una persona no puede utilizar estos dispositivos con comodidad, un acompañante puede seleccionar las opciones mientras la persona decide y conversa.

## Ejemplos incluidos

La carpeta contiene historias autónomas ya generadas para mostrar el resultado final:

- `luisa-las-tiendas-de-sábanas-y-la-tormenta-que-pidió-permiso.html`
- `juan-y-la-tarde-prohibida-del-billar-errante.html`
- `la-fila-de-las-horas-crónica-del-primer-televisor-del-barrio.html`
- `adriana-el-molino-y-el-gran-misterio-de-las-arepas.html`

Estas páginas se pueden abrir directamente para leer un ejemplo, incluso sin iniciar una nueva generación. `index0.html` e `historia buena.html` son variantes anteriores de la interfaz; para comenzar una actividad nueva se recomienda `index.html`.

## Requisitos

- Navegador moderno: Chrome, Edge, Firefox o Safari actualizado.
- JavaScript habilitado.
- Conexión a Internet para generar texto, avatares e ilustraciones.
- No se requiere instalar dependencias ni configurar una clave API para el uso normal.

## Cómo funciona técnicamente

Es una aplicación estática, sin framework ni proceso de compilación:

- HTML, CSS y JavaScript están integrados en `index.html`.
- El texto se solicita mediante `https://node.proyectodescartes.org/api/ia/text`.
- Las imágenes se solicitan mediante `https://node.proyectodescartes.org/api/ia/image`.
- La respuesta textual se transforma en una historia y un cuestionario interactivo en el navegador.
- Los logos institucionales tienen una versión integrada en Base64, por lo que la página puede mantenerse funcional aunque no encuentre los archivos locales de logos.
- La descarga genera otro HTML autónomo con el contenido de la historia y sus estilos.

## Privacidad y uso responsable

El recuerdo escrito se envía a un servicio remoto de inteligencia artificial para generar el texto y la imagen. Antes de usar la app en un taller:

- Explique esta condición a las personas participantes.
- No escriba números de documento, direcciones, teléfonos, contraseñas ni información médica.
- Use nombres de pila o seudónimos cuando la actividad sea pública.
- Pida autorización antes de compartir o publicar una historia.
- Recuerde que una historia generada por IA puede inventar detalles o cambiar el sentido del recuerdo original. Revísela y corríjala conversando con la persona protagonista.

La aplicación no muestra un sistema propio de cuentas ni un historial en servidor. Las historias generadas permanecen en la pantalla hasta cerrar o recargar la página, salvo que se descarguen como archivo.

## Solución de problemas

### No aparece la historia

- Compruebe que haya conexión a Internet.
- Espere unos segundos: se generan texto e imagen por separado.
- Recargue la página y pruebe con un recuerdo más corto.
- Si continúa el mensaje de error, el servicio remoto puede estar temporalmente fuera de línea.

### La ilustración no carga

La generación de imágenes depende de un servicio remoto distinto al del texto. La historia puede seguir apareciendo aunque la imagen falle. Revise la conexión o intente nuevamente.

### El archivo descargado no abre

- Asegúrese de conservar la extensión `.html`.
- Ábralo con un navegador, no con un procesador de texto.
- Si se va a compartir, envíe el archivo completo y no copie solamente el texto.

### Las letras son pequeñas

Aumente el zoom del navegador con `Ctrl` + `+` o utilice las opciones de accesibilidad del sistema operativo. La interfaz se adapta al tamaño disponible de la pantalla.

## Mantenimiento y mejoras futuras

Antes de publicar una nueva versión conviene verificar especialmente:

- Que los servicios remotos sigan disponibles y acepten los modelos mostrados en el selector.
- Que las opciones del cuestionario puedan seleccionarse con teclado y lectores de pantalla.
- Que cada botón tenga un tamaño cómodo para personas con poca precisión motora.
- Que el contenido generado sea revisado antes de imprimirse o compartirse.
- Que los textos, colores y tamaños se prueben con personas mayores reales.

## Autoría

Diseñado por Juan Guillermo Rivera Berrío para la Escuela de Pensamiento Educativo y Pedagógico de la Institución Universitaria Pascual Bravo. Utiliza tecnología de generación de texto e imágenes mediante las API indicadas en la propia aplicación.
