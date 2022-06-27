const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgroundImage ="none"
    
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(mensagem.value);
    inputTexto.value = textoDesencriptado;
    mensagem.value="";
    //mensagem.style.backgroundImage =""
    
}




function encriptar(texto) {
    let matrizCodigo = [["a", "ad"], ["e", "enter"], ["i", "imens"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.toLowerCase();

    for(var i=0; i<matrizCodigo.length; i++) {

        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);


        }
    }

    return texto;

}

function desencriptar(texto) {

    let matrizCodigo = [["a", "ad"], ["e", "enter"], ["i", "imens"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.toLowerCase();

    for(var i=0; i<matrizCodigo.length; i++) {

        if(texto.includes(matrizCodigo[i][1])){

            texto = texto.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);

        }
    }

    return texto;



}

function btnCopiar(){
    var content = document.getElementById('mensagem');
        
    content.select();
    document.execCommand('copy');
    
    alert("Copiado para aréatranferencia");
    
 
}