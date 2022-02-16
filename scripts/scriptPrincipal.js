const contVideos = document.getElementById('contenedor')

// Funcion de obtener datos
async function getImagenes (){
    try {
        const resp = await fetch('http://localhost:4000/videos');
        const data = await resp.json()
        return data
    }catch (error){
        return console.log(error);
    }
}

// Funcion mostrar videos
async function pintarImagenes(data) {
    if(data == undefined){
        data = await getImagenes()
    }

    contVideos.innerHTML = '';

    data.forEach((video)=> {
        const { id, name, imagen, precio } = video;

        contVideos.innerHTML +=`
        <div class="hijoImg">
                    <img src="${imagen}" alt="img${id}" />
                    <p class="hijoNombreProducto">${name}</p>
                    <p class="hijoPrecioProducto">$${precio}</p>
                </div>
        `
    })
}

pintarImagenes()

//-----------------------------------------------------------------------------------------//
const seriesAnime = document.getElementById('contenedorSegundaSeccion');

async function mostrarAnimes() {
    const data = await getImagenes();
    const result = data.filter((anime)=> anime.categoria === "Animes")

    seriesAnime.innerHTML = '';

    result.forEach((video)=> {
        const { id, name, imagen, precio } = video;

        seriesAnime.innerHTML +=`
        <div class="hijoImg">
                    <img src="${imagen}" alt="img${id}" />
                    <p class="hijoNombreProducto">${name}</p>
                    <p class="hijoPrecioProducto">$${precio}</p>
                </div>
        `
    })
}

mostrarAnimes()

//--------------------------------------------------------------------------------------------------//
const seriesCrimenes = document.getElementById('contenedorTerceraSeccion');

async function mostrarCrimenes() {
    const data = await getImagenes();
    const result = data.filter((crimen)=> crimen.categoria === "Crimenes")

    seriesCrimenes.innerHTML = '';

    result.forEach((video)=> {
        const { id, name, imagen, precio } = video;

        seriesCrimenes.innerHTML +=`
        <div class="hijoImg">
                    <img src="${imagen}" alt="img${id}" />
                    <p class="hijoNombreProducto">${name}</p>
                    <p class="hijoPrecioProducto">$${precio}</p>
                </div>
        `
    })
}

mostrarCrimenes()
//--------------------------------------------------------------------------------------------------------------//
const seriesCrimenes = document.getElementById('contenedorCuartaSeccion');

async function mostrarCrimenes() {
    const data = await getImagenes();
    const result = data.filter((crimen)=> crimen.categoria === "Crimenes")

    seriesCrimenes.innerHTML = '';

    result.forEach((video)=> {
        const { id, name, imagen, precio } = video;

        seriesCrimenes.innerHTML +=`
        <div class="hijoImg">
                    <img src="${imagen}" alt="img${id}" />
                    <p class="hijoNombreProducto">${name}</p>
                    <p class="hijoPrecioProducto">$${precio}</p>
                </div>
        `
    })
}

mostrarCrimenes()

//--------------------------------------------------------------------------------------------------------------//

async function verVideo(id){
    const data = await getImagenes();
    const result = data.filter((video)=> video.id === id)
    
    localStorage.setItem('video', JSON.stringify(result))

    window.location.href = '../pelicula.html'
}