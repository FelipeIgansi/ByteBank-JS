// Classe abstrata

export class Conta {

    constructor(saldoInicial, cliente, agencia) {
       
        
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta. Essa classe deve ser apenas a classe mãe!");
           

        }
       
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

        console.log(this.constructor);

    }


    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }


    _sacar(valor, taxa) {

        
        const valorSacado = taxa * valor;

        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
        return 0;
    }
    // metodo abstrato
    sacar(valor) {

        throw new Error("O método Sacar é abstrato, portanto deve ser chamado corretamente.")
    }
    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;

    }

    tranferir(valor, conta) {

        if (this._tipo == "salario") {
            return;
        }

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }



}