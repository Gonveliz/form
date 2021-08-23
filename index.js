const persona = [];
const escritos = [];

let formValues = document.getElementById("formValues");
const myForm = (event) => {
    console.log(event)
  event.preventDefault();
  const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let nombre = document.getElementById("nombre");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let age = document.getElementById("age");
  let check = document.getElementById("check");

  if (nombre.value === "" || lastName.value === "" || email.value === "") {
    alert("Completa los campos Obligatorios");
  } else if (!check.checked) {
    alert("Acepta los terminos y condiciones para continuar");
  } else if (age.value < 18) {
    alert("Tienes que ser mayor de edad para ingresar");
  } else {
    let numAleatoreo = Math.floor(Math.random() * (50 - 0 + 1) + 0)
    persona.push({
      nombre: nombre.value,
      apellido: lastName.value,
      email: email.value,
      age: age.value,
      id: numAleatoreo
    });
    console.log(escritos);
    console.log(persona);
    alert(
        `Bienvenido ${nombre.value}, tus datos han sido ingresados correctamente`
      );
  }

  !nombre.value ? nombre.classList.add("err") : nombre.classList.remove("err");
  !lastName.value ? lastName.classList.add("err") : lastName.classList.remove("err");
  !email.value ? email.classList.add("err") : email.classList.remove("err");

  escrituraFuncion();
};
const escrituraFuncion = () => {
    let persona1;
        if (escritos.length > 0) {
            let lastchild = persona.length -1;
            persona1 = persona[lastchild]
            escritos.push(
                `<ul>
                    <li><img class="avatar" src="https://i.pravatar.cc/150?img=${persona1.id}" alt=""></li>
                    <li><p>${persona1.nombre}</p></li>
                    <li><p>${persona1.apellido}</p></li>
                    <li><p>${persona1.age}</p></li>
                    <li><p>${persona1.email}</p></li>
                </ul>`
            );
            formValues.innerHTML += escritos[lastchild];
            
        } else {
            persona1 = persona[0]
            escritos.push(
                `<ul>
                    <li><img class="avatar" src="https://i.pravatar.cc/150?img=${persona1.id}" alt=""></li>
                    <li><p>${persona1.nombre}</p></li>
                    <li><p>${persona1.apellido}</p></li>
                    <li><p>${persona1.age}</p></li>
                    <li><p>${persona1.email}</p></li>
                </ul>`
            );
            formValues.innerHTML += escritos[0];
        }
    };