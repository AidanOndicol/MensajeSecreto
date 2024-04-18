function decodificarMensaje() {
    let textoCodificado = document.getElementById("mensaje").value;
    let textoDecodificado = "";
    let textoADecodificar = "";    
    for(let i = 0; i < textoCodificado.length; i++) {
        if(textoCodificado[i] == "(") { 
            let j = i;
            while(j < textoCodificado.length && textoCodificado[j] != ")") {
                textoADecodificar += textoCodificado[j];
                j++;
            }
            i = j;            
            for(let f = textoADecodificar.length - 1; f >= 0; f--) {
                if(textoADecodificar[f] != "(" && textoADecodificar[f] != ")") {
                    textoDecodificado += textoADecodificar[f];
                }
            }           
            textoADecodificar = "";
        } else {
            textoDecodificado += textoCodificado[i];
        }
    }   
    alert(textoDecodificado);
}