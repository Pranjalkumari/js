const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

buttons.forEach(function(button) {
 button.addEventListener('click', function(e){
     console.log(e.target)
     if(e.target.id === 'red')
        e.target.style.backgroundColor = 'red';
     else  if(e.target.id === 'yellow')
        e.target.style.backgroundColor = 'yellow';
     else if(e.target.id === 'blue')
        e.target.style.backgroundColor = 'blue';
     else if(e.target.id === 'pink')
        e.target.style.backgroundColor = 'pink';
     else if(e.target.id === 'orange')
        e.target.style.backgroundColor = 'orange';
     else if(e.target.id === 'black')
        e.target.style.backgroundColor = 'black';
     else if(e.target.id === 'green')
        e.target.style.backgroundColor = 'green';
     else if(e.target.id === 'sky')
        e.target.style.backgroundColor = 'sky';
     else{
         
     }
     

 }
  )
 
});
