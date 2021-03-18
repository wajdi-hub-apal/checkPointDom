var increment = document.querySelectorAll('.qt-plus');
console.log(increment)
//getting decrement buttons
var decrement = document.querySelectorAll('.qt-minus');
console.log(decrement)
//looping on increment

for (let i=0; i < increment.length; i++) {
    increment[i].addEventListener('click', function() {
        increment[i].previousElementSibling.innerHTML++
    })
};

//looping on decrement
for (let i=0; i < decrement.length; i++) {
    decrement[i].addEventListener('click', function() {
        decrement[i].nextElementSibling.innerHTML--
    })
}



