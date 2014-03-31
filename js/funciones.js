function validarDatosVacios(dato1,dato2){
	
	var verificar = true;

	if(dato1.value == "" || dato2.value == "") {	
		verificar = false;		
	} else{
		verificar = true;
	}

	return verificar;

}


function obtenerFoco(elemento){
	elemento.className = "foco";
}	

function perderFoco(elemento){
	elemento.className = "";
}

function validarenteros(e) { 
    
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==8) return true;
    //patron = /^[0-9]*\.?[0-9]*$/;
    patron = /^[0-9]*?[0-9]*$/;
    te = String.fromCharCode(tecla);
    
    return patron.test(te);
}			
