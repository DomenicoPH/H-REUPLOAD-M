const body = document.querySelector('body')
const hi = document.querySelector('#hi')
const bye = document.querySelector('#bye')
const answer = document.querySelector('#answer')
console.log(answer)

body.style.backgroundColor = 'red'
answer.style.color = 'yellow'
answer.style.fontFamily = 'Arial'
answer.style.letterSpacing = '0.2rem'
answer.style.fontSize = '3rem'

hi.addEventListener('click',() => {
    alert('Hi!')
    answer.textContent = 'Hi!'
})
bye.addEventListener('click', () => {
    alert('Bye!')
    answer.textContent = 'Bye!'
})

// IIFE

function sayHi(){
    console.log('Hi')
}
sayHi()

/* (function sayHi(){
    console.log('Hi')
})() */

(function sayBye(){
    console.log('bye')
})()