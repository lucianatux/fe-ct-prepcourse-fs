function esPositivo(num) {
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  if (num > 0 ){
    return "Es positivo";
  }else if (num < 0){
    return "Es negativo";
  }else{
    return false;
  }
}
// otra forma:   return num > 0 ? "Es positivo" : num < 0 ? "Es negativo" : false;


module.exports = esPositivo;