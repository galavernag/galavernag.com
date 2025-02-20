import Link from "next/link";
import {
  FaCloudDownloadAlt,
  FaGithub,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiGit,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function PtBrPage() {
  const year = new Date().getFullYear();

  return (
    <main className="max-w-4xl mt-5 md:mx-auto px-5">
      <header className="flex flex-col md:flex-row items-center justify-between space-y-3">
        <span className="font-medium">
          [<span className="mx-0.5 font-normal">GG</span>]
        </span>

        <div className="space-x-3 font-light">
          <Link href="/">INÍCIO</Link>
          <span>{"//"}</span>
          <Link href="#sobre-mim">SOBRE_MIM</Link>
          <span>{"//"}</span>
          <Link href="#projetos">PROJETOS</Link>
        </div>

        <div>
          <Link href="/" className="text-sm">
            EN-US
          </Link>
        </div>
      </header>

      <section className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 items-center gap-12 md:mt-32 mt-20">
        <div className="space-y-6">
          <div className="w-min">
            <h2 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white  text-white/25 font-bold text-sm">
              Olá, Mundo ✨
            </h2>
          </div>
          <h2 className="text-3xl">Olá, sou Guilherme Galaverna</h2>
          <p className="text-justify block">
            Bem-vindo ao meu portifólio. Aqui você encontrará tudo sobre mim e
            meus projetos pessoas onde eu pratiquei todo conhecimento que vim
            acumulando sobre desenvolvimento Front-end e Back-end com Node.js,
            React.js, Next.js, TypeScript e etc.
          </p>
          <span className="text-sm mt-3 block">TECNOLOGIAS</span>
          <ul className="flex items-center gap-2">
            <li>
              <FaReact size={24} />
            </li>
            <li>
              <RiNextjsFill size={24} />
            </li>
            <li>
              <SiJavascript size={24} />
            </li>
            <li>
              <SiTypescript size={24} />
            </li>
            <li>
              <SiTailwindcss size={24} />
            </li>
            <li>
              <SiGit size={24} />
            </li>
          </ul>
          <footer className="space-x-3 text-black flex">
            <a
              href="https://github.com/galavernag.com"
              className="bg-white p-1.5 rounded-md flex gap-2 font-medium"
            >
              <FaGithub color="black" size={20} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/galavernag/"
              className="bg-white p-1.5 rounded-md flex gap-2 font-medium"
            >
              <FaLinkedin color="black" size={20} />
              LinkedIn
            </a>

            <a
              href="/Guilherme Galaverna - Currículo.pdf"
              className="bg-white p-1.5 rounded-md flex gap-2 font-medium"
            >
              <FaCloudDownloadAlt color="black" size={20} />
              CV
            </a>
          </footer>
        </div>
        <img
          className="h-auto"
          src="https://github.com/galavernag.png"
          alt=""
        />
      </section>

      <section id="sobre-mim" className="mt-24">
        <h2 className="text-3xl">#SOBRE_MIM</h2>

        <div className="space-y-6 mt-3">
          <h3 className="text-lg uppercase">
            <strong>#O_começo</strong>
          </h3>
          <p>
            Eu começei a pesquisar sobre desenvolvimento de software quando
            tinha 12 anos. Minha primeira "linguagem de programação" foi Batch
            Script, no Windows, onde eu escrevia pequenos programas de terminal.
            Foi nesse período que eu começei a ter mais interesse por
            desenvolvimento. Desde então eu venho pesquisando, estudando e
            aplicando cada conhecimento que aprendo dia a após dia
          </p>

          <h3 className="text-lg uppercase">
            <strong>#O_primeiro_código</strong>
          </h3>
          <p>
            Depois de muitas pesquisas. Me decidi que para começar iria pelo
            desenvolvimento Front-end, especificamente com React.js. Desde então
            venho me dedicando a essa área mas sempre aprendendo mais sobre
            Back-end (atualmente o que eu mais gosto)
          </p>
        </div>
      </section>

      <section id="projetos" className="mt-16">
        <h2 className="text-3xl">#TOP_3_PROJETOS</h2>

        <div className="grid grid-cols-1 gap-3 mt-5">
          <div>
            <h2 className="text-lg mb-2">
              <a
                href="https://github.com/galavernag/cognito"
                className="text-teal-500"
              >
                Cognito, 2022
              </a>
            </h2>
            <div className="ml-3">
              <span className="text-sm">
                Cognito é uma PoC de um SaaS que tem como objetivo facilitar o
                processo de auditoria de notas em avaliações escolares. Com uma
                interface intuitiva, o app simplifica o processo de dar notas
                mais fácil, rápido e auditável
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-lg mb-2">
              <a
                href="https://github.com/galavernag/letmeask"
                className="text-teal-500"
              >
                Letmeask, 2021
              </a>
            </h2>
            <div className="ml-3">
              <span className="text-sm">
                Letmeask é um serviço de perguntas e respostas voltada para
                criadores de conteúdos, permitindo que audiência envie perguntas
                com um sistema de ranking baseado em likes em tempo-real.
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-lg mb-2">
              <a
                href="https://github.com/galavernag/quickcite"
                className="text-teal-500"
              >
                QuickCite, 2023
              </a>
            </h2>
            <div className="ml-3">
              <span className="text-sm">
                QuickCite é um SaaS que utiliza de Inteligência Artificial para
                gerar citações academicas. O serviço gera citações nos mais
                diversos tipos e envia-os diretamente por e-mail, facilitando o
                processo de citação e pesquisas de estudantes e profissionais.
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex items-center justify-center py-12 text-sm text-neutral-800 gap-3">
        <span>Todos os direitos reservados</span>
        <span>·</span>
        <span>{year}</span>
        <span>·</span>
        <span>Guilherme Galaverna</span>
      </footer>
    </main>
  );
}
