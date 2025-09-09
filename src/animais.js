// Cadastro dos animais do abrigo
const cadastroAnimais = [
  {
    nome: "Rex",
    especie: "cão",
    brinquedos: ["RATO", "BOLA"]
  },
  { 
    nome: "Mimi",
    especie: "gato",
    brinquedos: ["BOLA", "LASER"]
  },
  { 
    nome: "Fofo", 
    especie: "gato", 
    brinquedos: ["BOLA", "RATO", "LASER"] 
  },
  { 
    nome: "Zero", 
    especie: "gato", 
    brinquedos: ["RATO", "BOLA"] 
  },
  { 
    nome: "Bola", 
    especie: "cão", 
    brinquedos: ["CAIXA", "NOVELO"] 
  },
  { 
    nome: "Bebe", 
    especie: "cão", 
    brinquedos: ["LASER", "RATO", "BOLA"] 
  },
  { 
    nome: "Loco", 
    especie: "jabuti", 
    brinquedos: ["SKATE", "RATO"] 
  }
];

let listaAnimais = cadastroAnimais
    .map(animal => animal.nome) // Extrai apenas os nomes dos animais
    .sort(); // Ordena os nomes em ordem alfabética

const listaBrinquedosTotais = cadastroAnimais
    .flatMap(animal => animal.brinquedos) // Extrai todos os brinquedos dos animais

const listaBrinquedos = [...new Set(listaBrinquedosTotais)].sort(); // Remove brinquedos duplicados e ordena alfabeticamente

export { cadastroAnimais, listaAnimais, listaBrinquedos };