import SS1 from "@/assets/screenshots/SS1.png"
import Logo from "@/assets/tsb_logo_2.svg"

export function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />
      <img
        src={SS1}
        alt="The Sky Blessing"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white">
        <div className="mb-4">
          <img
            src={Logo}
            alt="The Sky Blessing"
            className="mx-auto max-w-[700px] w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
