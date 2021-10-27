let rotasIniciais = [
    {
        entrada: 'Norte',
        saida: 'Nordeste'
    },
    {
        entrada: 'Sudeste',
        saida: 'Centro-Oeste'
    },
    {
        entrada: 'Sudeste',
        saida: 'Sul'
    }
];

function rotasFinais(rotas) {
    let rotasPreEstabelecidas = [
        {
            entrada: 'Sul',
            saida: 'Centro-Oeste'
        },
        {
            entrada: 'Centro-Oeste',
            saida: 'Norte'
        },
        {
            entrada: 'Norte',
            saida: 'Sudeste'
        }
    ];

    rotas.forEach((element, index) => {
        if(rotasPreEstabelecidas[index].entrada == 'Sudeste') {
            console.log('Região Sudeste já possui mais de uma entrada.');
        }

        let contadorSul = 0

        if(rotasPreEstabelecidas[index] == 'Sul') {
            contadorSul++;

            if(contadorSul == 2) {
                console.log('Região Sul já possui mais de uma entrada.');
            }
        }

        rotas.push(rotasPreEstabelecidas[index]);
    });

    rotas.forEach((element) => {
        console.log(`${element.entrada} ----> ${element.saida}`);
    });
}

rotasFinais(rotasIniciais);