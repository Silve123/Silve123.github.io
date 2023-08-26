var count = 0;

function animProfessions(){
  let proffessions = [
    "Software_Development", 
    "Mobile_Development", 
    "Web_Development"
  ]
  var proffession = proffessions[count]
  var animProfessionsEle = document.getElementById("animProfessions");

  if(count<=proffessions.length-1){
    animProfessionsEle.innerHTML = proffession;
    count++;
  }else{
    count = 0;
  }
}


setInterval(animProfessions, 2000)