// Call the dataTables jQuery plugin
$(document).ready(function() {
     cargarUsuarios();

  $('#usuarios').DataTable();
   loadEmail()
});

function loadEmail() {
document.getElementById('txt-email-usuario').outerHTML = localStorage.email;
}
function cleanStorage(){
 localStorage.clear();
}

 async function cargarUsuarios() {
   const request = await fetch('api/usuarios', {
     method: 'GET',
     headers: getHeaders()
   });
   const usuarios = await request.json();


   let listadoHtml = '';
   console.log(usuarios)
   for (let usuario of usuarios) {

 let botonEliminar = '<a href="#" onclick="eliminarUsuario(' + usuario.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
 let telefono = usuario.telefono === null ? '-' : usuario.telefono

   let usuarioHtml = '<tr><td>'+usuario.id+'</td><td>' + usuario.nombre + ' ' + usuario.apellido + '</td><td>'
                     + usuario.email+'</td><td>'+ telefono
                     + '</td><td>' + botonEliminar + '</td></tr>';
     listadoHtml += usuarioHtml;
   }

 document.querySelector('#usuarios tbody').outerHTML = listadoHtml;

 }

 async function eliminarUsuario(id) {
    if(!confirm('Desea eliminar este usuario?')) {
       return;
    }
    const request = await fetch('api/usuarios/' + id, {
         method: 'DELETE',
         headers: getHeaders()
       });
    location.reload()
  }

 function getHeaders() {
     return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    };
 }

