let red = document.querySelector('.red')
let yellow = document.querySelector('.yellow')
let green = document.querySelector('.green')
let reset = document.querySelector('.reset')

let body = document.querySelector('body')




red.addEventListener('click', () => {
    setTimeout(() => {
    red.style.backgroundColor = "blue"
    body.style.backgroundColor = "red"

   }, 1000)
   console.log('red');
})
yellow.addEventListener('click', () => {
   setTimeout(() => {
    yellow.style.backgroundColor = 'black'
    body.style.backgroundColor = "yellow"

   }, 1000)
   console.log('yellow');

})
green.addEventListener('click', () => {
let btn =  setTimeout(() => {
    green.style.backgroundColor = "indigo"
    body.style.backgroundColor = "green"
  
   }, 1000)
   console.log('green');
})


reset.addEventListener('click', () => {
    setTimeout(() => {
        body.style.backgroundColor = 'white'
        red.style.backgroundColor = 'red'
        yellow.style.backgroundColor = 'yellow'
        green.style.backgroundColor = 'green'
    })
 
 }, 100)
