import ShapeGrid from "@/components/ShapeGrid"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import {
  Bookmark,
  CircleUserRound,
  FolderOpen,
  Heart,
  Home,
  Image,
  MessageCircle,
  Send,
} from "lucide-react"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 overflow-x-hidden  px-[7.5vw] py-10">
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

      {/* About me */}

      <section
        aria-label="Portfolio preview"
        className="grid w-full max-w-[760px] grid-cols-1 items-start justify-center gap-6 sm:grid-cols-2 lg:gap-8"
      >
        <article className="mx-auto w-full max-w-[360px] border border-[#dedede] bg-[#f5f5f5] p-3 text-[#181818] shadow-sm">
          <header className="mb-3 flex items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-2">
              <div className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#202020] via-[#6d7478] to-[#d4d4d4] text-[10px] font-bold text-white">
                AA
              </div>
              <span className="truncate text-[11px] font-bold">@Adif-Portofolio</span>
            </div>
            <button className="rounded-full border border-[#1689dc] bg-white px-3 py-1 text-[9px] font-semibold text-[#1689dc]">
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

        <aside className="mx-auto flex min-h-[360px] w-full max-w-[360px] flex-col rounded-[26px] border border-[#aaa] bg-gradient-to-b from-[#f4f4f4] to-[#ededed] p-4 text-[#171717] shadow-sm sm:min-h-[420px]">
          <div className="space-y-4">
            <article className="rounded-xl border border-[#dedbd6] bg-gradient-to-br from-white to-[#fffefa] p-3">
              <h2 className="mb-2 flex items-center gap-1 text-xs font-semibold">
                <CircleUserRound className="size-3.5" />
                @Profile
              </h2>
              <p className="pl-5 text-[11px] leading-relaxed text-[#555]">
                Halo, saya adif halim alamsyah.
               <br />
                Saya seorang web dev
              </p>
            </article>

            <article className="rounded-xl border border-[#dedbd6] bg-gradient-to-br from-white to-[#fffefa] p-3">
              <h2 className="mb-2 flex items-center gap-1 text-xs font-semibold">
                <CircleUserRound className="size-3.5" />
                @About
              </h2>
              <p className="pl-5 text-[11px] leading-relaxed text-[#555]">
                Lorem ipsum dolor sit
                <br />
                amet
              </p>
            </article>
          </div>

          <div className="mt-auto flex items-center gap-2 pt-6" >
            <div className="grid size-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#202020] via-[#6d7478] to-[#d4d4d4] text-[9px] font-bold text-white">
              AA
            </div>
            <input
              aria-label="Message"
              className="h-7 min-w-0 flex-1 rounded-full bg-[#d8d8d8] px-3 text-[10px] outline-none placeholder:text-[#777] focus:ring-1 focus:ring-[#999]"
              placeholder="Pesan..."
            />
            <button aria-label="Send message" className="grid size-7 shrink-0 place-items-center" type="submit">
              <Send className="size-4" />
            </button>
          </div>
        </aside>
      </section>
    </main>
  )
}
