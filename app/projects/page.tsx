import Link from "next/link";
import thumbExcel from '../public/images/projects/Excel_Python1.jpg'
import thumbPythonSelenium from '../public/images/projects/Web-scraping-with-Selenium--Python.png'
import Image from "next/image";


const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js and TypeScript to highlight software projects, skills, and contact links.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    git: "https://github.com/mfloyd0/mfloyd0-homepage",
    sum: "none",
    img: '/bot.png'
  },
  {
    title: "Finance Report Program",
    description:
      "Python Program that exports an excel budget sheet",
    tech: ["Python", "Excel"],
    git: "https://github.com/mfloyd0/Finance-Report",
    sum: '/projects/finace-report-program',
    img: '/images/projects/pythonExel.png'
  },
  {
    title: "Item Availability Text Alert Program",
    description:
      "Simple python program that checks a website like target and sends a text if the item is Available to purchase.",
    tech: ["Python", "Automation", "MySQL", "Selenium"],
    git: "https://github.com/mfloyd0/Item-Availability-and-Text-Alert-",
    sum: "/projects/item-availability-text",
    img: '/images/projects/selenium_with-python.jpg'
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#070b12] text-[#eef4f8]">
      <section className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Projects and links
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#bac6d3]">
            Here are a some project I've worked that I would like to showcase. Each one includes the main
            technologies used and a github link where you can see my code.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-72 flex-col justify-between border border-[#223042] bg-[#101827] p-6"
            >
              <div>
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="mt-4 leading-7 text-[#bac6d3]">
                  {project.description}
                  <Image
                    src= {project.img}
                    alt="Vercel logomark"
                    width={300}
                    height={100}
                  />
                </p>
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-sm bg-[#2e1065] px-3 py-1 text-sm text-[#e9d5ff]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col">
                <a
                  className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-[#c084fc] px-5 font-medium text-[#071014] transition hover:bg-[#d8b4fe]"
                  href={project.git}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project GitHub
                </a>
                {
                  project.sum !=="none" && 
                        <a
                          className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-[#c084fc] px-6 font-medium text-[#071014] transition hover:bg-[#d8b4fe]"
                          href={project.sum}
                          rel="noreferrer">
                           View Summary
                        </a>
                } 
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
