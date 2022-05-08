//Validar formulario de contacto

const inputNombre = document.querySelector(".input__nombre")
const inputEmail = document.querySelector(".input__email")
const inputAsunto = document.querySelector(".input__asunto")
const inputMensaje = document.querySelector(".input__mensaje")
const btnSubmit = document.querySelector(".contacto__boton-Submit")


inputNombre.addEventListener('keyup',habilitarBtnSubmit)
inputEmail.addEventListener('keyup',habilitarBtnSubmit)
inputAsunto.addEventListener('keyup',habilitarBtnSubmit)
inputMensaje.addEventListener('keyup',habilitarBtnSubmit)

function habilitarBtnSubmit(e){
  if(inputNombre.value!="" && inputEmail.value!="" && inputAsunto.value!="" && inputMensaje.value!=""){
    btnSubmit.disabled=false;
  } else btnSubmit.disabled=true;
  
}
