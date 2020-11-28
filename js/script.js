let tiroDeSalida = document.getElementById("boton");
if (tiroDeSalida) tiroDeSalida.addEventListener("click",play,false);

let salida = true;
let punto = false;
let val = 0;
let res = 0;
let d1 = 0;
let d2 = 0;
let t2 = document.getElementById("txt");

function play(){
    if(salida){
        salida = false;
        d1 = (Math.floor(Math.random()*100))%6 + 1;
        d2 = (Math.floor(Math.random()*100))%6 + 1;
        val = d1 + d2;

        document.getElementById("d1").src=("../img/"+d1+".png");
        document.getElementById("d2").src=("../img/"+d2+".png");

        if(val == 2|| val == 3 || val ==12) t2.textContent = "PERDISTE";
        else if(val == 7|| val == 11) t2.textContent = "GANASTE";
        else{
            punto = true;
            t2.textContent = "PUNTO = " + val;
        }
    }else if(punto){
        d1 = (Math.floor(Math.random()*100))%6 + 1;
        d2 = (Math.floor(Math.random()*100))%6 + 1;
        res = d1 + d2;

        document.getElementById("d1").src=("../img/"+d1+".png");
        document.getElementById("d2").src=("../img/"+d2+".png");

        if(res==7){
            t2.textContent = "PERDISTE"
            punto = false;
        }else if(res == val){
            t2.textContent = "GANASTE"
            punto = false;
        }
    }
}


