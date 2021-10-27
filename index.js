let rotasIniciais = [
    {
        saida: 'Norte',
        entrada: 'Nordeste'
    },
    {
        saida: 'Sudeste',
        entrada: 'Centro-Oeste'
    },
    {
        saida: 'Sudeste',
        entrada: 'Sul'
    }
];

function rotasFinais(rotas) {
    let rotasPreEstabelecidas = [
        {
            saida: 'Sul',
            entrada: 'Centro-Oeste'
        },
        {
            saida: 'Centro-Oeste',
            entrada: 'Norte'
        },
        {
            saida: 'Norte',
            entrada: 'Sudeste'
        }
    ];

    rotas.forEach((element, index) => {
        if(rotasPreEstabelecidas[index].saida == 'Sudeste') {
            console.log('Região Sudeste já possui mais de uma saída.');
        }

        let contadorSul = 0

        if(rotasPreEstabelecidas[index].saida == 'Sul') {
            contadorSul++;

            if(contadorSul == 2) {
                console.log('Região Sul já possui mais de uma saída.');
            }
        }

        rotas.push(rotasPreEstabelecidas[index]);
    });

    rotas.forEach((element) => {
        console.log(`${element.saida} ----> ${element.entrada}`);
        console.log('-----------------------------------------');
    });
}

rotasFinais(rotasIniciais);