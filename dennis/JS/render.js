//metodo get desde el frontend
function traer(categoryProduct){
	const telefonoParaContacto = 51980943681;
const urlRaiz = "http://localhost:8080";
//const urlRaiz = "http://18.228.203.151:8080";
//const urlRaiz = "https://elwayardo.com";
//const urlRaiz = "https://dry-plateau-16443.herokuapp.com";
	const url = `${urlRaiz}/api/v1/products`;
  const cajaGrande = document.getElementById('items');
  cajaGrande.innerHTML = "";
	window
	.fetch(url)
		.then((respuesta)=> respuesta.json())
		.then((responseJson)=>{
			const todosLosElementos = [];
			responseJson.forEach((elemento) => {
				if (elemento.category == categoryProduct) {
					const card = document.createElement('div')
					card.className = 'card'

					const imagen = document.createElement('img');
					imagen.src = elemento.imageUrl;

					const info = document.createElement('div')
					info.className = 'info'

					const price_box = document.createElement('div')
					price_box.className = 'price'

					const title = document.createElement('h3');
					const tituloProduct = elemento.name;
					title.textContent = tituloProduct;
					
					const price = document.createElement('p');
					const priceNumber = elemento.price;
					price.textContent = `s/${priceNumber}`;

					const calltoaction = document.createElement('div')
					calltoaction.className = 'calltoaction'

					const mas_info = document.createElement('p')
					mas_info.textContent = 'ver más información';

					const boton_info = document.createElement('button')
					boton_info.textContent = 'Cotizar'
					
					price_box.append(title, price)
					calltoaction.append(mas_info, boton_info)

					info.append(price_box, calltoaction)

					card.append(imagen, info)
									
					/* const detalles = document.createElement('div');
					detalles.className = 'detalles'
					
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

						const api = `https://api.whatsapp.com/send/?phone=${telefonoParaContacto}&text=`
						const texto = `Hola estoy interesado en el producto: ${tituloProduct}. Necesito más información.`;
						const espacio = " ";
						const newArray = texto.split(espacio);
						newString = newArray.join("%20");
						const final = `${api}${newString}`;

					link.href = final;
					const wsp = document.createElement('div');
					wsp.className = 'wsp';
					const contact = document.createElement('p');
					contact.textContent = 'PEDIR';
					const icon = document.createElement('img');
					icon.src = '/icons/whatsapp3.png';
					icon.alt = 'icono de Whatsapp'
					wsp.append(contact);
					link.append(wsp);
					callToAction.append(link);
					container.append(imagen, detalles, callToAction);
					container.className = 'articulos__container';
					container.classList.add = 'column-1';*/
					todosLosElementos.push(card); 

					const cajaGrande = document.getElementById('items');

					cajaGrande.append(...todosLosElementos);
					}
			});
	})
}


 traer("plantas");


  const menuElectro = document.getElementById('electroMenu')
  .addEventListener('click', e => {
	//location.reload();
	traer("electro")
	document.getElementById('boton-menu').checked = false;
	})  
	const menuRoperos = document.getElementById('roperosMenu')
  .addEventListener('click', e => {
	//location.reload();
	traer("roperos")
	document.getElementById('boton-menu').checked = false;
	})  
	const menuCocina = document.getElementById('cocinaMenu')
  .addEventListener('click', e => {
	//location.reload();
	traer("cocina")
	document.getElementById('boton-menu').checked = false;
	})  
	const menuTermos = document.getElementById('termosMenu')
  .addEventListener('click', e => {
	//location.reload();
	traer("termos")
	document.getElementById('boton-menu').checked = false;
	})  
	const menuEquipaje = document.getElementById('equipajeMenu')
  .addEventListener('click', e => {
	//location.reload();
	traer("equipaje")
	document.getElementById('boton-menu').checked = false;
	})  
	const menuBelleza = document.getElementById('bellezaMenu')
  .addEventListener('click', e => {
	//location.reload();
	traer("belleza")
	document.getElementById('boton-menu').checked = false;
	})  

 const botonElectro = document.getElementById('electroCategory')
 .addEventListener('click', e => {
   traer("electro")
   })

const botonRoperos = document.getElementById('roperosCategory')
.addEventListener('click', e => {
	traer("roperos")
  })

  const botonCocina = document.getElementById('cocinaCategory')
  .addEventListener('click', e => {
	  traer("cocina")
	})

	const botonTermos = document.getElementById('termosCategory')
.addEventListener('click', e => {
	traer("termos")
  })

  const botonEquipaje = document.getElementById('equipajeCategory')
.addEventListener('click', e => {
	traer("equipaje")
   })

  const botonBelleza = document.getElementById('bellezaCategory')
  .addEventListener('click', e => {
	  traer("belleza")

	})

//function search

function filterSearch(input, selector) {
  document.addEventListener('keyup', (e) => {
    if(e.target.matches(input)){
      console.log(e.target.value);
    }
  })
}

