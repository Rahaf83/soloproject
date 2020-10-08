console.log("connected")

var homeTab=document.getElementById('home');
var Tab2=document.getElementById('store');
var Tab3=document.getElementById('cart');
homeTab.onclick=function homePage(){
    location.href= "home.html";
}
Tab2.onclick=function storePage(){
    location.href= "#.html";
}
Tab3.onclick=function storePage(){
  location.href= "#.html";
}


var login=document.getElementById("login");
login.onclick=function login(){
var username=document.getElementById('email').value;
var password=document.getElementById('password').value;
if (username=="rahaf@yahoo.com" && password=="1234"){
	alert("login sucssfully");
	window.open("file:///C:/Users/Discovery/Desktop/soloproject/review.html");

	}
else if(username==null||username==""){
	alert("please enter correct email");
	}
else if(password==null||password==""){
	alert("please enter correct password");}
else 

	alert("username or password is incorrect");
 	
}
function book(){
	window.open("file:///C:/Users/Discovery/Desktop/soloproject/index.html");
}

 function GetDays(){
                var start = new Date(document.getElementById("start").value);
                var end = new Date(document.getElementById("end").value);
                return parseInt((end-start) / (24 * 3600 * 1000));
        }
var days=0;
        function cal(){
        if(document.getElementById("start")){
         days=GetDays();
        }  
    }


var totals=0;
function total(){
var R=document.getElementById('roomnum').value;
var A=document.getElementById('Adults').value;
var c=document.getElementById('children').value;
totals=((50*parseInt(R))*parseInt(A)+(25*parseInt(c))*days);
console.log(totals);
document.getElementById('Amount').innerHTML=totals
alert(totals);

}


// var bi=document.getElementById('booknow').value;
// bi.onclick=function show(){
//   document.getElementById('Amount').innerHTML=totals;

// }


function enjoy(){
    alert('Thank You we hope enjoy');
}

