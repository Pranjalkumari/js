const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

buttons.forEach(function (button) {
   // console.log(button)
   button.addEventListener('click', function(e)
{
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
       e.target.style.backgroundColor= 'blue'// chnage button backgrnd color 
        e.target.style.color = 'black'//change the text color
    }
    if(e.target.id === 'yellow'){
        body.style.backgroundColor = 'red';
    }
    if(e.target.id === 'blue'){
        body.style.backgroundColor = 'green';
    }
    
})
})
