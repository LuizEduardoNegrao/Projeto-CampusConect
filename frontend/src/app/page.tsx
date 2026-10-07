import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-2xl bg-brand p-8 text-white shadow-sm">
          <p className="mb-2 text-sm font-medium text-slate-300">
            Portal de suporte acadêmico
          </p>
          <h2 className="text-3xl font-bold">Bem-vindo ao CampusConnect</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Abra chamados, acompanhe o andamento das solicitações e consulte o
            histórico de atendimento.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Link
            href="/novo-chamado"
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-400 hover:shadow"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              Abrir novo chamado
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Descreva seu problema e envie uma solicitação de suporte.
            </p>
          </Link>
          <Link
            href="/meus-chamados"
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-400 hover:shadow"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              Meus chamados
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Acompanhe os chamados já enviados e seus respectivos status.
            </p>
          </Link>
        </div>
      </main>
    </>
  );
}
