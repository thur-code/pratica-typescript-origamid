declare global {
    type TransacapPagamento = "Boleto" | "Cartão de Crédito";
    type TransacaoStatus = "Paga" | "Recusada pela operadora de cartão" | "Aguardando pagamento" | "Estornada";
    interface TransacaoAPI {
        Nome: string;
        ID: number;
        Data: string;
        Status: TransacaoStatus;
        Email: string;
        ["Valor (R$)"]: string;
        ["Forma de Pagamento"]: TransacapPagamento;
        ["Cliente Novo"]: number;
    }
    interface Transacao {
        nome: string;
        id: number;
        data: Date;
        status: TransacaoStatus;
        email: string;
        moeda: string;
        valor: number | null;
        pagamento: TransacapPagamento;
        novo: boolean;
    }
}
export default function normalizarTransacao(transacao: TransacaoAPI): Transacao;
