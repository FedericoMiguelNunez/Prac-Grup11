$(document).ready(() => {

    $(".error-nombre").hide();
    $(".error-email-valido").hide();
    $(".error-mensaje").hide();
    $("#contactForm").submit((evento) => {
        evento.preventDefault()
        const nombre = $("#nombre").val().trim()
        const email = $("#email").val()
        const mensaje = $("#mensaje").val()

        if (nombre.length < 3) {
            $(".error-nombre").show();
            return
        }



        if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            $(".error-email-valido").show();
            return
        }


        if (mensaje.length < 3) {
            $(".error-mensaje").show();
            return
        }
        $("#contactForm").get(0).submit();

        alert("su formulario se envio con exito")

    })
    // $("#contactForm").get(0).submit();
   
})
$(document).ready(()=>{
    $("#form").on("submit",(event)=>{
        event.preventDefault();
        let donativo = $("#donacion").val();
        console.log("se dono $"+ donativo);
    })
})
$(document).ready(function() {
              
    $(".nextBtn").click(function() {
      var PasoActual = $(this).closest(".form-group");
      var PasoSiguiente = $(this).closest(".form-group").next();
      PasoActual.hide();
      PasoSiguiente.show();
    });

   
    $(".prevBtn").click(function() {
      var PasoActual= $(this).closest(".form-group");
      var PasoAnterior = $(this).closest(".form-group").prev();
      PasoActual.hide();
      PasoAnterior.show();
    });

    
    $("#formAdopcion").submit(function(e) {
      e.preventDefault();
      
      var nombre = $("#paso1 input[placeholder='Nombre']").val();
      var apellido = $("#paso1 input[placeholder='Apellido']").val();
      var edad = $("#paso1 input[placeholder='Edad']").val();
      var email = $("#paso2 input[placeholder='Correo electrónico']").val();
      var telefono = $("#paso2 input[placeholder='Número de teléfono']").val();
      var direccion = $("#paso2 textarea[placeholder='Dirección']").val();
      $("#nombreConfirmacion").text(nombre);
      $("#apellidoConfirmacion").text(apellido);
      $("#edadConfirmacion").text(edad);
      $("#emailConfirmacion").text(email);
      $("#telefonoConfirmacion").text(telefono);
      $("#direccionConfirmacion").text(direccion);
      $("#paso3").show();
      setTimeout(function() {
        $("#formAdopcion").get(0).submit();
      }, 500);
    });
  });
function initMap(){
    var coord = {lat:-34.6246874 ,lng: -58.5059093};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}