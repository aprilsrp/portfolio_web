function toggleContact() {
    var boxI = document.getElementById("contactIcon");
    var label = document.getElementById("contactButton");

    if (boxI.style.display === "block") {
        boxI.style.display = "none";
        console.log('ihide')
        label.style.display = "block"
      } else {
        boxI.style.display = "block";
        console.log('ishow') 
        label.style.display = "none"
      }

}

function changeHMB1() {
  document.getElementById("how-human-begin").style.backgroundImage = "url('./image/web/how-human-begin2.gif')";
}
function changeHMB2() {
  document.getElementById("how-human-begin").style.backgroundImage = "url('./image/web/mood.png')";
}
function changeHMB3() {
  document.getElementById("how-human-begin").style.backgroundImage = "url('./image/web/xd-hbg.jpg')";
}

