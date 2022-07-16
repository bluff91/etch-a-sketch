const canvas = document.querySelector('.canvas');
    
    for (let i=0; i<256; i++){
        const div = document.createElement('div');
        div.classList.add('div');
        canvas.appendChild(div);

        div.textContent="AU!! ";
    
    }
    
    
const mousePointer = document.querySelectorAll('.div');

mousePointer.forEach(div => div.addEventListener('mouseenter',function(e){
    e.target.style.backgroundColor='black';
}))


const button = document.querySelector('.btn');
button.addEventListener('click',function(e){
    const aux = document.querySelectorAll('.div');
  
    aux.forEach(div => div.style.backgroundColor='white');
    console.log(aux);
    
});
console.log(button);

  
    
  
  

