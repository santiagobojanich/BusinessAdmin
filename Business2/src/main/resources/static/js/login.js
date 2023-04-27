// Call the dataTables jQuery plugin
$(document).ready(function() {

});

 async function iniciarSesion() {
   let data = {}

 data.email = document.getElementById('txtEmail').value
 data.password = document.getElementById('txtPassword').value


   const request = await fetch('api/login', {
     method: 'POST',
     headers: getHeaders(),
     body: JSON.stringify(data)
   });

   const response = await request.text();
   console.log(response)
  if(response != "fail") {
  localStorage.token = response;
  localStorage.email = data.email;
  window.location.href ="usuarios.html"
  } else {
  alert("Usuario o contraseña erroneos")}
 }

 function getHeaders() {
     return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };
 }
