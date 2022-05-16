function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString= pin +'';
    if(pinString.length == 4){
        return pin;
    }
    else{
        console.log('got 3 digit pin call it again',pin);
        return getPin();
    }
}

function generatePin(){
 const pin= getPin();
 document.getElementById('display-pin').value= pin;    

}

document.getElementById('key-pad').addEventListener('click',function(event){
const number=event.target.innerText;
const numberInput= document.getElementById('typed-numbers');
if(isNaN(number)){
  if(number == 'C'){
      numberInput.value='';
  }
}
else{
    
    const previousNumber = numberInput.value;
    const newNumber= previousNumber+number;
    numberInput.value= newNumber;
}

});

function verifyPin(){
    const pin =document.getElementById('display-pin').value;
    const typedNumbers= document.getElementById('typed-numbers').value;
    const notifySuccess=document.getElementById('notify-success');
    const notifyFail=document.getElementById('notify-fail');
    if (pin == typedNumbers){
  
      notifySuccess.style.display='block';
      notifyFail.style.display='none';
    }
    else{
       
        notifyFail.style.display='block';
        notifySuccess.style.display='none';
    }
}