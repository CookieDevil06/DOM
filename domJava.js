let joke1 = "Why did the zero start dating?";
let answer1 = "To find the one.";

let joke2 = "Why did the chicken cross the road?";
let answer2 = "To get to the other side.";

let joke3 = "Why can't you fight a scarecrow";
let answer3 = "Because aftet the last straw there is nothing left"

let main = document.querySelector("main");
main.innerHTML ="<ul>" + "<li>" + joke1 + "<br/>" + answer1 + "<li>" + joke2 + "<br/>" + answer2 + "<li>" + joke3 + "<br/>" + answer3 + "</ul>";




let p = document.createElement("p");
p.innerHTML = "That's all folks";
document.body.appendChild(p);