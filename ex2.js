function soma() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let somado= (num1 + num2);
       if (somado > 20 ){
        resultado = somado + 8;
       } else if(somado <= 20 ){
        resultado = somado - 5
       }
       document.getElementById("resultado").innerHTML = "O resultado é: " + resultado;
       if(isNaN(num1) || isNaN(num2)){
        document.getElementById("resultado").innerHTML = "Insira um número válido";
       }
}