// outra forma de escrever uma funcao
// function limparCampos(){
//      codigo here
// }
const calcularImc = () => {
    const nome = 
        document.getElementById("nome").value;
    const altura = 
        document.getElementById("altura").value;
    const peso = 
        document.getElementById("peso").value;
    const resultado = 
        document.getElementById("resultado");

    if( nome !== '' && peso !== '' && altura !== ''){
        const imc = (peso/(altura*altura)).toFixed(2);
        //comando para exibir no console 'f12'
        console.log('altura: ', altura);

        let classificacao = '';

        if(imc < 18.5){
            classificacao = 'abaixo do peso.';
        }
        else if(imc < 25){
            classificacao = 'com peso ideal. Parabens!!!';
        }
        else if (imc < 30){
            classificacao = 'levemente acima do peso.';
        }
        else if (imc < 35){
            classificacao = 'com obesidade grau I.';
        }
        else if(imc < 40){
            classificacao = 'com obesidade grau II.';
        }
        else {
            classificacao = 'com obesidade grau III. Cuidado!!!';
        }
        resultado.textContent = 
            `${nome}, seu IMC é ${imc} e vc está ${classificacao}`

    }
    else {
        resultado.textContent = 
        'preencha todos os campos';
    }

    limparCampos();
    
};

const limparCampos = () => {
    const nome = 
        document.getElementById("nome").value = null;
    const altura = 
        document.getElementById("altura").value = null;
    const peso = 
        document.getElementById("peso").value = null;
};

// código máscara para usar em CaretPosition, telefone, cpf etc
const mascaraAltura = (value, pattern) => {
    let i = 0;
    let v = value.toString();
    v = v.replace(/\D/g, '');
    return pattern.replace(/#/g, () => v[i++] || '');
};

const aplicar = (value) => {
    const formatado = mascaraAltura(value, '#.##');
    document.getElementById('altura').value = formatado;
}
