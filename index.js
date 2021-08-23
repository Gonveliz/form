const persona = [];
const escritos = [];

let formValues = document.getElementById("formValues");
const myForm = (event) => {
  event.preventDefault();
  const mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let nombre = document.getElementById("nombre");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let age = document.getElementById("age");
  let check = document.getElementById("check");

  // nombre.value === "" || lastName.value ==="" || email.value === "" ? alert("Completa los campos Obligatorios"): console.log("Campos Obligatorios completados");
  // check.checked === true ? console.log("Aceptaste terminos y condiciones"): alert("Acepta los terminos y condiciones para continuar");

  if (nombre.value === "" || lastName.value === "" || email.value === "") {
    alert("Completa los campos Obligatorios");
  } else if (!check.checked) {
    alert("Acepta los terminos y condiciones para continuar");
  } else if (age.value < 18) {
    alert("Tienes que ser mayor de edad para ingresar");
  } else {
    alert(
      `Bienvenido ${nombre.value}, tus datos han sido ingresados correctamente`
    );
    let numAleatorio = Math.floor(Math.random() * (50 - 0 + 1) + 0);
    persona.push({
      nombre: nombre.value,
      apellido: lastName.value,
      email: email.value,
      age: age.value,
      escritura: function () {
        escritos.push(
          `<ul>
                        <li><img class="avatar" src="https://i.pravatar.cc/150?img=${numAleatorio}" alt=""></li>
                        <li><p>${nombre.value}</p></li>
                        <li><p>${lastName.value}</p></li>
                        <li><p>${age.value}</p></li>
                        <li><p>${email.value}</p></li>
                    </ul>`
        );
        // for (let i = 0; i < escritos.length; i++) {
        //     formValues.innerHTML = escritos
        // }
      },
    });
    console.log(escritos);
    console.log(persona);
  }

  !nombre.value ? nombre.classList.add("err") : nombre.classList.remove("err");
  !lastName.value ? lastName.classList.add("err") : lastName.classList.remove("err");
  !email.value ? email.classList.add("err") : email.classList.remove("err");

  vamos();
};
// me esta imprimiendo solo el ultimo hijo, necesitaria que las impresiones se me guarden y no se resetee con cada envio
const vamos = () => {
  for (let i = 0; i < persona.length; i++) {
    persona[i].escritura();
    let lastchild = escritos.length - 1;
    formValues.innerHTML += escritos[lastchild];

    // persona[i].escritura();
    // let lastchild = escritos.length - 1
    // let childs = escritos.length - lastchild
    // formValues.innerHTML = escritos[lastchild] + escritos[childs];
  }
};

// formValues.innerHTML =
// `<ul>
//     <li><img class="avatar" src="https://i.pravatar.cc/150?img=${numAleatorio}" alt=""></li>
//     <li><p>${nombre.value}</p></li>
//     <li><p>${lastName.value}</p></li>
//     <li><p>${age.value}</p></li>
//     <li><p>${email.value}</p></li>
// </ul>`

// let formValues = document.getElementById('formValues');
// let intro = 0;

// let escrito;
// const bucle = () => {
//     let numAleatorio = Math.floor((Math.random() * (50 - 0 + 1)) + 0);
//     formValues.innerHTML =
//     `<ul>
//         <li><img class="avatar" src="https://i.pravatar.cc/150?img=${numAleatorio}" alt=""></li>
//         <li><p>${persona[intro].nombre}</p></li>
//         <li><p>${persona[intro].apellido}</p></li>
//         <li><p>${persona[intro].age}</p></li>
//         <li><p>${persona[intro].email}</p></li>
//     </ul>`
// }

// function bucle (i){
//     formValues.innerHTML =
//     `<ul>
//         <li><img class="avatar" src="https://i.pravatar.cc/150?img=${numAleatorio}" alt=""></li>
//         <li><p>${persona[i].nombre}</p></li>
//         <li><p>${persona[i].apellido}</p></li>
//         <li><p>${persona[i].age}</p></li>
//         <li><p>${persona[i].email}</p></li>
//     </ul>`
// }

// const pintado = () => {
//     let formValues = document.getElementById('formValues');
//     let numAleatorio = Math.floor((Math.random() * (50 - 0 + 1)) + 0);
//     for (let i = 0; i < persona.length; i++) {
//         formValues.innerHTML = `<ul>
//                                     <li><img class="avatar" src="https://i.pravatar.cc/150?img=${numAleatorio}" alt=""></li>
//                                     <li><p>${persona[i].nombre}</p></li>
//                                     <li><p>${persona[i].apellido}</p></li>
//                                     <li><p>${persona[i].age}</p></li>
//                                     <li><p>${persona[i].email}</p></li>
//                                 </ul>`
//     }
// }
