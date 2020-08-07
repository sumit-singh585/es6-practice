// Hiding Notify-Section Area 

document.getElementById('notify').style.display = "none";

document.getElementById('message').style.display = "none";

//Generating Random Number Function Area 

    document.getElementById('randomNumberGenerate').addEventListener('click',function(){
    
    document.getElementById('displayRandomNumber').value = Math.floor(Math.random() * (9999-1000+1) + 1000);
    
    document.getElementById('displayRandomNumber').style.fontSize = "2em";

    document.getElementById('displayRandomNumber').style.textAlign = "center";

    document.getElementById('displayRandomNumber').style.color = "white";

    var counter = 30;
    setInterval(function(){
        counter--;
        if(counter>=0){
            document.getElementById('time-counter').innerHTML =counter;
        }
        if(counter==0)
        {
            document.getElementById('submit').disabled = true;
        }
    },1000);
})

// Input Value Taker Function Area

function inputValueTaker(userInput){
    document.getElementById('displayInputValue').value += userInput;
    
    document.getElementById('displayInputValue').style.color = "white";

    document.getElementById('displayInputValue').style.textAlign = "center";

    document.getElementById('displayInputValue').style.fontSize = "2em";

}

// Delete Function Area

function Delete(){
    document.getElementById('displayInputValue').value = document.getElementById('displayInputValue').value.slice(0,-1);
}

//All Clear Function Area

function allClear(){
    document.getElementById('displayInputValue').value = '';
}

//Submit Function Area

function clickForSubmit(){
    const inputValue = document.getElementById('displayInputValue').value;

    const randomNumber = document.getElementById('displayRandomNumber').value;

    if(inputValue == randomNumber)
    {
        document.getElementById('notify').style.display = "block"
        
        document.getElementById('rightPin').style.display = "block";

        document.getElementById('wrongPin').style.display = "none";

        document.getElementById('count').innerText ;
    }

    else
    {
        document.getElementById('notify').style.display = "block";
        
        document.getElementById('rightPin').style.display = "none";

        document.getElementById('wrongPin').style.display = "block"

        let countValue = document.getElementById('count').innerHTML;
        countValue--;
        document.getElementById('count').innerText = countValue;
        if(countValue==0)
        {
            document.getElementById('submit').style.display = "none";
            document.getElementById('message').style.display ="block"; 
        }

    }

    document.getElementById('displayInputValue').value = "";
}