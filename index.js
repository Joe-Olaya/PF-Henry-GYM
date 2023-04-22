function laCajaDePandora(numero){
    if (numero % 2 === 0){
        let binario = ''; // declaro variable como un string vacio para guardar cada numero del while
        while (numero > 0){//abro el loop
            binario += (numero%2).toString();// saco el resto y lo transformo en string para que se concatenen y no se sumen
            numero = Math.floor(numero/2);//hago la division de num para seguir operando el loop y no sea infinito
        }
        return binario.split('').reverse().join(''); //basicamente doy vuelta el numero que tengo en "binario"
    } else {
        return numero.toString(16)
    }
}