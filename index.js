var form = document.getElementById('addForm')
var itemlist = document.getElementById('items')
form.addEventListener('submit',additem);
itemlist.addEventListener('click',removeItem);
function additem(e){
    e.preventDefault();
    var newitem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className='list-group-item';
    console.log(li)
    li.appendChild(document.createTextNode(newitem));
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
  

