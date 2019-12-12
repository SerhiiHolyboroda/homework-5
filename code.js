let f1 = document.forms['f1']
let input1 = f1.input1.value;
let input2 = f1.input2.value;
let button = f1.button;
console.log(f1)
  
    f1.button.addEventListener('click', function(){
        if(f1.input1.value != ''){
            
    f1.input2.value = f1.input1.value;
    f1.input1.value = '';
        }
})               
 
