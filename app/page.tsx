
  // import VoxelBot from './components/voxel-Bot'
  // import { ChakraProvider } from '@chakra-ui/react'
  // import { system } from "@chakra-ui/react/preset";

const skills = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "SQL",
  "Git",
  "Backend",
  "APIs",
  "C#",
  ".NET",
  "Software applications",
  "Excel",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b12] text-[#eef4f8]">
      <section className="mx-auto flex  w-full max-w-6xl flex-col px-6 py-8 sm:px-10 lg:px-12">


        <div className="grid flex-1 items-center g">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#c084fc]">
              Software Developer ( Programmer )
            </p>
            <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
              Developer Passionate About Software, Automation, and Innovation
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#bac6d3]">
              I am a skilled Software Developer with experience in developing and maintaining software 
              applications using languages like C#, Python, and SQL. I have experience writing 
              clean, efficient code and working on small-scale projects to develop my skills. 
              I am eager to learn and grow, continuously improving my coding abilities by exploring
               new technologies and best practices. Look out for future projects to be posted soon!
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="./projects"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#c084fc] px-6 font-medium text-[#071014] transition hover:bg-[#d8b4fe]"
              >
                View Projects
              </a>
              <a
                href="mailto:jordan.carter@example.com"
                className="inline-flex h-12 items-center justify-center rounded-md border border-[#334155] px-6 font-medium transition hover:border-[#c084fc] hover:text-[#c084fc]"
              >
                Email Me
              </a>
            </div>
          </div>

{/* put robot here */}

        </div>
      </section>

      

      <section
        id="skills"
        className="mx-auto grid max-w-6xl gap-12 px-6 py-15 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-12"
      >
        <div>
          <h2 className="mt-15 text-6xl text-center  font-bold">A bit of my skills and experience</h2>
        </div>

        <div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border border-[#334155] bg-[#101827] px-4 py-2 text-sm font-medium text-[#dbeafe]"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-10 border-l-2 border-[#c084fc] pl-6">
            <h3 className="mt-1 text-xl font-semibold">
              Programmer Analyst
            </h3>
            <p className="mt-3 leading-7 text-[#bac6d3]">
              I design, develop, and maintain web applications and backend systems that support daily government operations 
              and public services. My work involves building secure and scalable applications using modern web technologies, 
              developing APIs and database solutions, troubleshooting system issues, and improving existing software processes.
            </p>
          </div>
        </div>
      </section>


    </main>
  );
}
