# Juego de Palabras Desordenadas

Aplicación web educativa, de un solo archivo (`index.html`), pensada para el
entrenamiento cognitivo de **adultos mayores**. El ejercicio consiste en
arrastrar letras desordenadas hasta las casillas correctas para reconstruir
una palabra, dentro de un tema elegido libremente (animales, frutas,
deportes, ciudades, etc.).

Desarrollado por **Juan Guillermo Rivera Berrío** para la
**Escuela de Pensamiento Educativo y Pedagógico**, en el marco de la
**Institución Universitaria Pascual Bravo**.

---

## 1. ¿Para qué sirve?

Este tipo de ejercicios de ordenar letras se usa habitualmente en programas
de **estimulación cognitiva** y **envejecimiento activo**, porque ejercita:

- **Memoria de trabajo**: recordar la palabra mientras se ubican las letras.
- **Atención sostenida**: revisar letra por letra sin perder el hilo.
- **Coordinación visomotriz**: arrastrar y soltar con precisión.
- **Vocabulario y ortografía**: relacionadas con un tema familiar.

Al permitir elegir el tema y el número de palabras, un cuidador, docente o
gerontólogo puede adaptar la dificultad y el contenido a los intereses y al
ritmo de cada persona.

## 2. Diseño pensado para personas mayores

La interfaz se ajustó específicamente para reducir barreras comunes en
personas mayores al usar una pantalla:

- **Letra grande por defecto** (tamaño base de 19px, títulos más grandes
  todavía) para minimizar el esfuerzo visual.
- **Alto contraste de color**: textos oscuros sobre fondos claros y textos
  claros sobre fondos oscuros, evitando combinaciones de bajo contraste.
- **Botones grandes y espaciados** (altura mínima de ~56px), fáciles de
  presionar incluso con menor precisión motriz o en pantallas táctiles.
- **Retroalimentación clara**: la casilla y la letra cambian de color
  (verde/rojo) de inmediato al soltar una letra, sin necesidad de leer texto
  adicional.
- **Foco visible al usar el teclado** (para quien navegue con tabulador en
  lugar de mouse).
- **Sin animaciones bruscas ni parpadeos**: las transiciones son suaves y
  breves, evitando mareo o distracción.
- **Diseño responsivo**: en pantallas pequeñas (tabletas o celulares) los
  logos se reacomodan y los botones se apilan para seguir siendo grandes y
  fáciles de tocar.

## 3. Cómo se usa (guía rápida)

1. **Abrir el archivo** `index.html` con doble clic; se abre en el navegador
   predeterminado (Chrome, Edge, Firefox, Safari). No requiere instalación.
2. **Escribir un tema** en el campo de texto (por ejemplo: *animales*,
   *frutas*, *ciudades*). Se recomienda que un acompañante ayude a elegir un
   tema cercano a los intereses de la persona.
3. **Elegir cuántas palabras** tendrá el ejercicio (entre 3 y 10). Para
   personas que se inician en este tipo de ejercicios, se sugiere comenzar
   con 3 a 5 palabras.
4. Presionar **"Generar Ejercicios con IA"**. La aplicación solicita
   palabras relacionadas con el tema a un servicio en línea; si no hay
   conexión, usa un banco de palabras de respaldo para que el juego nunca se
   interrumpa.
5. **Arrastrar cada letra** desde la fila inferior hasta la casilla que le
   corresponde en la palabra. Si la letra es correcta, la casilla se pone
   verde; si no, se pone roja y se puede volver a intentar.
6. Al completar una palabra, el juego avanza automáticamente a la siguiente.
   También se puede navegar con los botones **"Anterior"** y **"Siguiente"**.
7. Al terminar todas las palabras, aparece el **puntaje final** y el
   porcentaje de acierto.
8. El botón **"Descargar Juego"** guarda una copia del ejercicio ya
   resuelto (o en el punto en que se encuentre) como un archivo HTML
   independiente, útil para revisar el progreso más adelante o compartirlo
   con un familiar, docente o terapeuta.

### Recomendaciones para quien acompañe la sesión

- Sentarse junto a la persona durante las primeras veces para explicar el
  arrastre de letras con el mouse o el dedo (en pantallas táctiles).
- Elegir temas significativos para la persona (su ciudad natal, su comida
  favorita, sus pasatiempos) para aumentar la motivación.
- No apurar la actividad: el ejercicio no tiene límite de tiempo.
- Si el puntaje baja por errores, recordar que restar puntos busca fomentar
  la atención, no penalizar; lo importante es completar la palabra.

## 4. Requisitos técnicos

- Un navegador web moderno (Chrome, Edge, Firefox o Safari).
- Conexión a internet **solo** para generar palabras nuevas con IA a partir
  de un tema. Si no hay conexión, o el servidor no responde, la aplicación
  usa automáticamente un banco de palabras predefinido para varios temas
  comunes (animales, frutas, deportes, ciudades, países, comidas) o un banco
  genérico de respaldo.
- No requiere instalación, registro ni claves de acceso: es un único
  archivo HTML autocontenido (incluye los logos institucionales integrados).

## 5. Estructura del archivo

Todo el proyecto vive en `index.html`:

- **HTML**: estructura del encabezado (con los logos institucionales), el
  formulario de tema, el área del ejercicio y los resultados.
- **CSS** (dentro de `<style>`): paleta de colores institucional con fondos
  degradados, tipografía ampliada y estilos accesibles.
- **JavaScript** (dentro de `<script>`): lógica del juego (mezclar letras,
  arrastrar y soltar, puntaje, navegación entre ejercicios) y la conexión al
  servicio de generación de palabras por IA.

## 6. Créditos

Diseñado por **Juan Guillermo Rivera Berrío**, con apoyo de tecnología de
IA para la generación de contenido, para la Escuela de Pensamiento
Educativo y Pedagógico de la Institución Universitaria Pascual Bravo.
