// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Variable de los nombres de los jugadores
let player1 = [];

function actualizarLista(){
    let lista = player1.map(nombre => `<li>${nombre}</li>`).join("");
    document.getElementById("listaAmigos").innerHTML = lista;
}

function agregarAmigo(){
    // Solicitar el nombre del jugador
    let namePlayer = document.getElementById("amigo").value;
    // Verificar si el nombre ya existe en el array
    if (player1.includes(namePlayer)) {
        alert("El nombre ya existe");
    } else {
        // Agregar el nombre al array
        player1.push(namePlayer);
        // Actualizar la lista de amigos en el HTML como <li>
        actualizarLista();
        alert("Amigo agregado: " + namePlayer);
    }
    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";
    console.log(player1);
}

function sortearAmigo() {
    if (player1.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    // Seleccionar un amigo al azar
    let amigoSorteado = player1[Math.floor(Math.random() * player1.length)];
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}
