const todos = document.getElementById('todos')

// Funcion de obtener datos
async function getImagenes (){
    try {
        const resp = await fetch('http://localhost:4000/Productos');
        const data = await resp.json()
        return data
    }catch (error){
        return console.log(error);
    }
}

// Funcion mostrar imagenes
async function pintarImagenes(data) {
    if(data == undefined){
        data = await getImagenes()
    }

    todos.innerHTML = '';

    data.forEach((imagen)=> {
        const { id, Producto_Nombre, Producto_Imagen, Precio } = imagen;

        todos.innerHTML +=`
                    <img src="${Producto_Imagen}" alt="img${id}" />
                    <p class="hijoNombreProducto">${Producto_Nombre}</p>
                    <p class="hijoPrecioProducto">$${Precio}</p>
        `
    })
}

pintarImagenes()

//-----------------------------------------------------------------------------------------//
const favoritos = document.getElementById('favoritos');

async function mostrarFavoritos() {
    const data = await getImagenes();
    const result = data.filter((fav)=> fav.Categoria === "favorito")

    favoritos.innerHTML = '';

    result.forEach((imagen)=> {
        const { id, Producto_Nombre, Producto_Imagen, Precio } = imagen;

        favoritos.innerHTML +=`
                    <img src="${Producto_Imagen}" alt="img${id}" />
                    <p class="hijoNombreProducto">${Producto_Nombre}</p>
                    <p class="hijoPrecioProducto">$${Precio}</p>
        `
    })
}

mostrarFavoritos()

//--------------------------------------------------------------------------------------------------//
const supermercado = document.getElementById('supermercado');

async function mostrarSupermercado() {
    const data = await getImagenes();
    const result = data.filter((item)=> item.categoria === "Belleza y Cuidado Personal")

    supermercado.innerHTML = '';

    result.forEach((imagen)=> {
        const { id, Producto_Nombre, Producto_Imagen, Precio } = imagen;

        supermercado.innerHTML +=`
                    <img src="${Producto_Imagen}" alt="img${id}" />
                    <p class="hijoNombreProducto">${Producto_Nombre}</p>
                    <p class="hijoPrecioProducto">$${Precio}</p>
        `
    })
}

mostrarSupermercado()
//--------------------------------------------------------------------------------------------------------------//
const oferta = document.getElementById('ofertas');

async function mostrarOferta() {
    const data = await getImagenes();
    const result = data.filter((item)=> item.oferta ==="si")

    oferta.innerHTML = '';

    result.forEach((imagen)=> {
        const { id, Producto_Nombre, Producto_Imagen, Precio } = imagen;

        oferta.innerHTML +=`
                    <img src="${Producto_Imagen}" alt="img${id}" />
                    <p class="hijoNombreProducto">${Producto_Nombre}</p>
                    <p class="hijoPrecioProducto">$${Precio}</p>
        `
    })
}

mostrarOferta()
//--------------------------------------------------------------------------------------------------------------//

async function verImagen(id){
    const data = await getImagenes();
    const result = data.filter((imagen)=> imagen.id === id)
    
    localStorage.setItem('imagen', JSON.stringify(result))

    window.location.href = '../detalle.html'
}