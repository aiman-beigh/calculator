let calculation = localStorage.getItem('calculation')||' ' ;
function calculations(value){
 calculation +=value;
 localStorage.setItem('calculation',calculation);
 
 display();

}

function display(){
 document.querySelector('.display-out').innerHTML = calculation;
}