let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let  convert = document.getElementById("convert")




function calculate(){
    if(celsius.value == "" & fahrenheit.value != ""){
        let output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
        celsius.value = parseFloat( output.toFixed(2));
    }else if(fahrenheit.value == "" & celsius.value != ""){
    
        let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
        fahrenheit.value = parseFloat(output.toFixed(2));
    }else{
        alert("Either of the field should be filled");
    }
}