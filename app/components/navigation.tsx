import { IoLogoGithub } from 'react-icons/io5'


export default function Navigation() 
{
  return (
      <section className="mx-auto flex w-full max-w-6xl flex-col px-6 py-8 sm:px-10 lg:px-12">

      <body className="min-h-full flex flex-col">
                <nav className="flex items-center justify-between border-b border-[#223042] pb-5 text-sm">
          <a className="transition hover:text-[#eef4f8]" href="/">
              Marquise
          </a>
          <div className="flex gap-5 text-[#9aa8b5]">
            <a className="transition hover:text-[#eef4f8]" href="/projects">
              Projects
            </a>
            <a
              className="transition hover:text-white"
              href="https://github.com/mfloyd0/mfloyd0-homepage"
              target="_blank"
              rel="noreferrer"
            >
                <span style={{ display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle', margin: '0 4px' }}>
                <IoLogoGithub size={20} style={{ marginRight: '4px' }} />
                  Source
                </span>
              
            </a>
          </div>
        </nav>
      </body>
        </section>
  );
}
