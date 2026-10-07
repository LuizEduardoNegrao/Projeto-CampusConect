'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import Header from '@/components/Header';
import { criarChamado } from '@/lib/chamados';

export default function NovoChamado() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('Acesso');
  const [prioridade, setPrioridade] = useState<'baixa' | 'media' | 'alta'>(
    'media',
  );
  const [enviado, setEnviado] = useState(false);
  const [id, setId] = useState('');

  function enviar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!titulo.trim() || !descricao.trim()) return;
    const chamado = criarChamado({ titulo, descricao, categoria, prioridade });
    setId(chamado.id);
    setEnviado(true);
  }

  if (enviado) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-2xl px-6 py-12">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <p className="text-sm font-semibold text-green-700">
              Chamado enviado
            </p>
            <h1 className="mt-2 text-2xl font-bold text-slate-900">
              Sua solicitação foi registrada.
            </h1>
            <p className="mt-3 text-slate-600">
              Número do chamado: <strong>{id}</strong>
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="/meus-chamados%20(aluno)"
                className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white"
              >
                Ver meus chamados
              </Link>
              <Link
                href="/"
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                Voltar ao início
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-10">
        <Link href="/" className="text-sm text-slate-600 hover:underline">
          ← Voltar
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-slate-900">
          Abrir novo chamado
        </h1>
        <p className="mt-2 text-slate-600">
          Descreva sua solicitação para que a equipe possa analisá-la.
        </p>

        <form
          onSubmit={enviar}
          className="mt-8 space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Título</span>
            <input
              required
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Ex.: Não consigo acessar o Wi-Fi"
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-600"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-700">
              Categoria
            </span>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
            >
              <option>Acesso</option>
              <option>Infraestrutura</option>
              <option>Sistema acadêmico</option>
              <option>Outro</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-700">
              Prioridade
            </span>
            <select
              value={prioridade}
              onChange={(e) =>
                setPrioridade(e.target.value as 'baixa' | 'media' | 'alta')
              }
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
            >
              <option value="baixa">Baixa</option>
              <option value="media">Média</option>
              <option value="alta">Alta</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-700">
              Descrição
            </span>
            <textarea
              required
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              rows={5}
              placeholder="Explique o problema com o máximo de detalhes possível."
              className="mt-2 w-full resize-none rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-600"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-brand px-4 py-3 font-semibold text-white hover:bg-brand-dark"
          >
            Enviar chamado
          </button>
        </form>
      </main>
    </>
  );
}
