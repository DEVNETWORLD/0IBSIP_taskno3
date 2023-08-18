const inputValue = document.querySelector('#inputVal')
const OutputValue = document.querySelector('#output')
const convertCtof =  document.querySelector('#check-btn')
const reset = document.querySelector('#reset-btn')
const inputs = document.querySelectorAll('input')
const changeValue = document.querySelector('#change-btn')
const C = document.querySelector('.C')
const F = document.querySelector('.F')

function changeUnit(){
               
    if(C.innerText === "°Celsius"){
         F.innerText= "°Celsius"
         C.innerText= "°Fahrenheit"
         inputValue.placeholder = "Enter value in fahrenheit"
         changeValue.innerText = "°C to °F"
    }
    else{
        F.innerText= "°Fahrenheit"
         C.innerText= "°Celsius"
         inputValue.placeholder = "Enter value in celsius ";
         changeValue.innerText = "°F to °C"
    }
    
        inputs.forEach(input=>input.value = '');
        OutputValue.innerText='';
}



changeValue.addEventListener("click", changeUnit) 


function convertingCtoF(c){
    const input = c;
    const output = (input*9)/5+32;

    return output;
}

function clickHandler(){
    if(C.innerText === "°Celsius"){
        var result= convertingCtoF(Number(inputValue.value))
            
   OutputValue.innerText= result.toFixed(2);

   console.log(result.toFixed(2));


    }
    else{
        var result= convertingFtoC(Number(inputValue.value))
            
   OutputValue.innerText= result.toFixed(2);

   console.log(result.toFixed(2));


    }

    if(inputValue.value === ''){
        OutputValue.innerText="Enter input value";
    }

}
function convertingFtoC(f){
    const input = f;
    const output = (input-32)*5/9;
    return output;
    
}

convertCtof.addEventListener("click",  clickHandler)
reset.addEventListener("click",()=> {
    inputs.forEach(input=>input.value = '');
    OutputValue.innerText='';
});

/*reset.addEventListener("click",()=> {
    inputValue.value='';
    OutputValue.innerText='';
    
})*/
