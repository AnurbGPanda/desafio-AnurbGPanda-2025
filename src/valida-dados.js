import { cadastroAnimais, listaAnimais, listaBrinquedos } from './animais.js';
import { cadastroAdotantes } from './adotantes.js';

class Validar {

    // Confere se tem todos os brinquedos favoritos na ordem certa
    conferePreferencias(brinquedo1, brinquedo2, animais) {

        // descobre os brinquedos favoritos
        const nomeAnimal = cadastroAnimais.find(animal => animal.nome === animais);
        const brinquedosAnimal = nomeAnimal.brinquedos;

        // analisa se cada pessoa tem todos os brinquedos favoritos
        const confereBrinquedos1 = brinquedosAnimal.every(brinquedo => brinquedo1.includes(brinquedo));
        const confereBrinquedos2 = brinquedosAnimal.every(brinquedo => brinquedo2.includes(brinquedo));

        let resultado = [];

        // Analisa se a pessoa 1 tem os brinquedos na ordem
        if (confereBrinquedos1) {
            // Exceção de ordem para o Loco se a pessoa adotar outro pet com ele
            if (nomeAnimal.nome === 'Loco' && (cadastroAdotantes[0].animais.length) > 0) {
                resultado.push(true);
            } else {
                let ultimaPosicao = -1;
                let posicaoCorreta1 = true;
                for (let brinquedo of brinquedosAnimal) {
                    const posicao = brinquedo1.indexOf(brinquedo);
                    if (posicao < ultimaPosicao) {
                        // avisa se não está na ordem certa e para a execução
                        posicaoCorreta1 = false;
                        break;
                    }
                    ultimaPosicao = posicao;
                }
                resultado.push(posicaoCorreta1);
            }
        } else {
            resultado.push(false);
        }

        // Repete o processo para pessoa 2
        if (confereBrinquedos2) {
            if (nomeAnimal.nome === 'Loco' && (cadastroAdotantes[1].animais.length) > 0) {
                resultado.push(true);
            } else {
                let ultimaPosicao = -1;
                let posicaoCorreta2 = true;
                for (let brinquedo of brinquedosAnimal) {
                    const posicao = brinquedo2.indexOf(brinquedo);
                    if (posicao < ultimaPosicao) {
                        posicaoCorreta2 = false;
                        break;
                    }
                    ultimaPosicao = posicao;
                }
                resultado.push(posicaoCorreta2);
            }
        } else {
            resultado.push(false);
        }

        return resultado;
    }

    // Função que valida se todos os brinquedos são válidos
    validaBrinquedos(brinquedos1, brinquedos2) {

        // confere se os elementos da string estão separados por vírgula. Espaço opcional.
        const regex = /^([A-Za-z]+)(\s*,\s*[A-Za-z]+)*$/;
        if (!regex.test(brinquedos1.trim()) || !regex.test(brinquedos2.trim())) {
            return false;
        }

        // padroniza os brinquedos para maiúsculo
        const brinquedosP1 = brinquedos1.split(',').map(brinquedo => brinquedo.trim().toUpperCase());
        const brinquedosP2 = brinquedos2.split(',').map(brinquedo => brinquedo.trim().toUpperCase());

        // verifica se há brinquedos duplicados em cada lista
        const validap1 = brinquedosP1.length === new Set(brinquedosP1).size;
        const validap2 = brinquedosP2.length === new Set(brinquedosP2).size;

        // verifica se todos os brinquedos estão na lista de brinquedos disponíveis
        const brinquedos = [...brinquedosP1, ...brinquedosP2];
        const validaBrinquedos = brinquedos.every(brinquedo => listaBrinquedos.includes(brinquedo));

        // só valida os brinquedos se todos os casos forem veradeiros
        return validaBrinquedos && validap1 && validap2;
    }

    //Função que valida se todos os animais são válidos
    validaAnimais(animais, animaisParaAdotar) {
        // Analisa se a string está separada apenas por vírgulas. Espaço opcional.
        const regex = /^([A-Za-z]+)(\s*,\s*[A-Za-z]+)*$/;

        const animaisEscolhidos = animais.split(',').map(brinquedo => brinquedo.trim());
        const validaDuplicados = animaisEscolhidos.length === new Set(animaisEscolhidos).size;
        
        if (!regex.test(animais.trim())) {
            // se não tiver separado por vírgulas, já retorna falso
            return false;
        }

        // cria uma lista dos animais
        const animaisCombinados = animais.split(',').map(animal => animal.trim());

        // confere se os animais estão na lista de cadastro
        const validando = animaisCombinados.every(animal => animaisParaAdotar.includes(animal));
        return validando && validaDuplicados;
    }

    // aplica a regra dos gatos não dividirem brinquedos, rece
    validaGatos(brinquedosPessoa, nomeGato, animaisDaPessoa) {

        //Encontra o gato no cadastro
        const gato = cadastroAnimais.find(animal => animal.nome === nomeGato);


        for (const nome of animaisDaPessoa) {

            // encontra o outro animal da pessoa no cadastro
            const outro = cadastroAnimais.find(a => a.nome === nome);

            // verifica se compartilham algum brinquedo
            const conflito = outro.brinquedos.some(brinquedo => gato.brinquedos.includes(brinquedo));

            // analisa se o gato vai ter conflito de brinquedos
            if (conflito) {
                // primeiro confirma que a pessoa adotaria o gato
                const [okPessoa] = this.conferePreferencias(brinquedosPessoa, [], gato.nome);
                if (okPessoa) {
                    return false; //o gato não pode ser adotado
                }
            }
        }

        return true; // o gato não vai divir os brinquedos
    }

}

export { Validar };