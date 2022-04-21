const alunos = [
    {
        nome: 'João',
        nota: 9,
        turma: '1B',
    } , 
    {
        nome: 'Sofia',
        nota: 5,
        turma: '1B',
    } ,
    {
        nome: 'Carlos',
        nota: 7,
        turma: '2B',
    } ,
    
    {
        nome: 'Miguel',
        nota: 6,
        turma: '2A',
    } ,
    
    {
        nome: 'Maria',
        nota: 10,
        turma: '1A',
    } ,
    
];


function alunosAprovados(array, media) {
    
    let aprovados = [];
    for (let i = 0; i < array.length; i++) {

        const {nota, nome} = array[i];

        if(nota >= media)
            aprovados.push(nome)

    }

    return aprovados;

}

console.log(alunosAprovados(alunos, 6));