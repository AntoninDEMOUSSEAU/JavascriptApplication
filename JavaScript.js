function getValue(){
    //Fonction permettant d'afficher en temps réelle la valeur de mon input
    realTimeValue();
    //Fonction permettant de compter le nombre de lettre de la saisie
    count();
    //Fonction permettant d'inverser les lettres de la saisie
    reverseString()


}

function realTimeValue(){
    //Je récupere la valeur de mon Element HTML input
    let valueTV = document.getElementById("input").value;

    //Je vais créer un nouvel élement du DOM "p"
    let newP = document.createElement("p")
    //Je lui set un id
    newP.setAttribute("id","reponseTR");

    //Je vérifie si la value contient déjà un caractere.
    //Si oui, je passe la value à mon nouvelle element P (newP)
    if (valueTV.length <= 1){
        newP.textContent=valueTV ;
        document.body.append(newP)
    }
    //Si non je recupere l'ancien element P, le supprime pour en créer un nouveau.
    else {
        document.getElementById("reponseTR").remove();
        newP.textContent=valueTV ;
        document.body.append(newP)
    }
}

function count(){

    let newP2 = document.createElement("p");
    newP2.setAttribute("id","compteur");
    newP2.setAttribute("label", "Le nombre de lettre est : ")

    let count = document.getElementById("input").value.length;
    if (count <= 1){
        newP2.textContent=count;
        document.body.append(newP2)
    } else {
        document.getElementById("compteur").remove();
        newP2.textContent=count
        document.body.append(newP2)
    }
}

function reverseString(){

    let newP1 = document.createElement("p");
    newP1.setAttribute("id","reverseString");

    let valueRS = document.getElementById("input").value;
    let splitString = valueRS.split("").reverse().join("");

    if (valueRS.length <= 1){
        newP1.textContent=splitString
        document.body.append(newP1)
    } else {
        document.getElementById("reverseString").remove()
        newP1.textContent=splitString
        document.body.append(newP1)
    }

}
