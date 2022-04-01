function calculadora() {

    const operacao = prompt('Escolha uma operação:\n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão real (/)\n5 - Divisão inteira (%)\n6 - Potenciação (**)');

    if(!operacao || operacao >= 7) {
        alert('Erro - Operação Inválida!')
        calculadora()
    }   else {
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        if(!n1 || !n2) {
            alert('Erro - Parâmetros Inválidos!');
            calculadora();
        }

        else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
        
            function subt() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
        
            function mult() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
        
            function divReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
        
            function divInt() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }
        
            function pot() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
                novaOperacao();
            }
        
            function novaOperacao () {
                let opcao = prompt('Deseja fazer uma nova operação?\n\n1 - Sim\n2 - Não');
                if(opcao == 1)
                    calculadora();
                else if(opcao == 2)
                    alert('Encerrando...');
                else {
                    alert('Opção inválida! Tente novamente.');
                    novaOperacao();
                }
            }
        
        
            switch(operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subt();
                    break;
                case 3:
                    mult();
                    break;
                case 4:
                    divReal();
                    break;
                case 5:
                    divInt();
                    break;
                case 6:
                    pot();
                    break;
            } 
        }
    }   
}

calculadora();