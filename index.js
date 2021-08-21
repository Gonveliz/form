const persona = []
const myForm = event =>{
    event.preventDefault();
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let nombre = document.getElementById('nombre');
    let lastName = document.getElementById('lastName');
    let email = document.getElementById('email');
    let age = document.getElementById('age');
    let check = document.getElementById('check');

    // nombre.value === "" || lastName.value ==="" || email.value === "" ? alert("Completa los campos Obligatorios"): console.log("Campos Obligatorios completados");
    // check.checked === true ? console.log("Aceptaste terminos y condiciones"): alert("Acepta los terminos y condiciones para continuar");
    
    if(nombre.value === "" || lastName.value ==="" || email.value === ""){
        alert("Completa los campos Obligatorios")
    } else if(!check.checked) {
        alert("Acepta los terminos y condiciones para continuar")
    } else if (age.value < 18){
        alert("Tienes que ser mayor de edad para ingresar")
    }
    else{
        alert(`Bienvenido ${nombre.value}, tus datos han sido ingresados correctamente`)
            persona.push({
                nombre : nombre.value,
                apellido : lastName.value,
                email: email.value,
                age: age.value,
            })

            console.log(persona)
    }
    
    !nombre.value ? nombre.classList.add('err'): nombre.classList.remove('err');
    !lastName.value ? lastName.classList.add('err'): lastName.classList.remove('err');
    !email.value ? email.classList.add('err'): email.classList.remove('err');
}

// const persona = []

// const myForm = event =>{
//     event.preventDefault();
//     let nombre = document.getElementById('nombre');
//     let lastName = document.getElementById('lastName');
//     let email = document.getElementById('email');
//     let age = document.getElementById('age');

//     persona.push({
//         nombre : nombre.value,
//         apellido : lastName.value,
//         email: email.value,
//         age: age.value,
//     })

//     console.log(persona)
// }
