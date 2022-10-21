	const url = "http://localhost:3000/api/v1/products";

//metodo get desde el frontend
function traer(){
  const cajaGrande = document.getElementById('articulos');
  cajaGrande.innerHTML = "";
	window
	.fetch(url)
		.then((respuesta)=> respuesta.json())
		.then((responseJson)=>{
			const todosLosElementos = [];
			responseJson.forEach((elemento) => {
				if (elemento.inBlock == true) {
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
					}
			});
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


 function traerFalse(){
  const cajaGrande = document.getElementById('articulos');
  cajaGrande.innerHTML = "";
	window
	.fetch(url)
		.then((respuesta)=> respuesta.json())
		.then((responseJson)=>{
			const todosLosElementos = [];
			responseJson.forEach((elemento) => {

				if (elemento.inBlock == false) {

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




			cajaGrande.append(...todosLosElementos);
				}

			});
		})
}

const boton = document.getElementById('roperosCategory')
.addEventListener('click', e => {
  traerFalse()
  console.log('holafalso');

  })

  const botonRopero = document.getElementById('electroCategory')
.addEventListener('click', e => {
  traer()
  console.log('holaverdadero');

  })
