function laCajaDePandora(numero) {
    if (numero % 2 == 0) {
      // Convertir a binario si es par
      return numero.toString(2);
    } else {
      // Convertir a hexadecimal si es impar
      return numero.toString(16);
    }
  }
  
