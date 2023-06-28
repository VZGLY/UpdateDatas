let user = JSON.parse(localStorage.getItem("user"))

if (!user) {
    window.location.href = "./register.html"
}




let update = () => {
    user.nom = forms.nom.value != "" ? forms.nom.value : user.nom
    user.prenom = forms.prenom.value != "" ? forms.prenom.value : user.prenom
    user.pseudo = forms.pseudo.value != "" ? forms.pseudo.value : user.pseudo
    user.email = forms.email.value != "" ? forms.email.value : user.email
    user.films = []
    let films = document.getElementById("films").getElementsByTagName("input")
    for (const node of films) {
        if (node.value != "") {
            user.films.push(node.value)
        }
    }
    localStorage.setItem("user", JSON.stringify(user))
    window.location.href = "./index.html"
}

let cpt = 0

let addInput = (titre) => {
    let formFilm = document.getElementById("films")
    let newElem = document.createElement("div")
    newElem.style.marginBottom = "10px"
    newElem.id = "Input" + cpt
    let newInput = document.createElement("input")
    if (titre) {
        newInput.value = titre
    }
    let newButton = document.createElement("button")
    newButton.onclick = () => {
        removeInput(newElem.id)
    } 
    newButton.innerHTML = " - "
    newElem.appendChild(newInput)
    newElem.appendChild(newButton)
    formFilm.appendChild(newElem)
    cpt++
}

let removeInput = (id) => {
    document.getElementById(id).remove()
}

forms.nom.value = user.nom
forms.prenom.value = user.prenom
forms.pseudo.value = user.pseudo
forms.email.value = user.email
for (const film of user.films) {
    addInput(film)
}