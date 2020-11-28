import { Cliente } from "./Cliente.js";
import {Gerente}  from "./Funcionarios/Gerente.js";
import {Diretor}  from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor ("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")

const gerente = new Gerente ("Ricardo", 5000, 12345678901);
gerente.cadastrarSenha("123456")



console.log("Diretor ----")
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

console.log(diretorEstaLogado);

console.log("Gerente ----")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");

console.log(gerenteEstaLogado);


const cliente = new Cliente("Lais", 8768746354, "123")


console.log("Cliente ----")
const ClienteEstaLogado = SistemaAutenticacao.login(cliente, "123");

console.log(ClienteEstaLogado);
