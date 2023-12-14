
let marca = prompt("Ingresar marca de la camiseta ");
let year = Number(prompt("Ingresar el año de la camiseta"));
let minimo = Number(prompt("Ingresar el precio minimo"));
let maximo = Number(prompt("Ingresar el precio maximo"));
let equipo = prompt("Ingresar el equipo/seleccion que busques ");
let jugador = prompt("Ingresa el nombre del jugador que busques");
let talle = prompt("Ingresar talle");

const datosBusqueda = {
    marca: marca,
    year: year,
    minimo: minimo,
    maximo: maximo,
    equipo: equipo,
    jugador: jugador,
    talle: talle,
};

function mostarCamisetas(camisetas){
    camisetas.forEach( (camiseta) => {
        let respuesta = document.querySelector("ul");
        respuesta.innerHTML += `
              <li>${camiseta.marca}  -  ${camiseta.equipo} -  ${auto.year}  - ${camiseta.jugador} Jugador - Tralle ${camiseta.talle} - Precio ${camiseta.precio}<li/>        
        `;
        console.log(`
              ${camiseta.marca}  -  ${camiseta.equipo} -  ${camiseta.year}  - ${camiseta.jugador} Jugador - Talle ${camiseta.talle} - Precio ${camiseta.precio}       
        `);
    });
}
function filtrarMarca(auto) {
    if (datosBusqueda.marca) {
      return auto.marca === datosBusqueda.marca;
    } else {
      return auto;
    }
  }
  function filtrarEquipo(auto) {
    if (datosBusqueda.equipo) {
      return auto.equipo === datosBusqueda.equipo;
    } else {
      return auto;
    }
  }
  function filtrarYear(auto) {
    if (datosBusqueda.year) {
      return auto.year === datosBusqueda.year;
    } else {
      return auto;
    }
  }
  function filtrarMinimo(auto) {
    if (datosBusqueda.minimo) {
      return auto.precio >= datosBusqueda.minimo;
    } else {
      return auto;
    }
  }
  function filtrarMaximo(auto) {
    if (datosBusqueda.maximo) {
      return auto.precio <= datosBusqueda.maximo;
    } else {
      return auto;
    }
  }
  function filtrarJugador(auto) {
    if (datosBusqueda.jugador) {
      return auto.jugador === datosBusqueda.jugador;
    } else {
      return auto;
    }
  }
  function filtrarTalle(auto) {
    if (datosBusqueda.talle) {
      return auto.talle === datosBusqueda.talle;
    } else {
      return auto;
    }
  }
  function filtrarCamisetas() {
    const resultado = camisetas
      .filter(filtrarMarca)
      .filter(filtrarEquipo)
      .filter(filtrarYear)
      .filter(filtrarMinimo)
      .filter(filtrarMaximo)
      .filter(filtrarJugador)
      .filter(filtrarTalle)
      console.log(resultado)
   
}
  filtrarCamisetas();