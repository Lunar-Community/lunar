export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Main Content */}
      <div className="container max-w-6xl mx-auto text-center z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Main Title */}
        <h1 className="text-8xl md:text-9xl font-bold tracking-tight mb-8">
          <span className="bg-gradient-to-l from-white via-gray-400 to-black bg-clip-text text-transparent animate-gradient-spiral bg-[length:200%_200%]">
            LUNAR
          </span>
        </h1>

        {/* Statistics Section */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-16">
          <div className="text-center">
            <div className="text-white text-sm mb-1">Total Users:</div>
            <div className="text-white text-2xl font-bold">TBD</div>
          </div>
          <div className="text-center">
            <div className="text-white text-sm mb-1">Total Groups:</div>
            <div className="text-white text-2xl font-bold">TBD</div>
          </div>
        </div>
      </div>
    </section>
  );
};
