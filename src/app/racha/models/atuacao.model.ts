import { Jogador } from './jogador.model';

export interface Atuacao {
	jogador: Jogador;
	gols: number;
	vitorias: number;
	derrotas: number;
	empates: number;
	amarelos: number;
	vermelhos: number;
}
