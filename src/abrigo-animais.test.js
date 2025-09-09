import { AbrigoAnimais } from "./abrigo-animais";

describe('Abrigo de Animais', () => {

  test('Deve rejeitar animal inválido', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('CAIXA,RATO', 'RATO,BOLA', 'Lulu');
    expect(resultado.erro).toBe('Animal inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve rejeitar animal duplicado', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('RATO,BOLA', 'BOLA,RATO', 'Rex,Rex');
    expect(resultado.erro).toBe('Animal inválido');
  });

  test('Deve rejeitar brinquedo inválido', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('RATO,CARRO', 'BOLA,RATO', 'Rex');
    expect(resultado.erro).toBe('Brinquedo inválido');
  });

  test('Deve rejeitar brinquedo inválido', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('RATO,CARRO,RATO', 'BOLA,RATO', 'Rex');
    expect(resultado.erro).toBe('Brinquedo inválido');
  });

  test('Deve encontrar pessoa para um animal', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo');
    expect(resultado.lista[0]).toBe('Fofo - abrigo');
    expect(resultado.lista[1]).toBe('Rex - pessoa 1');
    expect(resultado.lista.length).toBe(2);
    expect(resultado.erro).toBeFalsy();
  });

  test('Deve encontrar pessoa para um animal intercalando brinquedos', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('LASER,BOLA',
      'CAIXA,BOLA,NOVELO,RATO', 'Mimi,Fofo,Rex,Bola');

    expect(resultado.lista[0]).toBe('Bola - pessoa 2');
    expect(resultado.lista[1]).toBe('Fofo - abrigo');
    expect(resultado.lista[2]).toBe('Mimi - abrigo');
    expect(resultado.lista[3]).toBe('Rex - abrigo');
    expect(resultado.lista.length).toBe(4);
    expect(resultado.erro).toBeFalsy();
  });

  test('Deve considerar que os brinquedos estão na ordem', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('RATO,BOLA', 'BOLA,RATO', 'Rex');
    expect(resultado.lista[0]).toBe('Rex - pessoa 1');
  });

  test('Deve mandar gatos que dividiriam brinquedos para o abrigo', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'LASER,RATO,BOLA', 'BOLA,RATO,LASER', 'Zero,Bebe,Mimi'
    );
    expect(resultado.lista).toContain('Zero - abrigo');
    expect(resultado.lista).toContain('Bebe - pessoa 1');
    expect(resultado.lista).toContain('Mimi - pessoa 2');
  });

  test('Deve mandar animal para o abrigo se as duas pessoas puderem adotar', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,NOVELO,BOLA', 'RATO,LASER,BOLA', 'Zero'
    );
    expect(resultado.lista[0]).toBe('Zero - abrigo');
  });

  test('Deve impedir que a pessoa tenha mais do que três animais', () => {
    const abrigo = new AbrigoAnimais();
    abrigo.encontraPessoas('LASER,RATO,BOLA,CAIXA,NOVELO', 'BOLA,RATO', 'Bebe,Bola');
    const resultado = abrigo.encontraPessoas('SKATE,RATO', 'BOLA,RATO', 'Loco');
    expect(resultado.lista[0]).toBe('Loco - abrigo');
  });

  test('Deve ignorar a ordem dos brinquedos do Loco se adotante tiver animal', () => {
    const abrigo = new AbrigoAnimais();
    abrigo.encontraPessoas('RATO,BOLA', 'BOLA,RATO', 'Rex');
    const resultado = abrigo.encontraPessoas('BOLA,LASER', 'RATO,SKATE', 'Loco');
    expect(resultado.lista[0]).toBe('Loco - pessoa 2');
  });

});
