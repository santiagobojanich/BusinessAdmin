// Call the dataTables jQuery plugin
$(document).ready(function() {

});

 async function registrarUsuario() {
   let data = {}

 data.nombre = document.getElementById('txtNombre').value
 data.apellido = document.getElementById('txtApellido').value
 data.email = document.getElementById('txtEmail').value
 data.password = document.getElementById('txtPassword').value

 let repetirPassword = document.getElementById('txtRepeatPassword').value

  if(repetirPassword != data.password) {
  alert('Las contraseñas no coinciden')
  return
  }

   const request = await fetch('api/usuarios', {
     method: 'POST',
     headers: getHeaders(),
     body: JSON.stringify(data)
   });

  alert('Registrado con exito')
  window.location.href = "login.html"
 }

 function getHeaders() {
     return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };
 }
