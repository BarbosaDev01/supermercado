function mostrar(){
var tempo = document.getElementById('tempo').value;
var valor = document.getElementById('valor').value;
var final = (tempo/15)*valor;
if(tempo>15){
   final+valor;
}else{

}

document.getElementById(`resultado`).innerHTML = `Valor a ser pago: ${final} `;

}