// // console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// // document.title ="123"
// console.log(document.head)
// console.log(document.getElementById('header-title'))
// let x = document.getElementById('header-title')
// let y =  document.getElementById('main-header')
// // console.log(x)
// x.style.border='dotted 3px red'
// y.style.borderBottom='solid 10px green'
// let items = document.getElementsByClassName('list-group-item')
// // console.log(items)
// console.log(items[2])
// items[2].style.backgroundColor ='green'
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold'

// }
// get eliments by tag name
// let li = document.getElementsByTagName('li')
// console.log(li[3])
// console.log(li)
// li[2].style.backgroundColor ='green'
// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold'

// }
// let x= document.getElementsByClassName('notsame')
// console.log(x)
// // x[0].style.border='dotted 3px red'
// let x = document.querySelector('#main-header')
// x.style.borderBottom='solid 10px yellow'
// let input = document.querySelector('input[type="submit"]')
// input.value = 'send'
// let seconditem = document.querySelector('.list-group-item:nth-child(2)')
// seconditem.style.backgroundColor='green'
// let thirditem = document.querySelector('.list-group-item:nth-child(3)')
// thirditem.style = 'display:none'
// let x= document.querySelectorAll('li')
// console.log(x)
// x[1].style.color='green'
// // let odd = document.querySelectorAll('li:nth-child(odd)')
// // for(var i =0;i<odd.length;i++){
// //     odd[i].style.backgroundColor ='green'
// // }
// let itemlist = document.querySelector('#items')
// // console.log(itemlist.parentNode)
// // itemlist.parentNode.style.border = 'dashed 5px yellow '

// // console.log(itemlist.childNodes)
// // itemlist.childNode.style.border = 'dashed 5px yellow '
// // console.log(itemlist.children)
// // console.log(itemlist.children[2])
// itemlist.children[2].style.color = 'green'
// // firstchild 
// console.log(itemlist.firstElementChild)
let newdiv = document.createElement('div')
//add class
newdiv.className='hello'
//add id
newdiv.id='hello1';
//add attribute
newdiv.setAttribute('title','hello div')
//create a new node
let newdivtext = document.createTextNode('HEllo')
//add text to div
newdiv.appendChild(newdivtext)
let container = document.querySelector('header .container')
let h1 = document.querySelector('header h1' )
container.insertBefore(newdiv,h1)

console.log(newdiv)
let newitem = document.createElement('div')
newitem.className='listitem'
newitem.id ='listitem1'
newitem.setAttribute('title','helloitem')
console.log(newitem)
let newitemtext = document.createTextNode('HEllo')
newitem.appendChild(newitemtext)
let container1 = document.querySelector('ul .list-group')
let h2 = document.querySelector('ul li' )
container1.insertBefore(newitem, h2)


