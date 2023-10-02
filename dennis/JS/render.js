var botonCargar = document.getElementById('renderBlog');
var elementoOculto = document.getElementById('tik');

// Funcion para mostrar perfil de tiktok
botonCargar.addEventListener('click', function() {
  const cajaGrande = document.getElementById('items');
  cajaGrande.innerHTML = '';
  // Muestra el elemento oculto cambiando su estilo
  elementoOculto.style.display = 'block';
});




//metodo get desde el frontend
function traer(eyelash, category) {
  const telefonoParaContacto = 51980943681;
  const urlRaiz = 'http://localhost:8080';
  //const urlRaiz = "http://18.228.203.151:8080";
  //const urlRaiz = "https://elwayardo.com";
  //const urlRaiz = "https://dry-plateau-16443.herokuapp.com";

  elementoOculto.style.display = 'none';
  

  const url = `${urlRaiz}/api/v1/${eyelash}`;
  const cajaGrande = document.getElementById('items');
  cajaGrande.innerHTML = '';
  window
    .fetch(url)
    .then((respuesta) => respuesta.json())
    .then((responseJson) => {
      const todosLosElementos = [];
      responseJson.forEach((elemento) => {
        if (elemento.category == category) {

          

          const card = document.createElement('div');
          card.className = 'card';

          const imagen = document.createElement('img');
          imagen.src = elemento.imageUrl;

          const info = document.createElement('div');
          info.className = 'info';

          const price_box = document.createElement('div');
          price_box.className = 'price';

          const title = document.createElement('h3');
          const tituloProduct = elemento.name;
          title.textContent = tituloProduct;

          const price = document.createElement('p');
          const priceNumber = elemento.price;
          price.textContent = `s/${priceNumber}`;

          const calltoaction = document.createElement('div');
          calltoaction.className = 'calltoaction';

          const mas_info = document.createElement('p');
          mas_info.textContent = 'ver más información';
          mas_info.setAttribute('_id', elemento._id)

          const boton_info = document.createElement('button');
          boton_info.textContent = 'Cotizar';

          price_box.append(title, price);
          calltoaction.append(mas_info, boton_info);

          info.append(price_box, calltoaction);

          card.append(imagen, info);

          todosLosElementos.push(card);

          const cajaGrande = document.getElementById('items');

          cajaGrande.append(...todosLosElementos);
        }
      });
    });
}

traer('products','plantas');

const eyelashSell = document.getElementById('renderComprar').addEventListener('click', (e) => {
    //location.reload();
    traer('products', 'plantas');
    //document.getElementById('boton-menu').checked = false;
  });

const eyelashCourses = document.getElementById('renderCursos').addEventListener('click', (e) => {
    //location.reload();
    traer('courses', 'plantas');
    //document.getElementById('boton-menu').checked = false;
  });



  /* 
const menuRoperos = document
  .getElementById('roperosMenu').addEventListener('click', (e) => {
    //location.reload();
    traer('roperos');
    document.getElementById('boton-menu').checked = false;
  });
const menuCocina = document
  .getElementById('cocinaMenu')
  .addEventListener('click', (e) => {
    //location.reload();
    traer('cocina');
    document.getElementById('boton-menu').checked = false;
  });
const menuTermos = document
  .getElementById('termosMenu')
  .addEventListener('click', (e) => {
    //location.reload();
    traer('termos');
    document.getElementById('boton-menu').checked = false;
  });
const menuEquipaje = document
  .getElementById('equipajeMenu')
  .addEventListener('click', (e) => {
    //location.reload();
    traer('equipaje');
    document.getElementById('boton-menu').checked = false;
  });
const menuBelleza = document
  .getElementById('bellezaMenu')
  .addEventListener('click', (e) => {
    //location.reload();
    traer('belleza');
    document.getElementById('boton-menu').checked = false;
  });

const botonElectro = document
  .getElementById('electroCategory')
  .addEventListener('click', (e) => {
    traer('electro');
  });

const botonRoperos = document
  .getElementById('roperosCategory')
  .addEventListener('click', (e) => {
    traer('roperos');
  });

const botonCocina = document
  .getElementById('cocinaCategory')
  .addEventListener('click', (e) => {
    traer('cocina');
  });

const botonTermos = document
  .getElementById('termosCategory')
  .addEventListener('click', (e) => {
    traer('termos');
  });

const botonEquipaje = document
  .getElementById('equipajeCategory')
  .addEventListener('click', (e) => {
    traer('equipaje');
  });

const botonBelleza = document
  .getElementById('bellezaCategory')
  .addEventListener('click', (e) => {
    traer('belleza');
  }); */

//function search

function filterSearch(input, selector) {
  document.addEventListener('keyup', (e) => {
    if (e.target.matches(input)) {
      console.log(e.target.value);
    }
  });
}


// Obtén referencias a los elementos







var botonMostrar = document.getElementById('mostrarId');

var botonCerrar = document.getElementById('botonCerrar');

// Agrega un controlador de eventos para mostrar el div cuando se presiona el botón
const boton = document.getElementById('items0').addEventListener('click', e => {

if (e.target.classList.contains('mostrar')) {
  const getIdMongoElement = e.target.previousElementSibling;

  getIdMongoElement.style.display = 'block';
}

  
});

// Agrega un controlador de eventos para cerrar el div cuando se presiona el botón de cerrar
/* botonCerrar.addEventListener('click', function() {
  divSobreponible.style.display = 'none';
}); */





