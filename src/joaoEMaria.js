let joao = 1;
let maria = 2;

function getMaria(){
    return maria;
}

function getJoao(){
    return joao;
}

function deJoaoParaMaria(){
    maria = joao+maria;
    joao = 0;
}

function deMariaParaJoao(){
    joao = maria+joao;
    maria = 0;
}


export {getJoao,getMaria,deJoaoParaMaria,deMariaParaJoao};