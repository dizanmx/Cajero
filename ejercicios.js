let cuentas = [
    {nombre: "Mali", saldo: "200", contraseña:"123"},
    {nombre: "Gera", saldo: "290",contraseña:"456"},
    {nombre: "Maui", saldo: "67",contraseña:"789"}
  ];
  
  let name = prompt("Ingresa tu nombre:");
  
  // Encuentro el usuario del arreglo
  let user = cuentas.find(cuenta => cuenta.nombre === name);
  
  if (user) {
    console.log(`Hola ${user.nombre}, tu saldo es de ${user.saldo} pesos.`);
  } else {
    console.log(`Lo siento, no se encontró una cuenta con el nombre ${name}.`);
  }