import { Jogador } from './jogador.model';

export interface Racha {
	nome: string;
	mes: string;
	mensalistas: Jogador[];
	convidados: Jogador[];
	presentes: Jogador[];
	realizado: boolean;
}
