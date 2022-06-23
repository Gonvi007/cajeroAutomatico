const datosUsuarios = [

    {
        id: 1,
        nombre: 'Mali',
        numTarjeta: 52873,
        contraseña: "abc1",
        saldo: 200,
      },
      {
        id: 2,
        nombre: 'Gera',
        numTarjeta: 82519,
        contraseña: "abc1",
        saldo: 200,
      },
      {
        id: 3,
        nombre: 'Maui',
        numTarjeta: 928615,
        contraseña: "abc1",
        saldo: 200,
      },
];

// 
function formula4() {
    var cantidadT = parseInt(document.getElementById('Cant').value);
    var cantidad1 = parseInt(document.getElementById('C1').value);
    var cantidad2 = parseInt(document.getElementById('C2').value);
    document.getElementById('C1').value=(cantidad1-cantidadT);
    document.getElementById('C2').value=(cantidad2+cantidadT);
}

function formula2() {
    var cantidadT = parseInt(document.getElementById('Cant').value);
    var cantidad1 = parseInt(document.getElementById('C1').value);
    var cantidad2 = parseInt(document.getElementById('C2').value);
    document.getElementById('C1').value=(cantidad1+cantidadT);
}

function formula3() {
    var cantidadT = parseInt(document.getElementById('Cant').value);
    var cantidad1 = parseInt(document.getElementById('C1').value);
    var cantidad2 = parseInt(document.getElementById('C2').value);
    document.getElementById('C1').value=(cantidad1-cantidadT);
}

        function login(form){
            if (form.usuario.value=="Mali") {
                if(form.contraseña.value=="abc1") {
                    location="index.html";
                } else {
                    alert ("Ta mal el password");
                }
            } else {
                alert("Ta mal el usuario");
            }
        }