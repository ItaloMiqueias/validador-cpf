console.log('Javascript carregado');

function validaCPF (cpf) {
    console.log(cpf.length);
    if(cpf.length !=11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        var soma = 0;
        
        //validação do meu primeiro digito
         var soma = 0;

         for(var i=10;i>1;i--){
             soma += numeros.charAt(10-i)*i;
         }

         console.log('Soma primeiro digito ' + soma);

         var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

         if(resultado != digitos.charAt(0)){
             return false;
         }

         console.log(digitos.toString().charAt(0) + ' é a primeira posição da var digitos');
        
        //validação segundo digito
         soma = 0;
         numeros = cpf.substring(0,10);

            for(var k=11;k>1;k--){
                soma += numeros.charAt(11-k)*k;
            }
            console.log('Soma segundo digito ' + soma);

            resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

            if(resultado != digitos.charAt(1)){
                return false;
            }
            console.log(digitos.toString().charAt(1) + ' é a segunda posição da var digitos');

            return true;
    }
}

function validacao() {
    console.log('Iniciando validação CPF');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById('cpf_digitado').value;
    
    var resultadValidacao = validaCPF(cpf);

    if (resultadValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}