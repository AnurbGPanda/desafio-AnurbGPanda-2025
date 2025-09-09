import { AbrigoAnimais } from "./abrigo-animais.js";
import { listaAnimais, listaBrinquedos } from "./animais.js";
import { cadastroAdotantes } from "./adotantes.js";
import { Validar } from "./valida-dados.js";


// const resultado1t = abrigoTeste.encontraPessoas('BOLA,LASER', 'BOLA,NOVELO,RATO,LASER,skate', 'Mimi,Fofo,Rex,Bola,Loco');
// console.log(resultado1t);
// console.log(cadastroAdotantes);
// const resultado2t = abrigoTeste.encontraPessoas('bola,RATO,skate', 'LASER,NOVELO', 'Rex,Bebe');
// console.log(resultado2t);
// console.log(cadastroAdotantes);
// const resultado3t = abrigoTeste.encontraPessoas('RATO,skate,bola', 'LASER,NOVELO', 'Rex,Bola');
// console.log(resultado3t);
// console.log(cadastroAdotantes);
// const resultado4t = abrigoTeste.encontraPessoas('skate,RATO,bola', 'bola,laser', 'Mimi,Bebe');
// console.log(resultado4t);
// console.log(cadastroAdotantes);
// const resultado5t = abrigoTeste.encontraPessoas('skate,RATO,bola', 'bola,laser,caixa,novelo', 'Bola,Bebe');
// console.log(resultado5t);
// // console.log(cadastroAdotantes);
// const resultado6t = abrigoTeste.encontraPessoas('skate,RATO,bola', 'bola,laser,caixa,novelo', 'Bola,Bebe,Mimi');
// console.log(resultado6t);
// console.log(cadastroAdotantes);


const abrigo = new AbrigoAnimais();

// const resultado1 = abrigo.encontraPessoas('BOLA,LASER',
//       'BOLA,NOVELO,RATO,LASER', 'Mimi,Fofo,Rex,Bola');
// console.log(resultado1);
// const resultado2 = abrigo.encontraPessoas('RATO, bola', 'LASER, NOVELO', 'Rex, Mimi');
// console.log(resultado2);
// const resultado3 = abrigo.encontraPessoas('RATO, bola', 'LASER, NOVELO', 'Rex');
// console.log(resultado3);
// const resultado4 = abrigo.encontraPessoas('BOLA,RATO,LASER', 'BOLA,RATO,LASER', 'Mimi,Mimi');
// console.log(resultado4);
// const resultado5 = new AbrigoAnimais().encontraPessoas('RATO,CARRO,RATO', 'BOLA,RATO', 'Rex');
// console.log(resultado5);
const resultado6 = new AbrigoAnimais().encontraPessoas('LASER,BOLA','CAIXA,BOLA,NOVELO,RATO', 'Mimi,Fofo,Rex,Bola');
console.log(resultado6);
// const resultado7 = new AbrigoAnimais().encontraPessoas('RATO,BOLA', 'BOLA,RATO', 'Rex');
// console.log(resultado7);
// console.log(cadastroAdotantes);
// const resultado8 = new AbrigoAnimais().encontraPessoas('BOLA,LASER', 'RATO,SKATE', 'Loco');
// console.log(resultado8);
// console.log(cadastroAdotantes);


// console.log(listaBrinquedos);
// abrigo.descobrirAnimais();
// abrigo.descobrirBrinquedos();
// console.log(cadastroAdotantes);

// const validaBrinquedos = abrigoTeste.validaBrinquedos(['RATO', 'bOLA', 'bola'], ['LASER', 'NOVELO']);
// console.log(validaBrinquedos);

// const validaAnimais = abrigoTeste.validaAnimais(['Rex', 'Lulu'], [...listaAnimais]);
// console.log(validaAnimais);

// const conferePreferencias = abrigo.conferePreferencias('rato, skate, BOLA', 'LASER, NOVELO', 'Loco', ['Rex'], []);
// console.log(conferePreferencias);

// const testeGatos = abrigoTeste.validaGato(['Rex', 'Loco', 'Mimi']);
// console.log(testeGatos);

// const validar = new Validar();
// const validandoGatos = validar.validaGatos(['BOLA','LASER','NOVELO'], 'Mimi', ['Loco', 'Mimi', 'Zero1']);
// console.log(validandoGatos);