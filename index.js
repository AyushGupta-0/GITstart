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
let items = document.getElementsByClassName('list-group-item')
// console.log(items)
console.log(items[2])
items[2].style.backgroundColor ='green'
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold'

}
