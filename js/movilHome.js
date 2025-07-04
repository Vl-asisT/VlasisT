const articulo= [
	{
		url: "url('../img/bolsa.jpg')",
		titulo: "Bolcitas de papel",
		texto: `Ofrecemos bolsitas de papel resistentes, reutilizables y con diseños unicos. Ideales para eventos, negocios o regalos especiales. iElegi calidad y compromiso con el medio ambiente!`,
		boton: {
			texto: "Ver productos",
			accion: "movilBolsas.html"}
	},{
		url: "url('../img/OIP.jpeg')",
		titulo: "nada",
		texto: "none",
		boton: "boton"
	}
	
]

const colores = ["rgbA(0,146,79,0.8)", "rgbA(180,50,79,0.8)", "rgbA(0,0,255,0.8)"]

let indice = 0;

let intervalo; // Variable para almacenar el intervalo

document.addEventListener("click", (event) => {
    if (event.target.id == "volver" || event.target.id == "siguiente") {
        actualizarIndice(event.target.id);
        reiniciarContador(); // Reinicia el intervalo
    }
});

function actualizarIndice(accion) {
    if (accion == "volver") {
        indice = (indice - 1 + articulo.length) % articulo.length; // Evita valores negativos
    } else if (accion == "siguiente") {
        indice = (indice + 1) % articulo.length; // Reinicia si llega al final
    }

	document.documentElement.style.setProperty('--color-principal', colores[indice]);

	window.parent.postMessage({ tipo: "cambiar-color", valor: colores[indice] }, "*");


    actualizarArticulo(); // Llama a la función para actualizar el contenido
}

function reiniciarContador() {
    clearInterval(intervalo); // Detiene el intervalo anterior
    intervalo = setInterval(() => {
        actualizarIndice("siguiente");
    }, 10000); // Reinicia el contador cada 10 segundos
}
reiniciarContador();

function actualizarArticulo() {
	document.getElementById("contenedor_fotos").style.backgroundImage = articulo[indice].url;
	document.getElementById("player_titulo").innerText = articulo[indice].titulo;
	document.getElementById("player_texto").innerText = articulo[indice].texto;
	document.getElementById("player_boton").innerText = articulo[indice].boton.texto;

	document.getElementById("player_boton").onclick = function() {
        window.location.href = articulo[indice].boton.accion;
    };


}
actualizarArticulo();