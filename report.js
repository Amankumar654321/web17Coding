// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks
document.querySelector("form").addEventListener("submit", formsubmit)
function formsubmit(){
    event.preventDefault();
var box1 = document.querySelector("#image").value;
var name = document.querySelector("#name").value;
var batch = document.querySelector("#batch").value;
var dsa = document.querySelector("#dsa").value;
var cs = document.querySelector("#cs").value;
var coding = document.querySelector("#coding").value;

var trow = document.createElement("tr");
var td1= document.createElement("td");
var td2= document.createElement("td");
var td3= document.createElement("td");
var td4= document.createElement("td");
var td5= document.createElement("td");
var td6= document.createElement("td");
var td7 = document.createElement("td");
var td8 = document.createElement("td");
var image = document.createElement("img");


image.src= box1;
td1.append(image);
td2.innerText= name;
td3.innerText= batch;
td4.innerText= dsa;
td5.innerText= cs;
td6.innerText= coding;
var sum= +(dsa) + +(cs) + +(coding);
var total = 30;
var di = sum/total;
var percent = di*100;
td7.innerText = percent;
if(td7.innerText>50){
    td8.innerText= "Regular";
    td8.style.backgroundColor = "green";

}
else{
    td8.innerText = "Async"
    td8.style.backgroundColor= "red";
}

trow.append(td1,td2, td3, td4, td5, td6, td7, td8);


document.querySelector("tbody").append(trow);
}








