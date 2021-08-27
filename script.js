const Bday = document.querySelector("#for-birthdate")
const Num = document.querySelector("#for-number")
const Btn = document.querySelector("#btn")
const Output = document.querySelector("#output-box")



function checkBirthdayIslucky() {
    const dob = Bday.value
    const Numb = Num.value
    const sum = calculatesum(dob)
    // console.log(dob,Numb)
    console.log(sum)
    compareValue(sum,Numb)     // ---> called comaprevalue function
}

// for sum function 
function calculatesum(dob) {
    Date = dob.replaceAll("-", "")
    let sum = 0;
    {
    for (let index = 0; index < dob.length; index++) 
        sum = sum + Number(Date.charAt(index));    
    // console.log(sum)
    }
    return sum ;
}


function compareValue (sum,Numb) 
{
    // console.log(sum,Numb)
    if(sum%Numb===0) {
        Output.innerText=("Your Birthdate is lucky Dude !")
    }
    else {
        Output.innerText=("Uff Your Birthdate is not lucky !")
    }
}
Btn.addEventListener('click', checkBirthdayIslucky)