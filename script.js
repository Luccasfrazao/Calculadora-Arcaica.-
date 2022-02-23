const form = document.getElementById('formulario'); 

form.addEventListener('submit', function (e){
    e.preventDefault();


    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const operation = document.getElementById('operation').value;


    const inputnum1 = Number(num1.value);
    const inputnum2 = Number(num2.value);
    const adicao = '+';
    const sub = '-';
    const div = '/'; 
    const multi = '*';
 
  
   

    if(operation !== adicao && operation !== sub && operation !== div && operation !== multi ){
        return SetResultado('Você não está usando um operador valido', false);
    }
    


    const msg = `Seu resultado é: ${Result(inputnum1, inputnum2, operation)}`;

    SetResultado(msg, true);
    
    
});


function Result(inputnum1, inputnum2, operation){

    if(operation === '+' ){
     return inputnum1 + inputnum2;
    }else if(operation == '-'){
        return inputnum1 - inputnum2;
    }else if(operation == '/'){
        return inputnum1 / inputnum2;
    }else if(operation == '*'){
        const divisao = inputnum1 / inputnum2;
      return divisao;
    }else{

    }
   

};

function CriaP(){
    const p = document.createElement('p');
    return p;

}


function SetResultado(msg, isvalid){

    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';
    const p = CriaP();
    resultado.appendChild(p);
   
    p.innerHTML = msg;

    if(isvalid){
        p.classList.add('paragrafo-correto');
    }else{
        p.classList.add('paragrafo-errado');
    };


}


