let user = JSON.parse(localStorage.getItem("user"))

if (!user) {
    window.location.href = "./register.html"
}

forms.nom.value = user.nom
forms.prenom.value = user.prenom
forms.pseudo.value = user.pseudo
forms.email.value = user.email

let update = () => {
    user.nom = forms.nom.value != "" ? forms.nom.value : user.nom
    user.prenom = forms.prenom.value != "" ? forms.prenom.value : user.prenom
    user.pseudo = forms.pseudo.value != "" ? forms.pseudo.value : user.pseudo
    user.email = forms.email.value != "" ? forms.email.value : user.email

    localStorage.setItem("user", JSON.stringify(user))
    window.location.href = "./index.html"
}