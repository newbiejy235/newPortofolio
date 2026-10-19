import ShapeGrid from "@/components/ShapeGrid"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import {
  Bookmark,
  CircleUserRound,
  FolderOpen,
  Heart,
  Home,
  Image,
  MessageCircle,
  Send,
  Settings
} from "lucide-react"

import GithubActivity from "@/components/GithubActivity"
import PortfolioBackground from "@/components/PortfolioBackground"

export default function Page() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-[var(--page-background)] sm:px-6">
      <PortfolioBackground />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[720px] flex-col items-center justify-center gap-6 border bg-background px-3 py-6 min-[768px]:gap-10 min-[768px]:px-6 min-[768px]:py-10">
        <header className="relative aspect-[16/9] w-full max-w-[720px] p-3 min-[768px]:p-6 min-[769px]:p-8">
          <ShapeGrid
            shape="square"
            cellSize={45}
            lineWidth={0.5}
            speed={0.3}
            hoverFillColor="currentColor"
            lineColor="#ffffff"
            fade={0}
            dpr={1}
            style={{
              backgroundColor: "rgba(0,0,0,0.9)",
              borderRadius: "0 2.4rem 0 2.4rem",
              // border: "0.5px solid currentColor"
            }}
          />

          <section className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
            {/* Hero */}
            <div className="flex h-[45%] w-[90%] items-center justify-center bg-black font-semibold min-[768px]:w-[75%] min-[769px]:w-[65%]">
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="flex items-center justify-center gap-2 min-[768px]:gap-4">
                  <span className="block w-5 shrink-0 border-b-2 border-white min-[768px]:w-12 min-[768px]:border-b-4 min-[769px]:w-16" />
                  <h1 className="text-lg leading-none whitespace-nowrap text-white min-[768px]:text-3xl min-[769px]:text-4xl">
                    PORTOFOLIO
                  </h1>
                  <span className="block w-5 shrink-0 border-b-2 border-white min-[768px]:w-12 min-[768px]:border-b-4 min-[769px]:w-16" />
                </div>
                <p className="text-[10px] text-white">ADIF HALIM ALAMSYAH</p>
              </div>
            </div>

            <nav aria-label="Social media" className="mt-4">
              <ul className="flex items-center justify-center gap-4 min-[768px]:gap-8 min-[769px]:gap-10">
                <li>
                  <Link
                    aria-label="GitHub"
                    className="flex size-10 items-center justify-center rounded-full border border-foreground bg-white transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    href=""
                  >
                    <FontAwesomeIcon
                      className="text-2xl text-black"
                      icon={faGithub}
                    />
                  </Link>
                </li>

                <li>
                  <Link
                    aria-label="Instagram"
                    className="flex size-10 items-center justify-center rounded-full border border-foreground bg-white transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    href=""
                  >
                    <FontAwesomeIcon
                      className="text-2xl text-black"
                      icon={faInstagram}
                    />
                  </Link>
                </li>

                <li>
                  <Link
                    aria-label="LinkedIn"
                    className="flex size-10 items-center justify-center rounded-full border border-foreground bg-white transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    href=""
                  >
                    <FontAwesomeIcon
                      className="text-2xl text-black"
                      icon={faLinkedin}
                    />
                  </Link>
                </li>

                <li>
                  <Link
                    aria-label="Email"
                    className="flex size-10 items-center justify-center rounded-full border border-foreground bg-white transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    href=""
                  >
                    <FontAwesomeIcon
                      className="text-2xl text-black"
                      icon={faEnvelope}
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
        </header>

        {/* navbar */}
        <nav
          aria-label="Primary navigation"
          className="grid h-12 w-full max-w-[720px] grid-cols-4 rounded-br-3xl rounded-tl-3xl border border-foreground"
        >
          <Link
            href={""}
            aria-current="page"
            className="navbar-link navbar-link-active flex w-full items-center justify-center gap-2 text-foreground"
          >
            <Home aria-hidden="true" className="navbar-link-icon" />
            <span className="navbar-link-label font-jakarta text-sm font-bold">
              Home
            </span>
          </Link>

          <Link
            href={""}
            aria-label="Projects"
            className="navbar-link flex w-full items-center justify-center gap-2 text-foreground"
          >
            <FolderOpen aria-hidden="true" className="navbar-link-icon" />
          </Link>

          <Link
            href={""}
            aria-label="Gallery"
            className="navbar-link flex w-full items-center justify-center gap-2 text-foreground"
          >
            <Image aria-hidden="true" className="navbar-link-icon" />
          </Link>

          <Link
            href={""}
            className="flex w-full items-center justify-center gap-2 text-foreground hover:rotate-180 duration-500 transition-all"
          >
            <Settings aria-hidden="true" className="navbar-link-icon" />
          </Link>
        </nav>

        {/* About me */}

        <section
          aria-label="Portfolio preview"
          className="my-12 grid w-full max-w-[720px] grid-cols-1 items-start justify-center gap-6 min-[768px]:my-16 min-[769px]:my-28 min-[769px]:grid-cols-2 min-[769px]:gap-8"
        >
          <article className="mx-auto w-full max-w-[360px] border border-[#dedede] bg-[#f5f5f5] p-3 text-[#181818] shadow-sm dark:border-white/10 dark:bg-[#24232b] dark:text-[#f2f1f5] dark:shadow-xl dark:shadow-black/20">
            <header className="mb-3 flex items-center justify-between gap-2">
              <div className="flex min-w-0 items-center gap-2">
                <div className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#202020] via-[#6d7478] to-[#d4d4d4] text-[10px] font-bold text-white">
                  AA
                </div>
                <span className="truncate text-foreground text-[11px] font-bold">
                  @Adif-Portofolio
                </span>
              </div>
              <button className="rounded-full border border-[#1689dc] bg-white px-3 py-1 text-[9px] font-semibold text-[#1689dc] dark:border-[#66b8ff] dark:bg-[#182b3b] dark:text-[#8acbff]">
                Follow
              </button>
            </header>

            <div
              aria-label="Abstract grayscale portfolio artwork with blue accents"
              className="relative isolate aspect-square bg-gradient-to-br from-[#40DCFF] to-[#0040FF] p-[2px]"
            >
              <div className="relative size-full overflow-hidden">
                <img
                  className="absolute inset-0 size-full object-cover"
                  src="/images/image 26.png"
                  alt="Portfolio artwork"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 py-3">
              <Heart className="size-4 text-[#f04444]" />
              <MessageCircle className="size-4" />
              <Send className="size-4" />
              <Bookmark className="ml-auto size-4" />
            </div>
            <p className="truncate text-[10px]">
              <span className="font-bold">adif</span> portofolio gw nih boss....
            </p>
          </article>

          <aside className="mx-auto flex min-h-[360px] w-full max-w-[360px] flex-col justify-center space-y-8 font-jakarta dark:rounded-2xl p-6">
            <h1 className="w-52 border-b border-foreground text-2xl">
              Turning Ideas <br /> Into{" "}
              <span className="font-bold text-[#9880F5]">Digital Reality</span>
            </h1>
            <p className="max-w-72 text-left text-sm dark:text-[#c5c2ce]">
              Saya adalah seorang pelajar di bidang RPL yang berfokus pada{" "}
              <br /> <br /> pengembangan web dan mobile. Saya suka belajar hal
              baru, terutama tentang pemrograman, teknologi, dan dunia digital.
            </p>
          </aside>
        </section>
        <GithubActivity />
      </div>
    </main>
  )
}
