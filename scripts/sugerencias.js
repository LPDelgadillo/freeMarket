const botonEnviar = document.getElementById("enviar")
const formulario = document.getElementById("form")


window.addEventListener('DOMContentLoaded', ()=>{
 
})

formulario.addEventListener('submit', (e)=> {
   e.preventDefault()

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const observaciones = document.getElementById("observaciones").value;

    fetch('http://localhost:4000/sugerencias', {
        method: 'POST',
        body: JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            telefono:telefono,
            direccion: direccion, 
            observaciones: observaciones
        }),
        headers:{ 
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(()=> capturarDatos())
    
})
//----------------------------------------------------------------------------------------------------------------
 function capturarDatos(){
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const observaciones = document.getElementById("observaciones").value;
    guardar(nombre, apellido, telefono, direccion, observaciones)

 }
//-------------------------------------------------------------------------------------------------------------------


function guardar(nombre, apellido, telefono, direccion, observaciones){
    localStorage.setItem("nombre", nombre)
    localStorage.setItem("apellido", apellido)
    localStorage.setItem("telefono", telefono)
    localStorage.setItem("direccion", direccion)
    localStorage.setItem("observaciones", observaciones)
}

