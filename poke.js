function check(){
    let ans = document.getElementById("answer");
    console.log("hi");
    document.body.style.backgroundColor = "#"+ans.value;
    console.log(ans.value);
}

function getParams(){
    // get url parameters
    url = location.search; // e.g. ?num1=43&num2=23
    var parts = url.substring(1).split('&');
    para_str = parts[0];
    var parameter_obj =[];
    // looping through all arguments and store in Object
for(var i=0;i<parts.length;i++){
 var split_val = parts[i].split('=');
 
 // Check argument is available or not e.g. ?num1=43&
 if(split_val[0] == undefined || split_val[0] == '' )
  continue;
 var value = split_val[1];
 // Check value is available or not e.g. ?num1=43&num2= or ?num1=43&num2
 if(value == undefined){
  value = ""; // Assign space if value is not defined
 }
 parameter_obj[split_val[0]] = value; 
}
    return parameter_obj;
}
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function keydown(e){
    let guess = (answerTextBox.value);
    console.log("GUESSED " + guess);
    let correct = true;
    switch (guess.toLowerCase()) {
            case "712044":
            console.log("shark");
            break;
        case "725563":
            console.log("drawer");
            break;
        case "301974":
            console.log("bunt");
            break;
        case "448029":
            console.log("light");
            break;
        case "573448":
            console.log("drum");
            break;
        case "765116":
            console.log("paint");
            break;
        case "744948":
            console.log("mummy");
            break;
        case "105182":
            console.log("pillow");
            break;
        case "790970":
            console.log("rail");
            break;
        case "063024":
            console.log("chicken");
            break;
        case "charmander":
            console.log("chest");
            break;

        default:
            console.log("nerp");
            correct = false;
    }
    if (correct) {
        console.log("CONGRATS UR MOVING ON");
        answerTextBox.style.borderColor="green";
               document.getElementById("checkmark").style.visibility="visible";
 document.getElementById("hint").style.visibility="hidden";
        await delay(10); 
        answerTextBox.disabled=true;
        await delay(3000);

        const urlParams = new URLSearchParams(window.location.search);

        urlParams.set('answer', guess);

        window.location.search = urlParams;
    }
}

var answerTextBox = document.getElementById('answerz');
console.log(answerTextBox);
answerTextBox.addEventListener('input', keydown, false);
answerTextBox.focus();
let final = false;
let params = getParams();
console.log(params);
if(params["answer"]==undefined){
    console.log("book");
    imgName="0.jpg";
    imgClasses = "book landscape"

} else {
    switch (params["answer"].toLowerCase()) {
        case "712044":
            console.log("shark");
            imgName = "1.jpg";
            imgClasses = "shark landscape"
            break;
        case "725563":
            console.log("drawer");
            imgName = "2.jpg";
            imgClasses = "drawer landscape"
            break;
        case "301974":
            console.log("bunt");
            imgName = "3.jpg";
            imgClasses = "bunt portrait"
            break;
        case "448029":
            console.log("light");
            imgName = "4.jpg";
            imgClasses = "light landscape"
            break;
        case "573448":
            console.log("drum");
            imgName = "5.jpg";
            imgClasses = "drum portrait"
            break;
        case "765116":
            console.log("paint");
            imgName = "6.jpg";
            imgClasses = "paint portrait"
            break;
        case "744948":
            console.log("mummy");
            imgName = "7.jpg";
            imgClasses = "mummy portrait"
            break;
        case "105182":
            console.log("pillow");
            imgName = "8.jpg";
            imgClasses = "pillow landscape"
            break;
        case "790970":
            console.log("rail");
            imgName = "9.jpg";
            imgClasses = "rail portrait"
            break;
        case "063024":
            console.log("chicken");
            imgName = "10.jpg";
            imgClasses = "chicken portrait"
            answerTextBox.type = "text";
            break;
        case "charmander":
            console.log("chest");
            imgName = "11.jpg";
            imgClasses = "chest landscape"
            final = true;
            break;

        default:
            console.log("nerp");
    }
}
if(final) {
    answerTextBox.style.visibility = "hidden";
}
hintImg = document.getElementById("hint");
hintImg.src = imgName;
hintImg.className = imgClasses;