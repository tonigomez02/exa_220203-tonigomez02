api_js_get()


function api_js_get() {
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function () {
        let contactos = JSON.parse(xhttp.responseText)
        let salida = "";
        for (let i = 0; i < contactos.length; i++) {
            salida += `
            <tr>
                <td>${contactos[i].id}</td>
                <td>${contactos[i].nombre}</td>
                <td>${contactos[i].telefono}</td>
                <td>${contactos[i].num_libros}</td>
                <td>${contactos[i].fecha_nacimiento}</td>
                <td>
                    <button class="btn btn-danger" onclick="api_js_delete(${contactos[i].id})">DELETE</button>
                    <a class="btn btn-info" href="contactos/${contactos[i].id}/edit">EDIT</a>
                </td>
            </tr>
            `
        }
        document.getElementById("contentContacts").innerHTML = salida + "<br>"
    }
    xhttp.open("GET", "/api/contactosApi", true)
    xhttp.send()



    /*fetch("/api/contactosApi")
        .then(response => response.json())
        .then(contactos =>{
            console.log(contactos);
            //Aqui vendria el contentido después del xhttp.onload
        })*/
}

function api_post() {
    let name = document.getElementById("nombre").value
    let telephone = document.getElementById("telefono").value
    let num_libros = document.getElementById("num_libros").value
    let date = document.getElementById("fecha_nacimiento").value

    fetch("/api/contactosApi", {
        method: "POST",
        body: JSON.stringify({
            "nombre": name,
            "telefono": telephone,
            "num_libros": num_libros,
            "fecha_nacimiento": date
        }),
        headers: {
            "Content-type": "application/vnd.api+json; charset=UTF-8",
            'Accept': 'application/vnd.api+json'
        }
    })

    window.location.href = "/"


    /*const xhttp = new XMLHttpRequest()

    xhttp.open("POST", "/api/contactosApi", true)
    xhttp.setHeader("Content-type", "application/vnd.api+json; charset=UTF-8")
    xhttp.setHeader('Accept', 'application/vnd.api+json')
    xhttp.send(JSON.stringify({
        "nombre": name,
        "telefono": telephone,
        "num_libros": num_libros,
        "fecha_nacimiento": date
    }))*/
}

function apiEdit(id) {
    let name = document.getElementById("nombre").value
    let telephone = document.getElementById("telefono").value
    let num_libros = document.getElementById("num_libros").value
    let date = document.getElementById("fecha_nacimiento").value

    fetch(`/api/contactosApi/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            "nombre": name,
            "telefono": telephone,
            "num_libros": num_libros,
            "fecha_nacimiento": date
        }),
        headers: {
            "Content-type": "application/vnd.api+json; charset=UTF-8",
            'Accept': 'application/vnd.api+json'
        }
    })
    window.location.href = "/"



    /*const xhttp = new XMLHttpRequest()

    xhttp.open("PUT", `/api/contactosApi/${id}`, true)
    xhttp.setHeader("Content-type", "application/vnd.api+json; charset=UTF-8")
    xhttp.setHeader('Accept', 'application/vnd.api+json')
    xhttp.send(JSON.stringify({
        "nombre": name,
        "telefono": telephone,
        "num_libros": num_libros,
        "fecha_nacimiento": date
    }))*/
}

function api_js_delete(id) {
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function () {
        api_js_get()
    }
    xhttp.open("DELETE", `/api/contactosApi/${id}`, true)
    xhttp.send()



   /* fetch(`/api/contactosApi/${id}`, {
        method: "DELETE"
    })
        .then(response => response.json())
        .then(contacto =>{
            console.log(contacto);
            //api_js_get()
        })*/
}
