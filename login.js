let cuentas = [
    {nombre: "Mali", saldo: "200", contraseña:"123"},
    {nombre: "Gera", saldo: "290",contraseña:"456"},
    {nombre: "Maui", saldo: "67",contraseña:"789"},
    {nombre: "Dizan", saldo: "350", contraseña: "999"}
  ];


  

function loguear()
{
    let user=document.getElementById("usuario").value;
    let password=document.getElementById("clave").value;
    let validacion = cuentas.find(cuentaUsuario => cuentaUsuario.nombre === user && cuentaUsuario.contraseña === password);
    
        
    if(validacion)
        {
        localStorage.setItem("nombreusuario",user);
        //localStorage.setItem("saldousuario",cuentas[2].saldo); //me falta obtener el index correcto
        window.location="cajero.html";
        console.log(localStorage)
        //document.write("Bienvenido,"+ "<br>" + "Opciones" + "<br>" + "1. Consulta de Saldo"  + "<br>" + "2. Retiro" + "<br>" + "3. Deposito"  + "<br>" + "<br>");
    }

    else
    {
        alert("Usuario o contraseña incorrectos");    }
}

/* function cajero(saldo,nombre)
console.log(saldo)
console.log(nombre) */

//let balance = 1500; // debo convertir balance en lectura de saldo con find
let usuariologueado = localStorage.nombreusuario
let indiceusuario = cuentas.findIndex((elemento, indice) => {
  if (elemento.nombre === usuariologueado) {
    localStorage.setItem("indiceusuario",indice)
  }
}); //obtengo el indice para en la sig variable llamar a cuentas por el indice que necesito del arreglo y el elemento.saldo

let balance = cuentas[localStorage.indiceusuario].saldo;
//let cantidad =parseInt(document.getElementById('Cant').value);
let cantidad = "150"
 
  
  // Function retiro

  function consultaSaldo(){
    alert('tu saldo es' + ' ' + balance)
  }


  function retiro(cantidad) {
       if (cantidad > balance) {
      alert("Fondos insuficientes");
    } else {
      balance -= cantidad;
      alert(`Retiro de ${cantidad} exitoso, su nuevo saldo es: ${balance}`);
    }
  }
  
  // Function deposito
  function deposito(cantidad) {
    balance += cantidad;
    alert(`Deposito de  ${cantidad} exitoso. Su nuevo saldo es: ${balance}`);
  }
  
  


/* function clikearSaldo(){

    window.location="saldo.html"

}

function clikearDeposito(){

    window.location="deposito.html"

}
function clikearRetiro(){

    window.location="deposito.html"

}


function bye(){

    window.location="index.html"

} */

/* function loguear()
{
    let user=document.getElementById("usuario").value;
    let password=document.getElementById("clave").value;
  

    if(user =="Mali" && password=="123")
    {
        window.location="cajero.html";
    }

    else
    {
        alert("Usuario o contraseña incorrectos");    }
} */