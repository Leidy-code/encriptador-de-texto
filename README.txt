Encriptador de Texto
Este proyecto es un encriptador de texto simple que toma una entrada de texto y la transforma según un conjunto de reglas de
 encriptación predefinidas. También es capaz de revertir la encriptación (desencriptar) y permite copiar el texto encriptado
 o desencriptado al portapapeles.

Archivos en el Proyecto
index.html: Contiene la estructura HTML del programa.
style.css: Contiene los estilos CSS para la presentación y responsividad de la página.
app.js: Contiene la lógica de JavaScript para encriptar, desencriptar y copiar el texto.
images/imagen.png: Imagen utilizada como placeholder cuando no se ha digitado ningún texto.
README.txt: Documento que explica el funcionamiento del programa.
Funcionamiento del Programa

1.Interfaz de Usuario
Cuadro de Texto (Izquierda): El usuario escribe el texto que desea encriptar o desencriptar en un área de texto en el lado izquierdo 
de la pantalla. Debe tener en cuenta que solo se aceptan letras minúsculas y sin acentos.

Mensaje Informativo: Debajo del área de texto, se muestra un mensaje en rojo que indica "Solo letras minúsculas y sin acentos" para
 guiar al usuario.

Botones de Encriptar y Desencriptar: Justo debajo del cuadro de texto, se encuentran dos botones:

Encriptar: Convierte el texto ingresado en su forma encriptada.
Desencriptar: Convierte el texto encriptado de vuelta a su forma original.
2.Visualización del Resultado
Sección de Resultado (Derecha): La sección derecha de la pantalla muestra el texto encriptado o desencriptado. Por defecto, muestra un
mensaje de espera que dice "No ha digitado ninguna oración" junto con una imagen de placeholder.

Comportamiento del Placeholder: Cuando se encripta o desencripta un texto, la imagen y el mensaje "No ha digitado ninguna oración"
 desaparecen, mostrando solo el resultado.

3.Copiar al Portapapeles
Botón de Copiar: Debajo del resultado, hay un botón "Copiar" que permite al usuario copiar el texto mostrado al portapapeles, funcionando como si se hubiera usado Ctrl+C.
Paso 4: Responsividad
Diseño Adaptable: El programa está diseñado para ser completamente responsivo, lo que significa que se ajustará adecuadamente a diferentes tamaños de pantalla, desde dispositivos móviles hasta pantallas de escritorio.
Reglas de Encriptación
Las reglas utilizadas para la encriptación son las siguientes:

La letra "e" es convertida en "enter".
La letra "i" es convertida en "imes".
La letra "a" es convertida en "ai".
La letra "o" es convertida en "ober".
La letra "u" es convertida en "ufat".
Ejemplos:
Encriptar:
Entrada: gato
Salida: gaitober
Desencriptar:
Entrada: gaitober
Salida: gato
Instrucciones de Uso
Escribe el texto: Ingresa el texto en el cuadro de texto en la parte izquierda.
Encripta o Desencripta: Haz clic en el botón "Encriptar" para convertir el texto o en "Desencriptar" para revertirlo.
Verifica el Resultado: El resultado aparecerá en la sección derecha.
Copia el Texto: Si deseas copiar el texto resultante, haz clic en el botón "Copiar".