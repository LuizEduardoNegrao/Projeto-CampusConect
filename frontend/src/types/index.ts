type Chamado = {
  id: string;
  titulo: string;
  status: "aberto" | "em_andamento" | "resolvido";
  prioridade: "baixa" | "media" | "alta";
  criadoEm: string;
};

type Usuario = {
  id: string;
  nome: string;
  email: string;
  papel: "cliente" | "agente" | "admin";
};
