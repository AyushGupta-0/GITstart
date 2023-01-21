var form = document.getElementById('addForm')
var itemlist = document.getElementById('items')
var filter = document.getElementById('filter');
form.addEventListener('submit',additem);
itemlist.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems)
function additem(e){
    e.preventDefault();
    var newitem = document.getElementById('item').value;
    var description = document.getElementById('description').value;
    var li = document.createElement('li');
    li.className='list-group-item';
    var desnode = document.createTextNode(" "+ description)
    li.appendChild(document.createTextNode(newitem));
    li.appendChild(desnode)
    // delete button starts 
    var deleteBtn = document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete'
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    // delete button ends
    //edit button 
    var editBtn = document.createElement('button');
    editBtn.className='btn btn-warning btn-sm float-right delete'
    editBtn.appendChild(document.createTextNode('E'));
    li.appendChild(editBtn);
    //edit buttonends
    itemlist.appendChild(li)
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemlist.removeChild(li);
      }
    }
}
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemlist.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

