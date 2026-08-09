const input = document.getElementById('input');
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const container = document.getElementById('container');

let data = [];
let isDeleteMode = false;

function saveToLocalStorage() {
  const saved = JSON.stringify(data);
  localStorage.setItem('MY_TODOS', saved);
}

function loadToLocalStorage() {
  const saved = localStorage.getItem('MY_TODOS');
  if (saved) {
    data = JSON.parse(saved);
  }
}

function renderData() {
  container.innerHTML = '';
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const element = document.createElement('div');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.isCompleted;
    
    const text = document.createElement('span');
    text.textContent = item.text;
    
    if (item.isCompleted) {
      text.style.textDecoration = 'line-through';
    }
    
    element.appendChild(checkbox);
    element.appendChild(text);
    
    container.appendChild(element);
    
    checkbox.addEventListener('click', function() {
      data[i].isCompleted = checkbox.checked;
      saveToLocalStorage();
      renderData();
    });
    
    element.addEventListener('click', function() {
      if (isDeleteMode === true) {
        const confirmation = confirm('Yakin ingin menghapus tugas ini?');
        if (confirmation === true) {
          data.splice(i, 1);
          saveToLocalStorage();
          renderData();
        }
      }
    });
  }
}

function clearInput() {
  if (input.value !== '') {
    input.value = '';
  }
}

btn2.addEventListener('click', function() {
  if (isDeleteMode === false) {
    isDeleteMode = true;
    btn2.style.backgroundColor = 'red';
  } else {
    btn2.style.backgroundColor = 'white';
    isDeleteMode = false;
  }
});

btn1.addEventListener('click', function() {
  const value = input.value.trim();
  if (value !== '') {
    const object = {
    id: Date.now(),
    text: value,
    isCompleted: false
    }
    
    data.push(object);
    
    saveToLocalStorage();
    renderData();
    clearInput();
  }
});

loadToLocalStorage();
renderData();
console.log('semoga author bisa juara LKS');