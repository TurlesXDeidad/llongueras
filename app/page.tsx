import Image from "next/image"

import { ThemeSwitch } from "@/components/theme-switch"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main className="w-screen overflow-x-hidden bg-background">
      <header className="sticky top-0 z-20 mb-[-50px]">
        <div className="mx-auto flex h-[50px] w-full max-w-[1200px] items-center justify-between bg-background/80 px-4 text-foreground backdrop-blur-md md:px-6">
          <div className="flex flex-1 justify-start">
            <span className="text-sm font-medium uppercase tracking-[0.25em]">
              Llonguer
            </span>
          </div>

          <nav className="flex flex-1 items-center justify-center gap-6 text-sm text-foreground/85">
            <a href="#" className="transition hover:text-foreground">
              Home
            </a>
            <a href="#" className="transition hover:text-foreground">
              Collection
            </a>
            <a href="#" className="transition hover:text-foreground">
              Contact
            </a>
          </nav>

          <div className="flex flex-1 items-center justify-end gap-3">
            <Button className="h-9 rounded-full px-5">Reservar</Button>
            <ThemeSwitch />
          </div>
        </div>
      </header>

      <section className="relative h-screen w-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/pose.webm" type="video/webm" />
        </video>

        <div className="absolute inset-0 bg-[#0a0a0a]/15" />

        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-4 pb-10 md:grid-cols-5 md:px-6 md:pb-14">
            <div className="text-foreground md:col-span-3">
              <p className="text-sm uppercase tracking-[0.35em] text-foreground/70">
                Llonguer
              </p>
              <h1 className="mt-4 text-4xl leading-[1em] font-semibold tracking-[-0.05em] md:text-[8.8rem]">
                Lorem ipsum dolor sit amet
              </h1>
              <hr className="my-[20px] border-0 border-t-[0.5px] border-foreground/80" />
              <p className="max-w-2xl text-base leading-7 font-extralight uppercase text-foreground/80 md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="flex h-full items-end md:items-center">
                <div className="flex max-h-[500px] min-h-[280px] w-full items-center justify-center rounded-[2rem] border border-foreground/10 bg-background/85 p-8 text-center text-foreground backdrop-blur-sm md:min-h-[500px] md:p-12">
                  <div className="max-w-sm">
                    <p className="text-sm uppercase tracking-[0.3em] text-foreground/60">
                      Hero Card
                    </p>
                    <h2 className="mt-4 font-[family:var(--font-serif)] text-3xl font-semibold tracking-tight md:text-5xl">
                      Lorem ipsum
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-foreground/75 md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="2fotos" className="relative w-full bg-background">
        <div className="grid w-full grid-cols-1 md:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden">
            <Image
              src="/img/china.webp"
              alt="Imagen izquierda"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="relative min-h-[420px] overflow-hidden">
            <Image
              src="/img/japon.webp"
              alt="Imagen derecha"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        <div className="absolute inset-0 z-10">
          <div className="mx-auto grid h-full w-full max-w-[1200px] grid-cols-1 px-4 md:grid-cols-2 md:px-6">
            <div className="flex items-center py-10">
              <div className="max-w-md text-left text-foreground">
                <h2 className="font-[family:var(--font-serif)] text-3xl font-semibold tracking-tight md:text-5xl">
                  Lorem ipsum
                </h2>
                <p className="mt-4 text-sm leading-7 text-foreground/85 md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button className="mt-6 rounded-full border border-foreground/30 bg-background/10 px-5 text-foreground transition hover:bg-foreground hover:text-background">
                  Descubrir
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-start py-10 md:justify-end">
              <div className="max-w-md text-left text-foreground">
                <h2 className="font-[family:var(--font-serif)] text-3xl font-semibold tracking-tight md:text-5xl">
                  Lorem ipsum
                </h2>
                <p className="mt-4 text-sm leading-7 text-foreground/85 md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button className="mt-6 rounded-full border border-foreground/30 bg-background/10 px-5 text-foreground transition hover:bg-foreground hover:text-background">
                  Descubrir
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
