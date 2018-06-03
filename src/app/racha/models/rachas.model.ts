import { Jogador } from './jogador.model';

export interface Racha {
	nome: string;
	mes: string;
	mensagem: string;
	mensalistas: Jogador[];
	convidados: Jogador[];
	presentes: Jogador[];
	status: string;
}
