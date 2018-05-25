import { Jogador } from './jogador.model';

export interface Racha {
	nome: string;
	confirmados: Jogador[];
	presentes: Jogador[];
	realizado: boolean;
}
