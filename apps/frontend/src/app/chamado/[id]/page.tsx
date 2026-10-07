'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { Chamado, getChamados } from '@/lib/chamados';

const statusLabel = {
  aberto: 'Aberto',
  em_andamento: 'Em análise',
  resolvido: 'Resolvido',
};
const prioridadeLabel = { baixa: 'Baixa', media: 'Média', alta: 'Alta' };

export default function ChamadoPage() {
  const params = useParams<{ id: string }>();
  const [chamado, setChamado] = useState<Chamado | null>(null);

  useEffect(() => {
    const encontrado = getChamados().find((item) => item.id === params.id);
    setChamado(encontrado ?? null);
  }, [params.id]);

  if (!chamado) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-2xl px-6 py-12">
          <h1 className="text-2xl font-bold">Chamado não encontrado</h1>
          <Link
            href="/meus-chamados%20(aluno)"
            className="mt-4 inline-block text-sm underline"
          >
            Voltar para meus chamados
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-10">
        <Link
          href="/meus-chamados%20(aluno)"
          className="text-sm text-slate-600 hover:underline"
        >
          ← Meus chamados
        </Link>
        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                {chamado.id} · {chamado.categoria}
              </p>
              <h1 className="mt-2 text-2xl font-bold text-slate-900">
                {chamado.titulo}
              </h1>
            </div>
            <span className="h-fit rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
              {statusLabel[chamado.status]}
            </span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-xs text-slate-500">Prioridade</p>
              <p className="mt-1 font-semibold">
                {prioridadeLabel[chamado.prioridade]}
              </p>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-xs text-slate-500">Criado em</p>
              <p className="mt-1 font-semibold">
                {new Date(chamado.criadoEm).toLocaleString('pt-BR')}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="font-semibold text-slate-900">Descrição</h2>
            <p className="mt-2 whitespace-pre-wrap text-slate-600">
              {chamado.descricao}
            </p>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <h2 className="font-semibold text-slate-900">Acompanhamento</h2>
            <div className="mt-4 flex items-center gap-3 text-sm">
              <span className="h-3 w-3 rounded-full bg-slate-800" />
              <span>Chamado registrado e aguardando atendimento.</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
