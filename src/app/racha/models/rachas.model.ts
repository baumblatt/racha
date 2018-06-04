import { Atuacao } from './atuacao.model';
import { Jogador } from './jogador.model';

export interface Racha {
	nome: string;
	mes: string;
	mensagem: string;
	mensalistas: Jogador[];
	convidados: Jogador[];
	presentes: Atuacao[];
	status: string;
}
