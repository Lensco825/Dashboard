var add = document.getElementById('addBtn');
var input = document.getElementById('input');
var taskList = document.getElementById('taskList');
var darkMode = document.getElementById('darkMode');
var projectGrid = document.getElementById("project-items");

add.addEventListener('click', function() {
  var item = document.createElement('li');
  var taskLength = item.innerHTML;
  item.innerHTML = input.value;
  taskList.appendChild(item);
  item.classList.add('list');
  item.addEventListener('click', function(){
  taskList.removeChild(item);
})
  if(taskLength.length === 0) {
   taskList.removeChild(item); 
  }
}
);


darkMode.addEventListener('click', function () {
    document.body.classList.toggle('dark');
  });

