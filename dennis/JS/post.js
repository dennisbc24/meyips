const url = "http://localhost:3000/api/v1/products";
const urlUpload = "http://localhost:3000/api/v1/products/upload";

// metodo post
  async function createProduct2() {

    const nombre = document.getElementById('nameInput')
    const precio = document.getElementById('priceInput')
    //array
    const arrayCarac = [];
    const carac = document.getElementsByClassName('caracInput'),
    namesValue = [].map.call(carac, function(dataInput){
      arrayCarac.push(dataInput.value);
    })

    const imagen = document.getElementById('imageInput')
    console.log(imagen);

    const productoNuevo = {
      name: nombre.value,
      price: precio.value,
      caracteristicas: arrayCarac,
      imageUrl: '/images/roperoazul.jpg'
    }
    console.log(productoNuevo);
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productoNuevo)
  });
  const data = await res.json()

    console.log('save')
    console.log(res)

    if (res.status !== 200) {
      console.log("hubo un error: " + res.status + data.message);
    }
}
//subimos la imagen

async function subirImagenTest(){
  const form = document.getElementById('uploadImage')
  const formData = new FormData(form);
  
  const res = await fetch(urlUpload, {
    method: 'POST',
    body: formData
  })
}

async function subirImagen() {
  const form = document.getElementById('uploadImage')
  const formData = new FormData(form);

  async function createProduct() {

    const nombre = document.getElementById('nameInput')
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
    //console.log(res)

    if (res.status !== 200) {
      console.log("hubo un error: " + res.status + data.message);
    }
}
  await createProduct();

  const res = await fetch(urlUpload, {
    method: 'POST',
    body: formData
  })


}



function addFila(){
  const caja = document.getElementById('cajaCarac')
  const newInput = document.createElement('input');
  newInput.type = "text"
  newInput.className = 'caracInput';
  caja.appendChild(newInput)
}

/* function deleteFila(){

  const elemnt = document.getElementsByClassName('caracInput')
  elemnt.remove();
} */
