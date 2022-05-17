

function getValue(){
    //Fonction permettant d'afficher en temps réelle la valeur de mon input
    realTimeValue();
    //Fonction permettant de compter le nombre de lettre de la saisie
    count();
    //Fonction permettant d'inverser les lettres de la saisie
    reverseString()


}

function realTimeValue(){
    let input = document.getElementById("input").value;
    let rtv = document.getElementById("reponseTR")
    rtv.textContent="Voici le rendu en direct :"+input ;


}

function count(){
    let input = document.getElementById("input").value;
    let count = document.getElementById("count")
    count.textContent="Le nombre de caractère est de :" +input.length;
}

function reverseString(){
    let input = document.getElementById("input").value;
    let splitString = input.split("").reverse().join("");
    let rs = document.getElementById("reverseString")

    rs.textContent="La phrase écrite à l'envers est :" + splitString;

}

