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

        const expAlfabeto = /^[a-zA-ZÑñáéíóúÁÉÍÓÚ\s]+$/;
        const expTelefono = /^[6-9]{1}[0-9]{8}$/;

        $.validator.addMethod('alfabeto', function(value, element) {
            return this.optional(element) || expAlfabeto.test(value);
        });
        $.validator.addMethod('telefono', function(value, element) {
            return this.optional(element) || expTelefono.test(value);
        })
    }
);

// $(
//     function() {
//         // Espresión regular para aceptar sólo teléfonos españoles
//         // sin prefijo internacional
//
//         var expresionRegular = /^[6-9]{1}[0-9]{8}$/;
//
//         $.validator.addMethod('telefono', function(value, element) {
//             return this.optional(element) || expresionRegular.test(value);
//         })
//     }
// );



function validarFormulario() {
    $('#form').validate({
        rules: {
            name: {
                required: true,
                alfabeto: true,
                maxLength: 50
            },
            email: {
                required: true,
                email: true
            },
            tfno: {
                telefono: true
            },
            edad: {
                required: true,
                digits: true,
                min: 18,
                max: 120
            },
            mensaje: {
                required: true,
                minLength: 5,
                maxLength: 255
            }
        },
        messages: {
            name: {
                required: "El campo nombre es obligatorio",
                alfabeto: "El nombre sólo puede contener letras del alfabeto español y espacios en blanco",
                maxLength: "El nombre no puede exceder de 50 caracteres"
            },
            email: {
                required: "El campo email es obligatorio",
                email: "El correo electrónico no parece un email válido"
            },
            tfno: {
                telefono: "El teléfono debe contener sólo el número sin espacios ni guiones"
            },
            edad: {
                required: "La edad es obligatoria",
                digits: "La edad debe ser un número",
                min: "La edad no puede ser menor de 18 años",
                max: "La edad no puede superar los 120 años"
            },
            mensaje: {
                required: "El texto del mensaje es obligatorio",
                minLength: "El mensaje debe tener al menos 5 caracteres",
                maxLength: "El mensaje no puede exceder de 255 caracters"
            },
            submitHandler: function(form, event) {
                event.preventDefault();
                $(form).ajaxSubmit();
                return false;
            }
        }
    });
}
