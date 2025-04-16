function calculo(){
    let B= parseFloat(document.getElementById("B").value);
    let b= parseFloat(document.getElementById("b").value);
    let h= parseFloat(document.getElementById("h").value);
    let area = ((B + b) * h) /2;

    if(isNaN(B) || isNaN(b) || isNaN(h)){
        document.getElementById("resultado").innerHTML = "Insira números válidos "
    } else{
        document.getElementById("resultado").innerHTML = "O resultado é: " + area;
    }
}