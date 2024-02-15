import { Produto } from "./Produto";
import { Cliente } from "./Cliente";

export type Order = {
    orderId: string;
    dataDaVenda: string;
    clienteInfo: Cliente;
    products: Produto[]
    metodoPagamento: string;
    valorDaFicha: number;
    parcelas:number;
    datasVencimento: string[]

}
export type OrderPost = {
    dataDaVenda: string;
    clienteInfo: Cliente;
    products: Produto[]
    metodoPagamento: string;
    valorDaFicha: number;
    parcelas:number;
    datasVencimento: string[]

}