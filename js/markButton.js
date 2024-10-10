let i=1
function freezePage() {
    // Add a class to the body to apply the freezing effect
    document.body.classList.add("freeze-effect");
    
    // Disable scrolling
    document.body.style.overflow = "hidden";
  }
  
  function unfreezePage() {
    // Remove the class to unfreeze the page
    document.body.classList.remove("freeze-effect");
    
    // Enable scrolling
    document.body.style.overflow = "auto";
  }
  
function buttonCheck(b1,b2,b3){
    if(b1.textContent.trim()==b2.textContent.trim() && b1.textContent.trim()==b3.textContent.trim()&& b1.textContent.trim()){
        b1.style.backgroundColor = "red";
        b1.style.color = "white";
        b2.style.backgroundColor = "red";
        b2.style.color = "white";
        b3.style.backgroundColor = "red";
        b3.style.color = "white";
         // Call the functions to freeze and unfreeze the page
        for(i=0;i<100000000;)i++;
        resultbox = document.getElementById("Result");
        resultbox.textContent=('"'+b1.textContent+'"' + ' wins!!');
        document.getElementById("messageBox").style.display = "flex";
    }
}

function resultCheck(){
    buttonCheck(button1,button2,button3);
    buttonCheck(button4,button5,button6);
    buttonCheck(button7,button8,button9);
    buttonCheck(button1,button4,button7);
    buttonCheck(button2,button5,button8);
    buttonCheck(button3,button6,button9);
    buttonCheck(button1,button5,button9);
    buttonCheck(button3,button5,button7);
}
function markButton(id){
    let button = document.getElementById(id);
    
    if(i%2==0){
        if (!button.textContent.trim()) {
            document.getElementById('turn').innerText = '\"X\'s\" Turn'
            button.textContent = "O";
            i++;
          }
    }
    else{
        if (!button.textContent.trim()) {
            document.getElementById('turn').innerText = '\"O\'s\" Turn'
            button.textContent = "X";
            i++;
          }
    }
    resultCheck();
}   
function reloadPage() {
    location.reload();
  }