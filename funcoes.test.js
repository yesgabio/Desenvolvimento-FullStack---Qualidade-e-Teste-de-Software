const funcoes = require('./funcoes');

test ('Dois mais dois deverá ser quatro', () => {
    expect(funcoes.somarDoisValores (2,2))
    .toBe(4)
});

test ('Deve ser nullo', () => {
    expect(funcoes.sempreNulo())
    .toBe(null)
});

test ('Codigo 100 deve ser válido', () => {
    expect(funcoes.codigoValido(100))
    .toBeTruthy()
});

test ('Codigo 101 deve ser válido', () => {
    expect(funcoes.codigoValido(101))
    .toBeTruthy()
});

test ('Codigo -1 deve ser válido', () => {
    expect(funcoes.codigoValido(-1))
    .toBeFalsy()
});

// Escrever o teste primeiramente

//Inverter strings
//ANA -> ANA
//GABRIELA -> ALEIRBAG
//DARCIO -> OICRAD

test('Deve inverter uma string', () => {
    expect(funcoes.inverterString('Java'))
    .toEqual('avaJ')
})

const casosInversaoString = [['ANA', 'ANA'], ['GABRIELA','ALEIRBAG'], ['DARCIO', 'OICRAD']]
describe('Inversao de Strings', () => {
    test.each(casosInversaoString)(
        'inversao de %p -> %p',
        (original, inversaoEsperada) => {
            const resultado = funcoes.inverterString(original)
            expect(resultado).toEqual(inversaoEsperada)
        }
    )
});

// Não foi feito teste da funcao 'funcaoNaoTestada' -> cobertura de teste < 100%

//Teste de chamadas de APIs
//jsonplaceholder.typicode.com
test('[Promise] Deve carregar o primeiro usuário de teste', () => {
    expect.assertions(1)
    return funcoes.buscarUsuario1().then(dados => {
        expect(dados.name).toEqual('Leanne Graham')
    })
});

test('[AsyncAwait] Deve carregar o primeiro usuário de teste', async () => {
    expect.assertions(1)
    const dados = await funcoes.buscarUsuario1();
    expect(dados.name).toEqual('Leanne Graham')
});