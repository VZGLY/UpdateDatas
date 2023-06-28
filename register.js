if (localStorage.getItem("user")) {
    window.location.href = "./index.html"
}

let register = () => {
    if (forms.nom.value && forms.prenom.value && forms.pseudo.value && forms.email.value) {
        let user = {
            nom : forms.nom.value,
            prenom : forms.prenom.value,
            pseudo : forms.pseudo.value,
            email : forms.email.value
        }

        localStorage.setItem("user", JSON.stringify(user))
        window.location.href = "./index.html"
    }
    else{
        console.log("Formulaire invalide");
    }
}