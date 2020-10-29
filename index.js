import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
// const cliente2 = new Cliente("Alice", 88822233309);


const contaCorrenteRicardo = new Conta(0, cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new Conta(50, cliente1, 1001);

console.log(contaPoupanca);



// const conta2 = new ContaCorrente(102, cliente2);

// let valor = 200;
// contaCorrenteRicardo.tranferir(valor, conta2);

console.log(contaCorrenteRicardo);