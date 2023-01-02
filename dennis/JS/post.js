//const urlRaiz = "https://dry-plateau-16443.herokuapp.com";
//const urlRaiz = "http://localhost:8080";
// const urlRaiz = "http://18.228.203.151:8080"

//const url = `${urlRaiz}/api/v1/products`;
//const urlUpload = `${urlRaiz}/api/v1/products/upload`;

//const urlRaiz = "http://localhost:8080";
const urlRaiz = "http://18.228.203.151:8080";

const url = `${urlRaiz}/api/v1/products`;
const urlUpload = `${urlRaiz}/api/v1/products/files`;

//metodo get
function traer(){
  const cajaGrande = document.getElementById('articulos');
  cajaGrande.innerHTML = "";
  window
  .fetch(url)
    .then((respuesta)=> respuesta.json())
    .then((responseJson)=>{
      const todosLosElementos = [];
      responseJson.forEach((elemento) => {
        const container = document.createElement('article');
        //container.id = elemento.id;
        const imagen = document.createElement('img');
        imagen.src = elemento.imageUrl;
        const detalles = document.createElement('div');
        detalles.className = 'detalles'
        const title = document.createElement('p');
        title.textContent = elemento.name;
        const price = document.createElement('h1');
        price.textContent = elemento.price;
        const caracteristicas = document.createElement('div');
        caracteristicas.className = 'caracteristicas'
        const arrayCaracteristicas = elemento.caracteristicas;
        arrayCaracteristicas.forEach(item => {
          const itemList = document.createElement('p');
          itemList.textContent = item;
              caracteristicas.append(itemList)
            })
              detalles.append(title,price,caracteristicas);
        const callToAction = document.createElement('button');
        callToAction.className = 'calltoaction';
        const eliminar = document.createElement('button');
        eliminar.className = 'buttonDelete';
        //faker
        //eliminar.setAttribute('_id', elemento.id)

        //mongoDB
        eliminar.setAttribute('_id', elemento._id)

        eliminar.textContent = 'eliminar';
        const link = document.createElement('a');
        const wsp = document.createElement('div');
        wsp.className = 'wsp';
        const contact = document.createElement('p');
        contact.textContent = 'Contactar';
        const icon = document.createElement('img');
        icon.src = '/icons/whatsapp3.png';
        icon.alt = 'icono de Whatsapp'
          wsp.append(contact,icon);
          link.append(wsp);
          callToAction.append(link);
          container.append(imagen, detalles, callToAction, eliminar);
        container.className = 'articulos__container';
        container.classList.add = 'column-1';
        todosLosElementos.push(container);

          cajaGrande.append(...todosLosElementos);

      });
    })
}

// metodo post
/* async function subirImagen() {
  const form = document.getElementById('uploadImage')
  const formData = new FormData(form);

  async function createProduct() {

    const nombre = document.getElementById('nameInput')
    const categoria = document.getElementById('categoryInput')
    const precio = document.getElementById('priceInput')
    //array
    const arrayCarac = [];
    const carac = document.getElementsByClassName('caracInput'),
    namesValue = [].map.call(carac, function(dataInput){
      arrayCarac.push(dataInput.value);
    })
    const imagen = document.getElementById('imageInput')
    //console.log(imagen);


    const objetoImage = formData.get('foto');
    //console.log(objetoImage);
    const urlArmada = `/images/${objetoImage.name}`
    //console.log(urlArmada);

    const productoNuevo = {
      name: nombre.value,
      category: categoria.value,
      price: precio.value,
      caracteristicas: arrayCarac,
      imageUrl: urlArmada
    }

    //console.log(productoNuevo);

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productoNuevo)
  });

  const data = await res.json()

    console.log('save')
    traer();
    //console.log(res)

    if (res.status !== 200) {
      console.log("hubo un error: " + res.status + data.message);
    }
}
  await createProduct();

  //con este bloque estamos subiendo la imagen al backend
  const res = await fetch(urlUpload, {
    method: 'POST',
    body: formData
  })


} */

//renderizacion
traer();

//metodo delete
async function deleteCard(id) {
  const res = await fetch(`${url}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "Delete",
  });
  const data = await res.json();
  console.log(data);
}

const boton = document.getElementById('articulos')
.addEventListener('click', e => {
  if(e.target.classList.contains('buttonDelete')){
    console.log(e.target.getAttribute('_id'))
    console.log("card eliminada");
    traer();

    deleteCard(e.target.getAttribute('_id'))
    //e.preventDefault();
  }
})

const agregar = document.getElementById('addCarac')
.addEventListener('click', e => {
  const caja = document.getElementById('cajaCarac')
  const newInput = document.createElement('input');
  newInput.type = "text"
  newInput.className = 'caracInput';
  caja.appendChild(newInput)
  e.preventDefault();

})






//metodo post 2.0

const btnUpload = document.querySelector('#upload');
const imageResult = document.querySelector('#image');
const linkDownload = document.querySelector('#link');

btnUpload.addEventListener('click',e=>{
    e.preventDefault();
    const formulario = document.querySelector('#uploadImage')
    const formDataAws = new FormData(formulario);
    const nombre = document.getElementById('nameInput')
    const categoria = document.getElementById('categoryInput')
    const precio = document.getElementById('priceInput')
    //array
    const arrayCarac = [];
    const carac = document.getElementsByClassName('caracInput'),
    namesValue = [].map.call(carac, function(dataInput){
      arrayCarac.push(dataInput.value);
    })

    const file = document.querySelector('#file').files[0];

    //este era para vincular la imagen al mismo folder
    //const urlArmada = `/images/${file.name}`


    const urlArmada = `https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/${file.name}`



    const productoNuevo = {
      name: nombre.value,
      category: categoria.value,
      price: parseInt(precio.value),
      caracteristicas: arrayCarac,
      imageUrl: urlArmada
    }
    const datos = JSON.stringify(productoNuevo)

    //para subir la imagen a aws

    console.log(file);
    console.log(datos);

    formDataAws.append('file',file)
    formDataAws.append('datos',datos)
    console.log(formDataAws.getAll('file'));
    console.log(formDataAws);

    uploadFile(formDataAws);

});

const uploadFile = (formDataParam) => {

    fetch(urlUpload,{
        method:'POST',
        body:formDataParam
    })
  };
