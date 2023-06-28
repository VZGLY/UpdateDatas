let user = JSON.parse(localStorage.getItem("user"))

if (!user) {
    window.location.href = "./register.html"
}

document.getElementById("nom").innerHTML = user.prenom + " " + user.nom
document.getElementById("pseudo").innerHTML = user.pseudo
document.getElementById("email").innerHTML = user.email

let disconnect = () => {
    localStorage.removeItem("user")
    window.location.href = "./register.html"
}

let update = () => {
    window.location.href = "./update.html"
}