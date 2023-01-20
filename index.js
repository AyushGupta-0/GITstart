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
let x= document.querySelectorAll('li')
console.log(x)
x[1].style.color='green'
let odd = document.querySelectorAll('li:nth-child(odd)')
for(var i =0;i<odd.length;i++){
    odd[i].style.backgroundColor ='green'
}

