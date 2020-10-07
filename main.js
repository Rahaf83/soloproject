
function login(){
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

// var Time=Math.abs(start.gettime()-end.gettime());
// var dif=Math.ceil(Time/(1000*3600*24))
var totals=0;
var Booknow= document.getElementById("booknow");
Booknow.onclick=function total(){
var R=document.getElementById('roomnum').value;
var A=document.getElementById('Adults').value;
var c=document.getElementById('children').value;
totals=(50*R*(A+c));
confirm(totals);

}



// // var Time=Math.abs($("#start")-$("#end"));
// // var dif=Math.ceil(Time/(1000*3600*24));
// var total=0;
// $("#book").click(function Total(){
// var R=$('#roomnum').val();
// var A=$('#Adults').val();
// var c=$('#children').val();
// total=(50*R*(A+c));
// });
// console.log(total);