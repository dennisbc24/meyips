const urlAPI = "http://localhost:3000/api/v1/products";

async function createProduct () {
    const nombre = document.getElementById('nameInput')
    const precio = document.getElementById('priceInput')
    const carac = document.getElementById('caracInput')
    const imagen = document.getElementById('imageInput')

    const res = await fetch(urlAPI, {
        method: 'POST'
    });
    console.log('save')
    console.log(res)
}

module.exports = createProduct;