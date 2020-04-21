/*global alert*/
/* eslint-env browser */
/* eslint-disable no-unused-vars */
var click = 0;
var click1 = 0;
function wrong()
{
    var x = document.getElementById("heart1");
    var y = document.getElementById("heart2");
    var z = document.getElementById("heart3");
    
    click += 1;
    if(click > 0){x.style.color = "white";}
    if(click > 1){y.style.color = "white";}
    if(click > 2){z.style.color = "white"; click = 0;document.getElementById("result").innerHTML = "GAME OVER";}
}

function reset()
{
    var x = document.getElementById("heart1");
    var y = document.getElementById("heart2");
    var z = document.getElementById("heart3");
    var a = document.getElementById("smile1");
    var b = document.getElementById("smile2");
    var c = document.getElementById("smile3");
    var d = document.getElementById("smile4");
    var e = document.getElementById("smile5");
    
    if(x.style.color === "white" || click > 0){click = 0;x.style.color = "#66FCF1";y.style.color = "#66FCF1";z.style.color = "#66FCF1";document.getElementById("result").innerHTML = "";}
    if(a.style.color === "#66FCF1"){document.getElementById("result").innerHTML = "";a.style.color = "white";b.style.color = "white";c.style.color = "white";d.style.color = "white";e.style.color = "white"}
    else{document.getElementById("result").innerHTML = "";a.style.color = "white";b.style.color = "white";c.style.color = "white";d.style.color = "white";e.style.color = "white"}
}

function smile1()
{
    
    var x = document.getElementById("smile1");
    var y = document.getElementById("smile2");
    var z = document.getElementById("smile3");
    var a = document.getElementById("smile4");
    var b = document.getElementById("smile5");
    
   x.style.color = "#66FCF1"
    
    click1 += 1;
    
    if(click1 > 4){click1 = 0;document.getElementById("result").innerHTML = "YOU WIN"}
}

function smile2()
{
    
    var x = document.getElementById("smile1");
    var y = document.getElementById("smile2");
    var z = document.getElementById("smile3");
    var a = document.getElementById("smile4");
    var b = document.getElementById("smile5");
    
   y.style.color = "#66FCF1"
    
    click1 += 1;
    
    if(click1 > 4){click1 = 0;document.getElementById("result").innerHTML = "YOU WIN"}
}

function smile3()
{
    
    var x = document.getElementById("smile1");
    var y = document.getElementById("smile2");
    var z = document.getElementById("smile3");
    var a = document.getElementById("smile4");
    var b = document.getElementById("smile5");
    
   z.style.color = "#66FCF1"
    
    click1 += 1;
    
    if(click1 > 4){click1 = 0;document.getElementById("result").innerHTML = "YOU WIN"}
}

function smile4()
{
    
    var x = document.getElementById("smile1");
    var y = document.getElementById("smile2");
    var z = document.getElementById("smile3");
    var a = document.getElementById("smile4");
    var b = document.getElementById("smile5");
    
   a.style.color = "#66FCF1"
    
    click1 += 1;
    
    if(click1 > 4){click1 = 0;document.getElementById("result").innerHTML = "YOU WIN"}
}
function smile5()
{
    
    var x = document.getElementById("smile1");
    var y = document.getElementById("smile2");
    var z = document.getElementById("smile3");
    var a = document.getElementById("smile4");
    var b = document.getElementById("smile5");
    
   b.style.color = "#66FCF1"
    
    click1 += 1;
    
    if(click1 > 4){click1 = 0;document.getElementById("result").innerHTML = "YOU WIN"}
}

function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    
}

function newquest()
{
    var quest = document.getElementById('newquestion').value;
    localStorage.setItem('question', quest);
    var ul=document.getElementById('myUL');
        var li=document.createElement('li');
        li.innerHTML="<a>" + localStorage.getItem('question', quest) + "</a>";
        ul.appendChild(li);
    var ull=document.getElementById('newquest');
        var lii=document.createElement('li');
        lii.innerHTML="<a>" + localStorage.getItem('question', quest) + "</a>";
        ull.appendChild(lii);
}
