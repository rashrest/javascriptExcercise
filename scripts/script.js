
function heeHaw(){
    let number = document.getElementById("value").value;
    let error= document.getElementById("error");
    if(number.length==0){

        error.textContent="Please enter a number.";
    }
    else if(number<=0){
        error.textContent =  "Please enter positive number.";
    }
    else {
        for (let i = 1; i <= number; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                document.write("<p>Hee Haw!</p>");
            } else if (i % 3 == 0) {
                document.write("<p>Hee!<br></p>");
            } else if (i % 5 == 0) {
                document.write("<p>Haw!<br></p>");
            } else document.write("<p>" + i + "<br></p>");
        }
    }
}
