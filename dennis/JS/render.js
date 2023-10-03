
var botonCargar = document.getElementById('renderBlog');
var elementoOculto = document.getElementById('tik');


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
          mas_info.setAttribute('_id', elemento._id);

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

traer('products', 'plantas');

const eyelashSell = document
  .getElementById('renderComprar')
  .addEventListener('click', (e) => {
    //location.reload();
    var elemento = document.querySelector('.plantasTab');
    elemento.classList.replace('inactiveTab', 'activeTab');

    var elemento = document.querySelector('.cursosTab');
    elemento.classList.replace('activeTab', 'inactiveTab');

    var elemento = document.querySelector('.blogTab');
    elemento.classList.replace('activeTab', 'inactiveTab');
    
    traer('products', 'plantas');
    //document.getElementById('boton-menu').checked = false;
  });

const eyelashCourses = document
  .getElementById('renderCursos')
  .addEventListener('click', (e) => {
    //location.reload();
    var elemento = document.querySelector('.plantasTab');
    elemento.classList.replace('activeTab', 'inactiveTab');

    var elemento = document.querySelector('.cursosTab');
    elemento.classList.replace('inactiveTab', 'activeTab');

    var elemento = document.querySelector('.blogTab');
    elemento.classList.replace('activeTab', 'inactiveTab');
    traer('courses', 'plantas');
    //document.getElementById('boton-menu').checked = false;
  });

  // Funcion para mostrar perfil de tiktok
botonCargar.addEventListener('click', function () {
  const cajaGrande = document.getElementById('items');
  cajaGrande.innerHTML = '';
  // Muestra el elemento oculto cambiando su estilo
  var elemento = document.querySelector('.plantasTab');
    elemento.classList.replace('activeTab', 'inactiveTab');

    var elemento = document.querySelector('.cursosTab');
    elemento.classList.replace('activeTab', 'inactiveTab');

    var elemento = document.querySelector('.blogTab');
    elemento.classList.replace('inactiveTab', 'activeTab');
  elementoOculto.style.display = 'block';
});




const eyelashSell2 = document
  .getElementById('plantasMenu')
  .addEventListener('click', (e) => {
    //location.reload();
    var elemento = document.querySelector('.plantasTab');
    elemento.classList.replace('inactiveTab', 'activeTab');

    var elemento = document.querySelector('.cursosTab');
    elemento.classList.replace('activeTab', 'inactiveTab');

    var elemento = document.querySelector('.blogTab');
    elemento.classList.replace('activeTab', 'inactiveTab');
    
    traer('products', 'plantas');
    document.getElementById('bot-menu').checked = false;
    //document.getElementById('boton-menu').checked = false;
  });

const eyelashCourses2 = document
  .getElementById('cursosMenu')
  .addEventListener('click', (e) => {
    //location.reload();
    var elemento = document.querySelector('.plantasTab');
    elemento.classList.replace('activeTab', 'inactiveTab');

    var elemento = document.querySelector('.cursosTab');
    elemento.classList.replace('inactiveTab', 'activeTab');

    var elemento = document.querySelector('.blogTab');
    elemento.classList.replace('activeTab', 'inactiveTab');
    traer('courses', 'plantas');
    document.getElementById('bot-menu').checked = false;
    //document.getElementById('boton-menu').checked = false;
  });

  // Funcion para mostrar perfil de tiktok
  const eyelashCourses3 = document
  .getElementById('socialMenu')
  .addEventListener('click', function () {
  const cajaGrande = document.getElementById('items');
  cajaGrande.innerHTML = '';
  // Muestra el elemento oculto cambiando su estilo
  var elemento = document.querySelector('.plantasTab');
    elemento.classList.replace('activeTab', 'inactiveTab');

    var elemento = document.querySelector('.cursosTab');
    elemento.classList.replace('activeTab', 'inactiveTab');

    var elemento = document.querySelector('.blogTab');
    elemento.classList.replace('inactiveTab', 'activeTab');
  elementoOculto.style.display = 'block';
  document.getElementById('bot-menu').checked = false;
});

