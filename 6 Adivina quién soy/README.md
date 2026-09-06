# 🧩 Adivina quién soy

Aplicación web educativa, de un solo archivo (`adivina-quien-soy.html`),
diseñada especialmente para el **entrenamiento cognitivo de adultos
mayores**. El ejercicio invita a reconocer un personaje, un lugar o un
acontecimiento de una época pasada del siglo XX a partir de pistas, y a
escribir la respuesta letra por letra.

Desarrollado por **Juan Guillermo Rivera Berrío** para la
**Escuela de Pensamiento Educativo y Pedagógico**, en el marco de la
**Institución Universitaria Pascual Bravo**.

---

## 1. ¿Para qué sirve?

Este ejercicio está inspirado en las dinámicas de **estimulación de la
memoria a largo plazo** y **reminiscencia** que se usan en programas de
envejecimiento activo, porque:

- Invita a **recordar hechos, personas y lugares de su propia juventud o
  adultez** (los años 50, 60, 70, 80...), lo cual suele despertar recuerdos
  vívidos y agradables, además de conversación con quien lo acompañe.
- Ejercita la **memoria semántica** (asociar pistas con un nombre) y la
  **memoria de trabajo** (mantener la palabra mientras se completan las
  letras).
- Refuerza la **atención y concentración**, al comparar cada letra escrita
  con la posición correcta.
- Da una sensación de **logro inmediato**, gracias a la retroalimentación
  instantánea (verde/rojo) en cada letra.

A diferencia de un juego con límite de tiempo o penalizaciones fuertes,
aquí el objetivo es disfrutar el proceso de recordar, con ayudas
disponibles en todo momento para que nadie se quede "trabado" sin poder
avanzar.

## 2. Diseño pensado para personas mayores

- **Letra grande por defecto** (tamaño base de 19px, títulos y pistas aún
  más grandes) para reducir el esfuerzo visual.
- **Alto contraste de color**: textos oscuros sobre fondos claros y textos
  claros sobre fondos oscuros.
- **Una sola letra por casilla**, con foco automático a la siguiente: no
  hay que hacer clic en cada casilla, solo escribir y el cursor avanza
  solo, lo cual es mucho más simple que arrastrar objetos con el mouse.
- **Retroalimentación inmediata y clara**: cada letra se pinta de verde
  (correcta) o rojo (incorrecta) apenas se escribe, sin esperar a completar
  toda la palabra ni leer mensajes largos.
- **Nunca se llega a un punto sin salida**: siempre hay pistas adicionales
  disponibles y un botón "Me rindo, mostrar respuesta" que revela la
  palabra sin culpa ni penalización dura, para que la sesión pueda seguir
  fluyendo.
- **Botones grandes y espaciados** (altura mínima de ~56px), fáciles de
  presionar incluso con menor precisión motriz o en pantallas táctiles.
- **Foco visible al usar el teclado** (para quien navegue con tabulador en
  lugar de mouse) y navegación también posible con las flechas
  izquierda/derecha entre casillas.
- **Sin límite de tiempo, sin música ni sonidos súbitos, sin animaciones
  bruscas**: el ritmo lo marca completamente la persona que juega.
- **Diseño responsivo**: en pantallas pequeñas (tabletas o celulares) los
  logos y las casillas se reacomodan para seguir siendo grandes y fáciles
  de usar.

## 3. Cómo se usa (guía rápida)

1. **Abrir el archivo** `adivina-quien-soy.html` con doble clic; se abre
   en el navegador predeterminado (Chrome, Edge, Firefox, Safari). No
   requiere instalación ni cuentas.
2. **Elegir una época** del siglo pasado en la lista desplegable (años 20
   a 90), o la opción "Sorpréndeme" para que la época sea una sorpresa. Se
   recomienda elegir la década que la persona mayor vivió más de cerca
   (por ejemplo, su juventud), para activar recuerdos personales.
3. **Elegir cuántas rondas** tendrá el juego (entre 3 y 10). Para una
   primera sesión, se sugiere empezar con 3 a 5 rondas para no cansar.
4. Presionar **"Comenzar Juego"**. La aplicación pide a un servicio de
   inteligencia artificial que genere personajes, lugares o hechos de esa
   época junto con sus pistas; si no hay conexión a internet, el juego usa
   automáticamente un banco de preguntas de respaldo para que la actividad
   nunca se interrumpa.
5. En cada ronda aparece una **etiqueta de categoría** (🧑 Personaje,
   📍 Lugar o 📅 Acontecimiento) y una **primera pista**. Se puede pedir
   hasta **2 pistas adicionales** con el botón "Mostrar otra pista" si la
   persona lo necesita.
6. **Escribir la respuesta** letra por letra en las casillas: al escribir
   una letra correcta se pone verde y el cursor avanza solo a la
   siguiente; si la letra no es correcta se pone roja y se puede corregir
   con la tecla de retroceso.
7. Si la persona no logra recordar la palabra, puede presionar
   **"Me rindo, mostrar respuesta"** para verla y continuar sin frustración.
8. Al completar todas las rondas aparece el **puntaje final** y el
   porcentaje de acierto.
9. El botón **"Descargar Juego"** guarda una copia del ejercicio en el
   punto exacto en que se encuentra (incluyendo las letras ya escritas)
   como un archivo HTML independiente, útil para continuar después o
   compartirlo con un familiar, cuidador o terapeuta ocupacional.

### Recomendaciones para quien acompañe la sesión

- Sentarse junto a la persona, sobre todo las primeras veces, para leer
  las pistas en voz alta si lo prefiere.
- Elegir la época con la persona mayor, dejando que ella misma decida qué
  década quiere recordar.
- Aprovechar cada pista y cada respuesta como punto de partida para
  conversar: "¿Te acuerdas de cuando...?", "¿Qué recuerdas de esa época?".
- No apurar la actividad ni corregir por la persona: dejar que use las
  pistas y el botón de rendirse a su propio ritmo.
- Si una época no genera buenos recuerdos o resulta confusa, cambiarla sin
  problema; el objetivo es disfrutar, no acertar todo.

## 4. Requisitos técnicos

- Un navegador web moderno (Chrome, Edge, Firefox o Safari).
- Conexión a internet **solo** para generar preguntas nuevas con IA sobre
  la época elegida. Si no hay conexión, o el servicio no responde, la
  aplicación usa automáticamente un banco de personajes, lugares y hechos
  predefinidos para cada década (20 a 90).
- No requiere instalación, registro ni claves de acceso: es un único
  archivo HTML autocontenido (incluye los logos institucionales
  integrados).

## 5. Estructura del archivo

Todo el proyecto vive en `adivina-quien-soy.html`:

- **HTML**: encabezado con los logos institucionales, formulario de
  configuración (época y número de rondas), área de juego (categoría,
  pistas, casillas de letras) y resultados finales.
- **CSS** (dentro de `<style>`): paleta de colores institucional con
  fondos degradados, tipografía ampliada y estilos accesibles, coherente
  con el resto de juegos de la serie.
- **JavaScript** (dentro de `<script>`): lógica del juego (generación de
  rondas, verificación letra por letra, sistema de pistas y puntaje,
  descarga del clon funcional) y la conexión con la API de texto de
  Pollinations AI para generar las preguntas.

## 6. Créditos

Diseñado por **Juan Guillermo Rivera Berrío**, con generación de
contenido vía Pollinations AI, para la Escuela de Pensamiento Educativo y
Pedagógico de la Institución Universitaria Pascual Bravo.
