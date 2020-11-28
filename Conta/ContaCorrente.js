 import { Conta } from "../Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(agencia, cliente) {

        // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
        // this._saldo = 0;

        super(0,agencia, cliente);

        ContaCorrente.numeroDeContas += 1;
    }

    // Sobreescrevendo o comportamento de sacar 
    sacar(valor) {

        let taxa = 1;
        return this._sacar(valor, taxa);
    }

}
