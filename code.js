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


// !!
let f2 = document.forms['f2'];
let inp1 = f2.inp1.value;
let button1 = f2.button;
f2.button1.disabled = true;
f2.checkbox.addEventListener('mouseout',function(){
if(f2.inp1.value !='' && f2.inp2.value !='' && f2.inp3.value !=''  && f2.checkbox.checked  == true ){
   f2.button1.disabled = false;
}
})