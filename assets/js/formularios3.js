/*
 * Gestión de eventos y formularios en JavaScript
*/

/*
    Ejemplo de función anónima (sin nombre)
    1.- Ejecuta el código cuando la página se haya cargado completamente
    2.- al evento de click en el botón de id = 'enviar'
        ejecuta la función validarFormulario()
*/

window.onload = function() {
    $("#enviar").on("click", validarFormulario);
}


$(
    function() {
        // Espresión regular para aceptar sólo letras del alfabeto español
        // y espacios en blanco

        var expresionRegular = /^[a-zA-ZÑñáéíóúÁÉÍÓÚ\s]+$/;

        $.validator.addMethod('alfabeto', function(value, element) {
            return this.optional(element) || expresionRegular.test(value);
        })
    }
);


function validarFormulario () {
    $('#form').validate ({
        rules: {
            name: {
                required: true,
                alfabeto: true
            }
        }
    });
}
