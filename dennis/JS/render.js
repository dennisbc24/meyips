

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

    const data = await res.json()

    console.log('save')
    console.log(res)

    if (res.status !== 200) {
      console.log("hubo un error: " + res.status + data.message);
    }
}

//metodo get desde el frontend
         function traer(){
          window
          .fetch(url)
            .then((respuesta)=> respuesta.json())
            .then((responseJson)=>{
              const todosLosElementos = [];
              responseJson.forEach((elemento) => {
                const container = document.createElement('article');
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
                const callToAction = document.createElement('div');
                callToAction.className = 'calltoaction';
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
                container.append(imagen, detalles, callToAction);
                container.className = 'articulos__container';
                container.classList.add = 'column-1';
                todosLosElementos.push(container);


                const cajaGrande = document.getElementById('articulos');
              cajaGrande.append(...todosLosElementos);
              
                    
              
                  
                    
              


              });
              /* const articulos = document.getElementById('articulos')
              const articulosItem = document.getElementsByClassName('articulos__container')
              const layoutBox = document.createElement('div')
              layoutBox.className = 'layoutBox'

              for (let index = 0; index < Math.ceil(articulosItem.length / 2); index++) {
                const element = array[index];
                
              }

              layoutBox.append(...articulosItem)
              articulos.appendChild(layoutBox)
                         */
            })
     }


        


const masonryLayout = (containerElem,itemsElems,columns) => {

  containerElem.classList.add('masonry-layout', `columns-${columns}`)
  let columnsElements = []

  for (let i = 1; i <= columns; i++) {
      let column = document.createElement('div')
      column.classList.add('masonry-column', `column-${i}`)
      containerElem.appendChild(column)
      columnsElements.push(column)
  }

  for(let m = 0; m < Math.ceil(itemsElems.length / columns); m++){
      for(let n = 0; n < columns; n++) {
          let item = itemsElems[m * columns + n]
          columnsElements[n].appendChild(item)
          item.classList.add('masonry-item')
      }
  }
}
 traer();


//masonryLayout(document.getElementById('articulos'), document.querySelectorAll('.articulos__container'), 2)


//metodo get desde backend
/* function simularGet(){
  window
  .fetch(url)
    .then((respuesta)=> respuesta.json())
    .then((responseJson)=>{
      const todosLosElementos = [];
      responseJson.forEach((elemento) => {
        const container = document.createElement('article');
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

        const callToAction = document.createElement('div');
        callToAction.className = 'calltoaction';
          const link = document.createElement('a');
            const wsp = document.createElement('div');
            wsp.className = 'wsp';
              const contact = document.createElement('p');
              contact.textContent = 'Contactar';
              const icon = document.createElement('img');
              icon.src = './icons/whatsapp3.png';
              icon.alt = 'icono de Whatsapp'
            wsp.append(contact,icon);
          link.append(wsp);
        callToAction.append(link);


        container.append(imagen, detalles, callToAction);
        
        container.className = 'articulos__container';

        todosLosElementos.push(container);
      });
      const cajaGrande = document.getElementById('articulos');
      cajaGrande.append(...todosLosElementos);
      masonryLayout(document.getElementById('articulos'), document.querySelectorAll('.articulos__container'), 2)
    });
}; */

//prueba de get desde backend
/* const ProductService = require('../../services/product.service');
const service = new ProductService();

async function foo() {
  const products = await service.find();
  console.log(products);
} */
