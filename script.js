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
