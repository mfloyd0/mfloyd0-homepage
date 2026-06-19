import Link from "next/link";
import Image from "next/image";
import '@/app/globals.css'

const features = [
  "Collected monthly income and expense data from a simple set of inputs.",
  "Calculated totals for categories like bills, savings, food, and personal spending.",
  "Exported the final budget report into an Excel workbook for easy sharing.",
  "Formatted the spreadsheet so the report was readable without extra manual cleanup.",
];


const tech = ["Python", "Automation", "MySQL", "Selenium"];

export default function FinanceReportProgramPage() {
  return (
    <main className="min-h-screen bg-[#070b12] text-[#eef4f8]">
      <section className="mx-auto w-full max-w-5xl px-6 py-10 sm:px-10 lg:px-12">
        <Link
          href="/projects"
          className="inline-flex text-sm font-medium text-[#c084fc] transition hover:text-[#d8b4fe]"
        >
          Back to projects
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c084fc]">
              Project Summary
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Item Availability Text Alert Program
            </h1>
          </div>

          <aside className="border border-[#223042] bg-[#101827] p-6">
            <div>
            <h2 className="text-3xl font-bold">Technologies Used</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {tech.map((item) => (
                <span
                  key={item}
                  className="rounded-sm bg-[#2e1065] px-3 py-1 text-sm text-[#e9d5ff]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          </aside>
        </div>

        <section className="mt-14 grid gap-6 ">
          <article className="border border-[#223042] bg-[#101827] p-6">
            <h2 className="text-2xl font-semibold">Summery</h2>
            <p className="mt-4 leading-7 text-[#bac6d3]">
              This program checks sites like BestBuy and Target for item availability. If available, then you will be notified by text. 
              The links for the items will be queried through MySQL, that way you can add as many links as you like. 
              The phone number to text is also a field in the database, that way if a friend wants to be alerted about an item you can do that.
                <br/>
              This is just the first version since I plan to configure it to more sites like Amazon, Walmart and Newegg. 
              Target and BestBuy were just my test sites to get it up and running and learn how to find elements on a webpage.
            </p>
          </article>

        </section>

        

        <section >
          <div>
            <a
              className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-[#c084fc] px-5 font-medium text-[#071014] transition hover:bg-[#d8b4fe]"
              href="https://github.com/mfloyd0/Item-Availability-and-Text-Alert-"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub Project
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
