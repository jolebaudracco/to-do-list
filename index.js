const checkHight = document.getElementById("check-h");

const checkMed = document.getElementById("check-m");

const checkLow = document.getElementById("check-l");

const containerTask = document.getElementById("container-task");

window.onload = function () {
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  if (tasks) {
    tasks.forEach((task) => {
      const elementLi = document.createElement("li");
      
      // task = objeto que viene name y priority
      if (task.priority === 'hight') {
        // <li class="hight-priority"></li>
        elementLi.className = "hight-priority"
      } else if (task.priority === 'medium') {
        elementLi.className = 'medium-priority'
      } else if (task.priority === 'low') {
        elementLi.className = 'low-priority'
      }

      const elementParagraph = document.createElement("p");

      const elementSpan = document.createElement("span");

      elementParagraph.innerHTML = task.name;
      elementSpan.innerHTML = task.priority;

      // add two children to li
      elementLi.appendChild(elementParagraph);
      elementLi.appendChild(elementSpan);

      // add li to container (our ul)

      containerTask.appendChild(elementLi);
    });
  }
};

// get initial data from local storage
// JSON.parse is a method to convert string to object
// JSON.stringify is a method to convert object to string

const taskLists = JSON.parse(localStorage.getItem("tasks")) || [];

function handleSubmitForm(event) {
  //preventDeFault: actualiza el navegador como F5 - el prevendefault omite eso.
  event.preventDefault();


  const nameOfTask = document.getElementById("name-of-task").value;

  if (nameOfTask === "") {
    alert('Please enter your task');
    return false;
  }

  // comprobamos que check esta activado

  let typeOfPriority = "";

  if (checkHight.checked === true) {
    typeOfPriority = "hight";
  } else if (checkMed.checked === true) {
    typeOfPriority = "medium";
  } else if (checkLow.checked === true) {
    typeOfPriority = "low";
  }

  if (typeOfPriority === "") {
    alert('Please choose your priority');
    return false;
  }

  const task = {
    name: nameOfTask,
    priority: typeOfPriority,
  };

  // Creamos los elementos que vamos usar para visualizar la tarea

  const elementLi = document.createElement("li");

  if (typeOfPriority === 'hight') {
    // <li class="hight-priority"></li>
    elementLi.className = "hight-priority"
  } else if (typeOfPriority === 'medium') {
    elementLi.className = 'medium-priority'
  } else if (typeOfPriority === 'low') {
    elementLi.className = 'low-priority'
  }

  const elementParagraph = document.createElement("p");

  const elementSpan = document.createElement("span");

  elementParagraph.innerHTML = task.name;
  elementSpan.innerHTML = task.priority;

  // add two children to li
  elementLi.appendChild(elementParagraph);
  elementLi.appendChild(elementSpan);

  // add li to container (our ul)

  containerTask.appendChild(elementLi);
  // comenzamos a recetear el formulario.
  document.getElementById("name-of-task").value = "";

  checkHight.checked = false;
  checkMed.checked = false;
  checkLow.checked = false;


  //fin línea recetaer formulario. 


  // Agregamos la task al array taskLists
  taskLists.push(task);

  // Guardamos en el local storage 
  localStorage.setItem("tasks", JSON.stringify(taskLists));
}

// necesitamos esta función porque solo puede haber un check seleccionado
// we need this fucntion because it can only be a selected check.

const handleOnChangeInputCheckbox = (event) => {
  const name = event.target.name;

  // hight / medium / low

  if (name === "hight") {
    if (checkMed.checked === true) {
      checkMed.checked = false;
    }
    if (checkLow.checked === true) {
      checkLow.checked = false;
    }
  } else if (name === "medium") {
    if (checkHight.checked === true) {
      checkHight.checked = false;
    }
    if (checkLow.checked === true) {
      checkLow.checked = false;
    }
  } else if (name === "low") {
    if (checkHight.checked === true) {
      checkHight.checked = false;
    }
    if (checkMed.checked === true) {
      checkMed.checked = false;
    }
  }
};
