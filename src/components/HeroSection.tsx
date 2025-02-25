import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-16 bg-[rgb(0, 0, 0)]">
      {/* Header */}
      <div className="bg-opacity-10 border border-purple-300/20 backdrop-blur-lg rounded-lg px-2 py-1">
        <p className="text-md bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent">
          ALL IN ONE - WEB3 FRAMER TEMPLATE
        </p>
      </div>
      <div className="bg-opacity-10 backdrop-blur-lg rounded-lg px-2 py-1">
        <p className="mt-6 text-4xl font-bold leading-tight text-white">
        Promote your Web3 Startup
        </p>
        <p className="text-4xl font-bold leading-tight text-white">
        with Cryptox Framer Template
        </p>
        <div className="mt-8">
  <Link
    href="https://ckurt.lemonsqueezy.com/buy/8fa1f143-8036-49b3-bcb8-9a296ef37d87"
    target="_blank"
    rel="noopener"
    className="px-6 py-3 bg-teal-400 text-black font-semibold rounded-xl shadow-lg border border-white/10 transition duration-300 hover:bg-teal-300 hover:shadow-xl hover:shadow-teal-500/50"
  >
    Get Started
  </Link>
</div>


      </div>

      {/* Title */}
      {/* <h1 className="mt-6 text-4xl font-bold leading-tight text-white">
        Promote your Web3 Startup
      </h1>
      <h1 className="text-4xl font-bold leading-tight text-white">
        with Cryptox Framer Template
      </h1> */}

      {/* Button */}
      {/* <div className="mt-8">
        <Link
          href="https://ckurt.lemonsqueezy.com/buy/8fa1f143-8036-49b3-bcb8-9a296ef37d87"
          target="_blank"
          rel="noopener"
          className="px-6 py-3 bg-teal-400 text-black font-semibold rounded-xl shadow-lg hover:bg-teal-300 transition"
        >
          Get Started
        </Link>
      </div> */}
    </div>
  );
}
