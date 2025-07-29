# 🎁 Amigo Secreto - Proyecto en JavaScript

Este proyecto web permite organizar un sorteo simple de "Amigo Secreto" directamente desde el navegador, sin necesidad de servidores ni bases de datos. Fue desarrollado usando HTML, CSS y JavaScript puro, ideal como ejercicio de lógica y manipulación del DOM.

---

## 📂 Estructura del Proyecto

/amigo-secreto
├── index.html # Estructura de la página web
├── style.css # Estilos visuales
├── app.js # Lógica principal (agregado y sorteo)
├── assets/ # Imágenes usadas en la interfaz

yaml
Copiar
Editar

---

## 🚀 Funcionalidades

- Agregar nombres de amigos a una lista.
- Evita duplicados automáticamente.
- Visualización dinámica de la lista de nombres ingresados.
- Sorteo aleatorio de un nombre entre los ingresados.
- Diseño visual atractivo y responsivo.

---

## 🛠️ Instalación y Ejecución

1. **Clona este repositorio:**

```bash
git clone https://github.com/tu-usuario/amigo-secreto.git
cd amigo-secreto
Dependencias:

Este proyecto no requiere instalación de dependencias. Funciona únicamente con HTML, CSS y JavaScript puro.

Ejecutar el proyecto:

Abre el archivo index.html en tu navegador:

O bien, doble clic sobre index.html

O con Live Server desde Visual Studio Code:

bash
Copiar
Editar
live-server
🧠 ¿Cómo funciona el código?
app.js – Lógica de la aplicación
1. Declaración de lista de jugadores
js
Copiar
Editar
let player1 = [];
Se crea un array vacío llamado player1 donde se almacenan todos los nombres ingresados.

2. actualizarLista()
js
Copiar
Editar
function actualizarLista(){
    let lista = player1.map(nombre => `<li>${nombre}</li>`).join("");
    document.getElementById("listaAmigos").innerHTML = lista;
}
Convierte el array de nombres en una lista HTML <li>.

Inserta dinámicamente ese HTML dentro del elemento con id listaAmigos.

3. agregarAmigo()
js
Copiar
Editar
function agregarAmigo(){
    let namePlayer = document.getElementById("amigo").value;

    if (player1.includes(namePlayer)) {
        alert("El nombre ya existe");
    } else {
        player1.push(namePlayer);
        actualizarLista();
        alert("Amigo agregado: " + namePlayer);
    }

    document.getElementById("amigo").value = "";
    console.log(player1);
}
Obtiene el nombre ingresado.

Verifica si ya está en la lista.

Si es nuevo, lo agrega al array y actualiza la interfaz.

Limpia el campo de entrada y muestra un alert.

4. sortearAmigo()
js
Copiar
Editar
function sortearAmigo() {
    if (player1.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    let amigoSorteado = player1[Math.floor(Math.random() * player1.length)];
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}
Verifica que haya al menos un nombre en la lista.

Elige un nombre aleatorio con Math.random().

Muestra el nombre sorteado en la página.

💡 Cómo usar la app
Escribí un nombre en el campo de texto.

Hacé clic en “Añadir”.

Repetí los pasos hasta cargar todos los nombres.

Hacé clic en “Sortear amigo” para ver el resultado.

⚠️ Problemas comunes y soluciones
Problema	Solución
El nombre no se agrega	Ya existe en la lista. El sistema evita duplicados.
El botón "Sortear" no responde	Asegurate de haber agregado al menos un nombre.
No se muestran estilos	Verificá que style.css esté bien enlazado en index.html.
Lista no se actualiza	Asegurate de no tener errores en la consola (revisar con F12).

✨ Posibles mejoras futuras
Sorteo completo (cada persona recibe a otra sin repetirse).

Restricciones personalizadas ("X no puede tener a Y").

Persistencia usando localStorage.

Exportación o impresión de resultados.

Animaciones visuales durante el sorteo.

📄 Licencia
Este proyecto es de uso libre y educativo. Podés modificarlo, reutilizarlo o ampliarlo sin restricciones.
