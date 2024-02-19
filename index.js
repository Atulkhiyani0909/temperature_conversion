let from=document.querySelector("#convertor_selector");
let output=document.querySelector("#to_output");

let ans=`Null`;
from.addEventListener('change',(events)=>{
       ans=`${events.target.value}`;
});
console.log(ans);

let ans2=`Null`;
let To=document.querySelector("#convertor_selector2");

To.addEventListener('change',(events)=>{
ans2=`${events.target.value}`;
})
console.log(ans2);


      
let success=document.querySelector("#suc");
success.addEventListener("click",function(){
      if(ans=='Celcius' && ans2=='Farenhiet'){
            celcius_farenhiet();
            output.value=`${celcius_farenhiet()} F`;
      }

      else if(ans=='Celcius' && ans2=='kelvin'){
            celcius_kelvin();
            output.value=`${celcius_kelvin()} K`;
      }
      else if(ans=='Celcius' && ans2=='Reaumur'){
            celcius_Reaumur();
            output.value=`${celcius_Reaumur()} R`;
      }
      else if(ans=='Celcius' && ans2=='Celcius'){
            let Tc=document.querySelector("#from_input");
            output.value=`${Tc.value} C`
      }
      else if(ans=='Farenhiet' && ans2=='Celcius'){
            farenhiet_celcius();
            output.value=`${farenhiet_celcius()} C`;
      }

      else if(ans=='Farenhiet' && ans2=='kelvin'){
            farenhiet_kelvin();
            output.value=`${farenhiet_kelvin()} K`;
      }
      else if(ans=='Farenhiet' && ans2=='Reaumur'){
            farenhiet_Reaumur();
            output.value=`${farenhiet_Reaumur()} R`;
      }
      else if(ans=='Farenhiet' && ans2=='Farenhiet'){
            let Tf=document.querySelector("#from_input");
            output.value=`${Tf.value} F`
      }

      //

      if(ans=='kelvin' && ans2=='Farenhiet'){
            kelvin_farenhiet();
            output.value=`${kelvin_farenhiet()} F`;
      }

      else if(ans=='kelvin' && ans2=='Celcius'){
            kelvin_celcius();
            output.value=`${kelvin_celcius()} C`;
      }
      else if(ans=='kelvin' && ans2=='Reaumur'){
            celcius_Reaumur();
            output.value=`${kelvin_Reaumur()} R`;
      }
      else if(ans=='kelvin' && ans2=='kelvin'){
            let Tk=document.querySelector("#from_input");
            output.value=`${Tk.value} K`
      }
      else if(ans=='Reaumur' && ans2=='Celcius'){
            Reaumur_celcius();
            output.value=`${Reaumur_celcius()} C`;
      }

      else if(ans=='Reaumur' && ans2=='Farenhiet'){
            Reaumur_farenhiet();
            output.value=`${Reaumur_farenhiet()} F`;
      }
      else if(ans=='Reaumur' && ans2=='kelvin'){
            Reaumur_kelvin();
            output.value=`${Reaumur_kelvin()} K`;
      }
      else if(ans=='Reaumur' && ans2=='Reaumur'){
            let Tr=document.querySelector("#from_input");
            output.value=`${Tr.value} R`
      }

      else if(ans=='Null' && ans2=='Null'){
            alert("Select Temperature to convert");

            output.value="Invalid";
      }
      
     

});      
  
function celcius_farenhiet(){
      let Tc=document.querySelector("#from_input");
      let Tf=(9/5 * Tc.value)+32;
      console.log(Tf);
      return Tf;

}

function celcius_kelvin(){
      let Tc=document.querySelector("#from_input");
      let Tk=273.15+ +Tc.value;
      console.log(Tk);
      return Tk;

}

function celcius_Reaumur(){
      let Tc=document.querySelector("#from_input");
      let Tr=(Tc.value*4)/5;
      console.log(Tr);
      return Tr;
}

function farenhiet_celcius(){
      let Tf=document.querySelector("#from_input");
      let Tc=(Tf.value-32)*5/9;
      console.log(Tc);
      return Tc;

}

function farenhiet_kelvin(){
      let Tf=document.querySelector("#from_input");
      let Tk=(Tf.value-32)*5/9+273.15;
      console.log(Tk);
      return Tk;

}

function farenhiet_Reaumur(){
      let Tf=document.querySelector("#from_input");
      let Tr=(Tf.value-32)*4/9;
      console.log(Tr);
      return Tr;
}


function kelvin_farenhiet(){
      let Tk=document.querySelector("#from_input");
      let Tf=(Tk.value-273.15)*9/5+32;
      console.log(Tf);
      return Tf;

}

function kelvin_celcius(){
      let Tk=document.querySelector("#from_input");
      let Tc=Tk.value-273.15;
      console.log(Tc);
      return Tc;

}

function kelvin_Reaumur(){
      let Tk=document.querySelector("#from_input");
      let Tr=(Tk.value-273.15)*0.8;
      console.log(Tr);
      return Tr;
}

function Reaumur_celcius(){
      let Tr=document.querySelector("#from_input");
      let Tc=Tr.value*1.25;
      console.log(Tc);
      return Tc;

}

function Reaumur_kelvin(){
      let Tr=document.querySelector("#from_input");
      let Tk=1.25*Tr.value+273.15;
      console.log(Tk);
      return Tk;

}

function Reaumur_farenhiet(){
      let Tr=document.querySelector("#from_input");
      let Tf=Tr.value *(9/4) + 32;
      console.log(Tf);
      return Tf;
}



let reset=document.querySelector("#reset");
reset.addEventListener('click',function(){
      ans=`Null`;
      ans2=`Null`;
});






