/*
 |--------------------------------------------------
 | brPhone
 |--------------------------------------------------
 | Insere o - no numero do telefone
 | 
 | Se iniciar com 9 insere dps do quinto numero
 | Senao insere dps do quarto
 |
 | @params phone String valor do textfield telefone
 |	
 */

function brPhone(phone) {
    if (phone.length == 4 && phone.substring(0,1) != "9") {
        document.getElementById("telefone").value = document.getElementById("telefone").value + "-";
    } else if (phone.length == 5 && phone.substring(0,1) == "9") {
        document.getElementById("telefone").value = document.getElementById("telefone").value + "-";
    };
};

/*
 |--------------------------------------------------
 | Remove os traços do campo telefone
 |--------------------------------------------------
 */

window.onload = function() {
    document.getElementById('contador').onsubmit = function() {
        var telefone = document.getElementById('telefone').value;
        document.getElementById('telefone').value = telefone.replace("-", "");
    };
};