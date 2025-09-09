import { cadastroAnimais, listaAnimais, listaBrinquedos } from './animais.js';
import { cadastroAdotantes } from './adotantes.js';
import { Validar } from './valida-dados.js';

const validar = new Validar();

class AbrigoAnimais {

  // Função com o prompt inicial para mostrar o que está acontecendo
  boasVindas(brinquedos1, brinquedos2, animais) {
    console.log("Vamos encontrar adotantes para os animais do abrigo!")
    console.log("Temos duas pessoas interessadas em adoção e elas vão brincar com os pets.")
    console.log("A Pessoa 1 escolheu " + brinquedos1 + " e a Pessoa 2 escolheu " + brinquedos2 + " para brincar com: " + animais + ".\n");
  }

  // Função para definir destino dos animais
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {

    // Transforma as strings de brinquedos em arrays
    const brinquedos1 = brinquedosPessoa1.split(',').map(brinquedo => brinquedo.trim().toUpperCase()); // array de brinquedos da pessoa 1
    const brinquedos2 = brinquedosPessoa2.split(',').map(brinquedo => brinquedo.trim().toUpperCase()); // array de brinquedos da pessoa 2

    // Confere se os brinquedos são válidos
    try {
      const validaBrinquedos = validar.validaBrinquedos(brinquedosPessoa1, brinquedosPessoa2);
      if (!validaBrinquedos) {
        throw new Error("Brinquedo inválido");
      }
    } catch (error) {
      return { erro: error.message };
    }

    const animaisAbrigo = ordemAnimais.split(',').map(animal => animal.trim()); // array dos animais do parâmetro

    let animaisParaAdotar = [...listaAnimais]; // lista de animais disponíveis para adoção

    // Confere se os animais são válidos
    try {
      const validaAnimais = validar.validaAnimais(ordemAnimais, animaisParaAdotar);
      if (!validaAnimais) {
        throw new Error("Animal inválido");
      }
    } catch (error) {
      return { erro: error.message };
    }

    // Exibe o prompt inicial
    this.boasVindas(brinquedos1, brinquedos2, animaisAbrigo);

    let resultado = []; // array para armazenar o resultado da adoção

    // Combinação entre animais e adotantes
    for (let i = 0; i < animaisAbrigo.length; i++) {
      const animal = cadastroAnimais.find(a => a.nome === animaisAbrigo[i]);
      const preferencias = validar.conferePreferencias(brinquedos1, brinquedos2, animal.nome);

      // confere se só uma das pessoas pode adotar
      if (preferencias[0] !== preferencias[1]) {

        // se a pessoa 1 atende os requisitos
        if (preferencias[0]) {
          let podeAdotar = true;

          // analisa se tem um gato (que não divide brinquedos)
          if (animal.especie === "gato") {
            podeAdotar = validar.validaGatos(brinquedos1, animal.nome, cadastroAdotantes[0].animais);
          }

          // animal vai para pessoa 1
          if (podeAdotar && cadastroAdotantes[0].animais.length < 3) {
            resultado.push(`${animal.nome} - pessoa 1`);
            cadastroAdotantes[0].animais.push(animal.nome);
          } else {
            resultado.push(`${animal.nome} - abrigo`); // se não, volta para o abrigo
          }

          // mesmo processo se a pessoa 2 que atende os requistos
        } else if (preferencias[1]) {
          let podeAdotar = true;

          if (animal.especie === "gato") {
            podeAdotar = validar.validaGatos(brinquedos2, animal.nome, cadastroAdotantes[1].animais);
          }

          if (podeAdotar && cadastroAdotantes[1].animais.length < 3) {
            resultado.push(`${animal.nome} - pessoa 2`);
            cadastroAdotantes[1].animais.push(animal.nome);
          } else {
            resultado.push(`${animal.nome} - abrigo`);
          }
        }
        // se nenhuma das pessoas atender os requisitos, o animal vai para o abrigo
      } else {
        resultado.push(`${animal.nome} - abrigo`);
      }
    }
    return {
      lista: resultado.sort()
    }; // Retorna o resultado da adoção em ordem alfabética
  }
}

export { AbrigoAnimais as AbrigoAnimais};