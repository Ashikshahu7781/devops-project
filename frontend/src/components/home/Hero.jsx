import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <span className="inline-block px-4 py-2 rounded-full bg-[#556B2F]/10 text-[#556B2F] font-medium">
          🏆 Modern Tournament Platform
        </span>

        <h1 className="mt-8 text-6xl font-extrabold leading-tight text-slate-900">
          Organize Every
          <span className="text-[#556B2F]"> Tournament </span>
          Like a Professional
        </h1>

        <p className="mt-8 text-xl text-slate-600 max-w-2xl">
          Create tournaments, manage teams, schedule fixtures,
          monitor standings, and publish results from one
          centralized platform.
        </p>

        <div className="mt-10 flex gap-5">

          <button className="flex items-center gap-2 bg-[#556B2F] hover:bg-[#445624] transition text-white px-8 py-4 rounded-xl font-semibold">
            Create Tournament
            <ArrowRight size={20} />
          </button>

          <button className="border-2 border-[#556B2F] text-[#556B2F] px-8 py-4 rounded-xl font-semibold hover:bg-[#556B2F] hover:text-white transition">
            Explore
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;