//Vars//

let multiplierInput = document.getElementById("mInput");
let convertInput = document.getElementById("convertInput");
let revertInput = document.getElementById("revertInput");
let showConvertion = document.getElementById("showConvertion");
let showReversion = document.getElementById("showReversion");

let multiplier = 100;

new ClipboardJS('#copyConvert');
new ClipboardJS('#copyRevert');

convert = () =>{
   let inputMessage;
   let outputMessage = [];
   inputMessage = convertInput.value;

   for (let i = 0; i < inputMessage.length; i++) {
       outputMessage[i] = inputMessage[i].charCodeAt() * multiplier;
   }
   outputMessage = outputMessage.reverse().join(" ");

   return outputMessage;
}

convertInput.addEventListener("keyup", ()=>{
    if(convertInput.value !== null || convertInput.value !== undefined){
        showConvertion.innerHTML = convert();
    }
    else{
        convertInput.value = "";
    }
})

//=====================================//

revert = () =>{
    let inputMessage = [];
    let outputMessage = [];
    inputMessage = revertInput.value;
    
    outputMessage = inputMessage.split(" ");

    for (let i = 0; i < outputMessage.length; i++) {
        outputMessage[i] = outputMessage[i] / multiplier;
        outputMessage[i] = String.fromCharCode(outputMessage[i]);
    }

    return outputMessage.reverse().toString().replace(/,/g, "");
}

revertInput.addEventListener("keyup", ()=>{
    if(revertInput.value !== null || revertInput.value !== undefined){
        showRevertion.innerHTML = revert();
    }
    else{
        revertInput.value = "";
    }
})


//======================================//

multiplierInput.addEventListener("change", ()=>{
    if(multiplierInput.value > 0){
        multiplier = multiplierInput.value;
    }
})