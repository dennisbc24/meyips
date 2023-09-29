const urlRaiz = "http://localhost:8080";
//const urlRaiz = "http://18.228.203.151:8080";
//const urlRaiz = "https://elwayardo.com";

const url = `${urlRaiz}/api/v1/products`;
const urlUpload = `${urlRaiz}/api/v1/products/courses`;

//metodo get

//metodo post

const uploadFile = (formDataParam) => {

  fetch(urlUpload,{
      method:'POST',
      body:formDataParam
  })

};

const btnUpload = document.querySelector('#upload');
const imageResult = document.querySelector('#image');
const linkDownload = document.querySelector('#link');

btnUpload.addEventListener('click', async e => {
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

    const urlArmada = `https://meyips.s3.sa-east-1.amazonaws.com/cursos/${file.name}`

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

    await uploadFile(formDataAws);


    //await location.reload()
});

//metodo delete
async function deleteCard(id,nameObject) {

  const res = await fetch(`${url}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "Delete",
    body: 	JSON.stringify({
      "key": nameObject

    })
  });
  const data = await res.json();
  console.log(data);

  await location.reload()
}

const boton = document.getElementById('articulos')
.addEventListener('click', e => {
  if(e.target.classList.contains('buttonDelete')){
        const getIdMongoElement = e.target.getAttribute('_id')
        const getImageDelete = e.target.getAttribute('_urlImage')
        const getImageDelete2 = getImageDelete.slice(49)

        console.log(getIdMongoElement);
        console.log(getImageDelete2);

        console.log("card eliminada");
    traer();

    deleteCard(getIdMongoElement,getImageDelete2)
    //e.preventDefault();
  }
})


//agregar espacio de caracteristicas
const agregar = document.getElementById('addCarac')
.addEventListener('click', e => {
  const caja = document.getElementById('cajaCarac')
  const newInput = document.createElement('input');
  newInput.type = "text"
  newInput.className = 'caracInput';
  caja.appendChild(newInput)
  e.preventDefault();

});
