export type StatusChamado = 'aberto' | 'em_andamento' | 'resolvido';

export type Chamado = {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
  status: StatusChamado;
  prioridade: 'baixa' | 'media' | 'alta';
  criadoEm: string;
};

const STORAGE_KEY = 'campusconnect_chamados';

const exemplos: Chamado[] = [
  {
    id: 'CC-001',
    titulo: 'Problema para acessar o laboratório',
    descricao:
      'Não consigo entrar no sistema do laboratório usando minha conta acadêmica.',
    categoria: 'Acesso',
    status: 'em_andamento',
    prioridade: 'media',
    criadoEm: new Date().toISOString(),
  },
];

export function getChamados(): Chamado[] {
  if (typeof window === 'undefined') return [];

  const salvo = localStorage.getItem(STORAGE_KEY);
  if (salvo) {
    try {
      return JSON.parse(salvo) as Chamado[];
    } catch {
      return [];
    }
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(exemplos));
  return exemplos;
}

export function salvarChamados(chamados: Chamado[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(chamados));
}

export function criarChamado(
  dados: Pick<Chamado, 'titulo' | 'descricao' | 'categoria' | 'prioridade'>,
) {
  const chamados = getChamados();
  const novo: Chamado = {
    ...dados,
    id: `CC-${String(Date.now()).slice(-5)}`,
    status: 'aberto',
    criadoEm: new Date().toISOString(),
  };

  salvarChamados([novo, ...chamados]);
  return novo;
}
