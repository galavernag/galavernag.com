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

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="max-w-4xl mt-5 md:mx-auto px-5">
      <header className="flex flex-col md:flex-row items-center justify-between space-y-3">
        <span className="font-medium">
          [<span className="mx-0.5 font-normal">GG</span>]
        </span>

        <div className="space-x-3 font-light">
          <Link href="/">HOME</Link>
          <span>{"//"}</span>
          <Link href="#sobre-mim">ABOUT_ME</Link>
          <span>{"//"}</span>
          <Link href="#projetos">PROJECTS</Link>
        </div>
      </header>

      <section className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 items-center gap-12 md:mt-32 mt-20">
        <div className="space-y-6">
          <div className="w-min">
            <h2 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white  text-white/25 font-bold text-sm">
              Hello World ✨
            </h2>
          </div>
          <h2 className="text-3xl">Hi, I'm Guilherme Galaverna</h2>
          <p className="text-justify block">
            Welcome to my portfolio. Here you can find about my personal
            projects where I praticated all of my knowledge in Front-end and
            Back-end development with React.js, Next.js, TypeScript, JavaScript
            and more.
          </p>
          <span className="text-sm mt-3 block">TECHS</span>
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
              href="/Guilherme_Galaverna_Curriculo.pdf"
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
        <h2 className="text-3xl">#ABOUT_ME</h2>

        <div className="space-y-6 mt-3">
          <h3 className="text-lg uppercase">
            <strong>#The_beginning</strong>
          </h3>
          <p>
            I started researching software development when I was 12 years old.
            I used to write some Batch Script codes on Windows. It was at that
            time that I started to get more interested in development. So I
            started researching software development and started consuming
            everything I could find about it.
          </p>

          <h3 className="text-lg uppercase">
            <strong>#the_first_code</strong>
          </h3>
          <p>
            After a lot of research, I decided that I would go with Front-end
            development, specifically with React.js. Since then I have been
            improving myself more and more every day.
          </p>
        </div>
      </section>

      <section id="projetos" className="mt-16">
        <h2 className="text-3xl">#TOP_3_PROJECTS</h2>

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
                Cognito is a SaaS proof of concept designed to streamline the
                grading process for teachers. With an intuitive web interface,
                it simplifies student assessment management, making it faster,
                more reliable, and fully auditable.
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
                Letmeask is a Q&A service designed for content creators,
                allowing their audience to submit and upvote questions in
                real-time. This ensures that the most relevant topics gain
                visibility, fostering better engagement during live sessions.
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
                QuickCite is an AI-driven SaaS designed to simplify academic
                referencing. It generates citations in all major formats and
                delivers them directly via email, streamlining the research and
                writing process for students and professionals.
              </span>
            </div>
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
