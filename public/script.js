function atribuisalario(){    
let salario = document.getElementById("salario");
let salary = document.getElementById("salary");
let role = document.getElementById("role").value;
    if (role == "ger"){
        if (salario.value == ""){
            salario.value = parseFloat(21000.00);
            salary.value = parseFloat(21000.00);
        } else {
            num = parseFloat(salario.value);
            res = num + num * 0.10
            salary.value = res;
        }
    }
    else if (role == "ads"){
        if (salario.value == ""){
            salario.value = parseFloat(11000.00);
            salary.value = parseFloat(11000.00);
        } else {
            num = parseFloat(salario.value);
            res = num + num * 0.05
            salary.value = res;
        }
    }    
    else if (role == "dev"){
        if (salario.value == ""){
            salario.value = parseFloat(9500.00);
            salary.value = parseFloat(9500.00);
        } else {
            salary.value = salario.value
        }
    }
    else if (role == "dba"){
        if (salario.value == ""){
            salario.value = parseFloat(10500.00);
            salary.value = parseFloat(10500.00);
        } else {
            salary.value = parseFloat(salario.value);
        }
    } else if (role == "sel"){
        salario.value = "";
        salary.value = "";
    } 
}

function check(name){
    name = document.getElementById(name)
    const regex = /^[A-Z][a-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]* [A-Z][a-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]*/;
    if (regex.test(name.value)){
        validaData(birth);
    } else {
        alert("O campo deve ter no mínimo o nome, segundo nome e/ou sobrenome");
    }
}

function validaData(birth){
    if (birth != null && birth.value != ""){
        let hoje = new Date();
        let nasc = new Date(birth.value);
        let res = hoje.getFullYear() - nasc.getFullYear();
        let mes = hoje.getMonth()- nasc.getMonth();
        if (mes < 0 || mes === 0 && hoje.getDate() < nasc.getDate()){
            res--;
        }
        if (res < 18){
            alert("Somente aceitamos funcionários maiores de idade");
        }
    } 
}