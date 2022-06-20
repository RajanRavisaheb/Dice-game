
  var randomno1 = Math.floor(Math.random() * 6) + 1;  //  generates no from 1 to 6

  var randomimgsource = "images/dice" + randomno1 + ".png"; //address of the diffrent dice imgs

document.querySelectorAll("img")[0].setAttribute("src",randomimgsource);



  var randomno2 = Math.floor(Math.random() * 6) + 1;  //  generates no from 1 to 6

  var randomimgsource2 = "images/dice" + randomno2 + ".png"; //address of the diffrent dice imgs

   document.querySelectorAll("img")[1].setAttribute("src",randomimgsource2);

if(randomno1 > randomno2){
  document.querySelector("h1").innerHTML = "😍Player1 winss !!!";
}

if(randomno1 < randomno2){
  document.querySelector("h1").innerHTML = "Player2 winss !!!😍";
}
 if(randomno1 === randomno2){
    document.querySelector("h1").innerHTML = "😌Drawww !!!😌";
}
