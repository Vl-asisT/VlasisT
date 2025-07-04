const menuDesplegable = document.getElementById("contenedor_menu_desplegable");
const webView = document.getElementById("webView");

document.addEventListener("click", (event) => {
    console.log(event.target.id)

    switch (event.target.id) {
        case "menu_amburguesa" :
            menuDesplegable.style.display = "block";
            break;
        case "contenedor_menu_desplegable" :
            cambiarLaPágina();
            break;
        case "bolsas" :
            cambiarLaPágina("movilBolsas");
            break;
        case "titulo" :
            cambiarLaPágina("movilHome");
            break;
        case "inicio" :
            cambiarLaPágina("movilHome");
            break;
    };
});

function cambiarLaPágina(ruta = null) {
    const rutaCompleta = `${ruta}.html`;
    const archivoActual = webView.src.split("/").pop(); // obtiene solo "movilHome.html"

    if (ruta && archivoActual !== rutaCompleta) {
        webView.src = rutaCompleta;
        console.error("se cambió la ruta de webview");
    }
    
    menuDesplegable.style.display = "none";
}

window.addEventListener("message", (event) => {
    if (event.data.tipo === "cambiar-color") {
        document.documentElement.style.setProperty('--color-principal', event.data.valor);
    }
});
