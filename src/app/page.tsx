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

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="max-w-4xl mt-5 md:mx-auto">
      <header className="flex items-center justify-between">
        <span className="font-medium">
          [<span className="mx-0.5 font-normal">GG</span>]
        </span>

        <div className="space-x-3 font-light">
          <a href="/">INÍCIO</a>
          <span>//</span>
          <a href="#sobre-mim">SOBRE_MIM</a>
          <span>//</span>
          <a href="#projetos">PROJETOS</a>
        </div>
      </header>

      <section className="grid grid-cols-2 items-center gap-12 mt-32">
        <div className="space-y-6">
          <h2 className="text-3xl">Olá, sou Guilherme Galaverna</h2>
          <p className="text-justify block">
            Bem-vindo ao meu portifólio. Aqui você pode encontrar meus projetos
            onde pratiquei todo conhecimento de desenvolvimento Front-End com
            React.js/Next.js com TypeScript, Tailwind
          </p>
          <span className="text-sm mt-3">TECNOLOGIAS</span>
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
              href=""
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            ducimus eum obcaecati quae odit nesciunt temporibus facere totam
            reprehenderit voluptates numquam molestias. Nesciunt possimus,
            asperiores quo rerum repudiandae aperiam deleniti?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            ducimus eum obcaecati quae odit nesciunt temporibus facere totam
            reprehenderit voluptates numquam molestias. Nesciunt possimus,
            asperiores quo rerum repudiandae aperiam deleniti?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            ducimus eum obcaecati quae odit nesciunt temporibus facere totam
            reprehenderit voluptates numquam molestias. Nesciunt possimus,
            asperiores quo rerum repudiandae aperiam deleniti?
          </p>
        </div>
      </section>

      <section id="projetos" className="mt-24">
        <h2 className="text-3xl">#PROJETOS</h2>

        <div className="grid grid-cols-3 gap-3 mt-5">
          <div>
            <img src="https://placehold.co/300x200/000000/FFFFFF/png" alt="" />
          </div>
          <div>
            <img src="https://placehold.co/300x200/000000/FFFFFF/png" alt="" />
          </div>
          <div>
            <img src="https://placehold.co/300x200/000000/FFFFFF/png" alt="" />
          </div>
          <div>
            <img src="https://placehold.co/300x200/000000/FFFFFF/png" alt="" />
          </div>
          <div>
            <img src="https://placehold.co/300x200/000000/FFFFFF/png" alt="" />
          </div>
          <div>
            <img src="https://placehold.co/300x200/000000/FFFFFF/png" alt="" />
          </div>
          <div>
            <img src="https://placehold.co/300x200/000000/FFFFFF/png" alt="" />
          </div>
          <div>
            <img src="https://placehold.co/300x200/000000/FFFFFF/png" alt="" />
          </div>
          <div>
            <img src="https://placehold.co/300x200/000000/FFFFFF/png" alt="" />
          </div>
        </div>
      </section>

      <footer className="flex items-center justify-center py-12 text-sm text-neutral-800 gap-3">
        <span>Copyright</span>
        <span>·</span>
        <span>{year}</span>
        <span>·</span>
        <span>Guilherme Galaverna</span>
      </footer>
    </main>
  );
}
