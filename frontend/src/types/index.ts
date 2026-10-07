export type Usuario = {
  id: string;
  nome: string;
  email: string;
  papel: "cliente" | "agente" | "admin";
};
