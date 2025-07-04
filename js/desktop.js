const menues = {
	inicio: "index.html",
	productos: {
		musica: "#",
		"bolsas de papel": "bolsas.html",
	},
};

class Menu {
	constructor() {
		const HEADER = document.querySelector("header");

		function recorrerMenus(objeto, contenedor, nivel = 1) {
			const submenues = document.createElement("ul");

			if (nivel >= 2) {
				submenues.classList.add("submenu");
				submenues.style.zIndex = nivel

				if (nivel % 2 !== 0) {
					submenues.style.top = "0%";
					submenues.style.left = "100%";
				}
			};

			// Recorremos el objeto correctamente con Object.entries()
			Object.entries(objeto).forEach(([clave, valor]) => {
				const menu = document.createElement("li");

				const link = document.createElement("a");
				
				link.innerText = clave; // Texto del enlace
				menu.appendChild(link); // Insertamos el <a> dentro del <li>

				if (typeof valor === "object") {
					contenedor.appendChild(menu); // Agregamos el submenú al contenedor actual
					recorrerMenus(valor, menu, nivel + 1); // Recorremos el submenú recursivamente
				} else {
					link.href = valor; // Atributo href de la etiqueta <a>
				}
				submenues.appendChild(menu); // Agregamos el <li> al <ul>
			});

			contenedor.appendChild(submenues); // Insertamos el menú en el contenedor
		}

		recorrerMenus(menues, HEADER);
	}
}

// Instanciamos la clase para que el menú se genere automáticamente
new Menu();
