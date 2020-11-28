import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
// const cliente2 = new Cliente("Alice", 88822233309);


const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
// contaCorrenteRicardo.depositar(500);
// contaCorrenteRicardo.sacar(100);
 
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

//const conta = new Conta(0, cliente1, 1001); Não deve ser feito <-

// console.log(conta);

// console.log(contaPoupanca);


// const conta2 = new ContaCorrente(102, cliente2);

// let valor = 200;
// contaCorrenteRicardo.tranferir(valor, conta2);

//console.log(contaCorrenteRicardo);

console.log('Conta Salario ----')

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);