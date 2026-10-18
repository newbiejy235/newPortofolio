import ShapeGrid from "@/components/ShapeGrid"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faMailchimp,
} from "@fortawesome/free-brands-svg-icons"
import { Home, FolderOpen, Image } from "lucide-react"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 overflow-x-hidden bg-[#fdfcf7] px-[7.5vw] py-10">
      <header className="relative aspect-[16/9] w-full max-w-[1200px]">
        <ShapeGrid
          shape="square"
          cellSize={45}
          lineWidth={0.5}
          speed={0.3}
          hoverFillColor="#000000"
          lineColor="#ffffff"
          fade={0}
          dpr={1}
          className="h-full w-full"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            borderRadius: "0 2.4rem 0 2.4rem",
          }}
        />

        <section className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
          {/* Hero */}
          <div className="flex  h-[50%] w-[65%] items-center justify-center bg-black text-4xl font-semibold">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center justify-center gap-2 md:gap-4">
                <span className="block w-10 lg:w-20 shrink-0 border-b-4 border-white" />
                <h1 className="leading-none whitespace-nowrap text-2xl md:text-4xl lg:text-5xl">PORTOFOLIO</h1>
                <span className="block w-10 lg:w-20 shrink-0 border-b-4 border-white" />
              </div>
              <p className="text-[10px]">ADIF HALIM ALAMSYAH</p>
            </div>
          </div>

          <nav aria-label="Social media" className="mt-4 md:mt-6 lg:mt-10">
            <ul className="flex items-center justify-center gap-5 md:gap-8 lg:gap-10">
              <li>
                <Link
                  aria-label="GitHub"
                  className="flex size-10 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:size-12 lg:size-14"
                  href=""
                >
                  <FontAwesomeIcon className="text-2xl lg:text-3xl text-black" icon={faGithub} />
                </Link>
              </li>

              <li>
                <Link
                  aria-label="Instagram"
                  className="flex size-10 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:size-12 lg:size-14"
                  href=""
                >
                  <FontAwesomeIcon className="text-2xl lg:text-3xl text-black " icon={faInstagram} />
                </Link>
              </li>

              <li>
                <Link
                  aria-label="LinkedIn"
                  className="flex size-10 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:size-12 lg:size-14"
                  href=""
                >
                  <FontAwesomeIcon className="text-2xl lg:text-3xl text-black " icon={faLinkedin} />
                </Link>
              </li>

              <li>
                <Link
                  aria-label="Email"
                  className="flex size-10 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:size-12 lg:size-14"
                  href=""
                >
                  <FontAwesomeIcon className="text-2xl lg:text-3xl text-black " icon={faEnvelope} />
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>

      <nav className="flex h-20 lg:h-28 w-screen items-center justify-center gap-10 md:gap-20 bg-[#1C1C1C]">
        <Link
          href={""}
          className="navbar-link group flex lg:flex-col items-center justify-center gap-2 text-white"
        >
          <Home />
          <span className="navbar-link-label font-jakarta border-b text-sm font-bold">
            Home
          </span>
        </Link>

        <Link
          href={""}
          className="navbar-link group flex lg:flex-col items-center justify-center gap-2 text-white"
        >
          <FolderOpen/>
          <span className="navbar-link-label font-jakarta border-b text-sm font-bold">
            Project
          </span>
        </Link>

        <Link
          href={""}
          className="navbar-link group flex lg:flex-col items-center justify-center gap-2 text-white"
        >
          <Image/>
          <span className="navbar-link-label font-jakarta border-b text-sm font-bold">
            Gallery
          </span>
        </Link>
      </nav>
    </main>
  )
}
