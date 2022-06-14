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

// $(document).ready(function(){
//   $(window).scroll(function(){
//   	var scroll = $(window).scrollTop();
// 	  if (scroll > 300) {
// 	    $(".mynavbar").css("background" , "blue");
// 	  }

// 	  else{
// 		  $(".mynavbar").css("background" , "#333");  	
// 	  }
//   })
// })


// function showAll() {
//   var all = document.querySelectorAll("#Grap, #Web, #Video, #Model");
//   if (all.style.display === "none") {
//     all.style.display = "block";
//   } else {
//     all.style.display = "none";
//   }
// }

// function showGrap() {
//   var grap = document.getElementById("grap");
//   if (grap.style.display === "none") {
//     grap.style.display = "block";
//   } else {
//     grap.style.display = "none";
//   }
// }

// function showWeb() {
//   var web = document.getElementById("web");
//   if (web.style.display === "none") {
//     web.style.display = "block";
//   } else {
//     web.style.display = "none";
//   }
// }

// function showVideo() {
//   var video = document.getElementById("video");
//   if (video.style.display === "none") {
//     video.style.display = "block";
//   } else {
//     video.style.display = "none";
//   }
// }

function showModel() {
  var model = document.getElementById("model");
  if (model.style.display === "none") {
    model.style.display = "block";
  } else {
    model.style.display = "none";
  }
}

// $(document).scroll(function() {
//   var y = $(this).scrollTop();
//   if (y > 1000) {
//     $('.toTop').fadeIn();
//   } else {
//     $('.toTop').fadeOut();
//   }
// });

// $(document).scroll(function() { 
//   if ($(document).scrollTop() > 1000) { 
//  //To show the div 
//    $('.toTop').show(); 
//   } 
//   else { 
//    $('.toTop').hide(); 
//  //To hide the div 
//   } 
//  }); 