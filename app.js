const button = document.querySelector('#add'),
      form = document.getElementById('form'),
      submitData = document.querySelector('#submit');

let newFieldset =  null;
let request;
let btnDelete = document.querySelector('.delete');

  
btnDelete.addEventListener('click', deleteBlock)

button.addEventListener('click', addBlock);
//submitData.addEventListener('click', submitForm);

function addBlock(e) {
  e.preventDefault();
 let newRow = document.createElement("fieldset");
  newRow.innerHTML = `
    
    <div class="input-name input-block">
      <input class="input" type="text" name="name" placeholder="ФИО" required>
    </div>
    <div class="input-position input-block">
      <input class="input" type="text" name="position" placeholder="Должность"  required>
    </div>
    <div class="input-age input-block">
    <input class="input" type="number" name="age" placeholder="Возраст" required min="1" max="120" pattern="\d+">
    </div>
    <div class="input-competencies input-block">
      <textarea class="input" placeholder="Компетенции" name="competencies"></textarea>
    </div>
    <div class="input-block input-block-btn">
      <button class="delete"></button>
    </div>
   
  `

  newRow.classList.add("table-row-new");
  newRow.classList.add("table-row");

  newFieldset = document.querySelector('.new');
  form.insertBefore(newRow, newFieldset);

  let btnDelete = newRow.querySelector('.delete');

  
  btnDelete.addEventListener('click', deleteBlock)
  
}

function deleteBlock(e) {
  e.preventDefault();
  e.target.parentNode.parentNode.remove();
}

function submitForm(e) {

  //e.preventDefault();
  
  

  let rows = form.querySelectorAll('.table-row');

  let data = [];

  rows.forEach((row) => {
    let rowData = {};
    let inputs = row.querySelectorAll('.input');
    inputs.forEach((input) => {
      rowData[input.name] = input.value;
    }) 
    data.push(rowData);
  })
  console.log(data);

  let formDataJson = JSON.stringify(data);

  request = new XMLHttpRequest();
  request.onreadystatechange = respond;
  request.open("POST", "process_data.php", true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send("x=" + formDataJson)
}

function respond() {
  if (request.readyState == 4 && request.status == 200) {
    console.log('Данные отправлены');
     console.log(Boolean(request.responseText));
  }
}
