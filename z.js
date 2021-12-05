h = 0;
m = 0;
s = 0;
mls = 0;
timeStarted = 0;
y=1;
time = document.querySelector('.time')



document.querySelector("#add-b").addEventListener("click",(number)=>{
   $("#contenedor-principal").append(`<div class="c-info">
   <div class="time${y}">00:00:00:00</div>
   <div class="separador">|</div>
   <input type="text" class="nombre" placeholder="nombre"></input>
   <div class="c-buttons">
   <button class="btn-start${y}"></button>                          
   <button class="btn-stop${y}"></button>                             
   <button class="btn-reset${y}"></button>    
   </div>
   <div class='resultado${y}'>$idk</div>
   </div>`);


   A='.time'+y
   B='.btn-start'+y
   C='.btn-stop'+y
   D='.btn-reset'+y
   y++
   getElements();

   console.log(A)
   
});


function addCart(number){  

}

function getElements(){
   time = document.querySelector(A);
   btnStart = document.querySelector(B);
   btnStop = document.querySelector(C);
   btnReset = document.querySelector(D);
   document.querySelector(B).addEventListener("click", start);
   document.querySelector(C).addEventListener("click", stop);
   document.querySelector(D).addEventListener("click", reset);
}

function write() {
let ht, mt, st, mlst;
mls++;

if (mls > 99) {
   s++;
   mls = 0;
}
if (s > 59) {
   m++;
   s = 0;
}
if (m > 59) {
   h++;
   m = 0;
}
if (h > 24) h = 0;

mlst = ('0' + mls).slice(-2);
st = ('0' + s).slice(-2);
mt = ('0' + m).slice(-2);
ht = ('0' + h).slice(-2);

time.innerHTML = `${ht}:${mt}:${st}.${mlst}`;
}

function start() {
write();
timeStarted = setInterval(write, 10);
document.querySelector(B).removeEventListener("click", start);
}

function stop() {
clearInterval(timeStarted);
document.querySelector(B).addEventListener("click", start);
}

function reset() {
clearInterval(timeStarted);
time.innerHTML = "00:00:00.00"
h = 0;
m = 0;
s = 0;
mls = 0;
document.querySelector(B).addEventListener("click", start);
}