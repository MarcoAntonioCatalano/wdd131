const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); 

// Create a reusable function
function addChapter() {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;
    deleteButton.textContent = '❌';
    
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    input.value = '';
    input.focus();
  }
}

// Trigger on Button Click
button.addEventListener('click', addChapter);

// Trigger on "Enter" Key
input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addChapter();
  }
});