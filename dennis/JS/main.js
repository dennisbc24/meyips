  const url = "http://localhost:3000/api/v1/products";

  // metodo post
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
      console.log(imagen);
  
      const productoNuevo = {
        name: nombre.value,
        price: precio.value,
        caracteristicas: arrayCarac,
        imageUrl: imagen.value
      }
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productoNuevo)
    });
    

   
    }
  
     