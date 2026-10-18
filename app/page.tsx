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
          <div className="flex h-[50%] w-[65%] items-center justify-center bg-black text-4xl font-semibold">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center justify-center gap-4">
                <span className="block w-20 shrink-0 border-b-4 border-white" />
                <h1 className="leading-none whitespace-nowrap">PORTOFOLIO</h1>
                <span className="block w-20 shrink-0 border-b-4 border-white" />
              </div>
              <p className="text-[10px]">ADIF HALIM ALAMSYAH</p>
            </div>
          </div>

          <nav className="mt-6">
            <ul className="flex items-center justify-center gap-10">
              <Link
                className="flex size-12 items-center justify-center rounded-full bg-white"
                href=""
              >
                <FontAwesomeIcon
                  className="text-black"
                  icon={faGithub}
                  size="2xl"
                />
              </Link>

              <Link
                className="flex size-12 items-center justify-center rounded-full bg-white"
                href=""
              >
                <FontAwesomeIcon
                  className="text-black"
                  icon={faInstagram}
                  size="2xl"
                />
              </Link>

              <Link
                className="flex size-12 items-center justify-center rounded-full bg-white"
                href=""
              >
                <FontAwesomeIcon
                  className="text-black"
                  icon={faLinkedin}
                  size="2xl"
                />
              </Link>

              <Link
                className="flex size-12 items-center justify-center rounded-full bg-white"
                href=""
              >
                <FontAwesomeIcon
                  className="text-black"
                  icon={faEnvelope}
                  size="2xl"
                />
              </Link>
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
