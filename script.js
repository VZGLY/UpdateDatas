let user = JSON.parse(localStorage.getItem("user"))

if (!user) {
    window.location.href = "./register.html"
}



let disconnect = () => {
    localStorage.removeItem("user")
    window.location.href = "./register.html"
}

let update = () => {
    window.location.href = "./update.html"
}

let addFilm = (titre) => {
    let list = document.getElementById("films")
    let newElem = document.createElement("p")
    newElem.innerHTML = titre
    list.appendChild(newElem)
}


document.getElementById("nom").innerHTML = user.prenom + " " + user.nom
document.getElementById("pseudo").innerHTML = user.pseudo
document.getElementById("email").innerHTML = user.email
console.log(user.films);
let isEmpty = user.films.length == 0
if (!isEmpty && user.films) {
    addFilm("Mes Films Preferé :")
    for (const film of user.films) {
        addFilm(film)
    }   
}
