import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/memory-1.jpg";

const Index = () => {
  return (
    <section className="relative min-h-[calc(100vh-160px)] w-full px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Date strip */}
        <div className="flex items-center justify-between mb-10 md:mb-16">
          <span className="eyebrow">Today, of all days</span>
          <span className="hidden sm:inline-block w-16 h-px bg-walnut/15" />
          <span className="eyebrow">Volume One</span>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">
          {/* Polaroid */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 8 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1], delay: 0.4 }}
            className="lg:col-span-5 lg:col-start-8 lg:row-start-1 order-first lg:order-last flex justify-center lg:justify-end"
          >
            <div className="polaroid w-[280px] md:w-[380px] aspect-[3/4] relative">
              <div className="w-full h-full overflow-hidden bg-sunlight/20 relative">
                <div className="absolute inset-0 bg-walnut/10 mix-blend-overlay z-10 pointer-events-none" />
                <img
                  src={heroImage}
                  alt="A golden hour memory of us"
                  width={800}
                  height={1024}
                  className="w-full h-full object-cover sepia-[0.15] contrast-[0.95]"
                />
              </div>
              <div className="absolute bottom-3 md:bottom-5 left-0 w-full text-center font-script text-xl md:text-2xl text-walnut/60">
                us, golden hour
              </div>
            </div>
          </motion.div>

          {/* Hero typography */}
          <div className="lg:col-span-8 lg:col-start-1 lg:row-start-1 relative z-20 pointer-events-none">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="block font-serif italic text-3xl md:text-5xl text-walnut/60 mb-[-0.5rem] md:mb-[-2rem] ml-2 md:ml-8"
            >
              happy birthday,
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="font-serif font-light text-walnut leading-[0.85] tracking-[-0.02em] text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[13rem] mix-blend-color-burn"
            >
              My Love.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 md:mt-14 ml-2 md:ml-16 max-w-[36ch] flex items-start gap-5"
            >
              <span className="ribbon-divider mt-3 shrink-0" />
              <p className="text-base md:text-lg text-walnut/80 leading-loose font-light text-pretty">
                To the one who makes every morning feel like gentle sunlight. Here is to another year of quiet moments,
                shared coffee, and everything in between — every page that follows is a small piece of how much I adore you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="mt-10 md:mt-14 ml-2 md:ml-16 pointer-events-auto"
            >
              <Link
                to="/our-story"
                className="group inline-flex items-center gap-4 text-walnut"
              >
                <span className="block w-12 h-px bg-walnut/40 group-hover:w-20 group-hover:bg-ribbon transition-all duration-700" />
                <span className="eyebrow group-hover:text-ribbon transition-colors duration-500">Unfold our year</span>
                <span className="text-lg leading-none transition-transform duration-700 group-hover:translate-x-2">→</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating hearts/sparkles */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 1.6 }}
          className="absolute top-[18%] right-[12%] font-script text-2xl text-ribbon/60 animate-shimmer hidden md:block"
        >
          ♡
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 2 }}
          className="absolute bottom-[20%] left-[8%] font-script text-3xl text-rose-deep/40 animate-shimmer hidden md:block"
          style={{ animationDelay: "-1.5s" }}
        >
          ♡
        </motion.span>
      </div>
    </section>
  );
};

export default Index;
