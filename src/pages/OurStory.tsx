import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img2 from "@/assets/memory-2.jpg";
import img3 from "@/assets/memory-3.jpg";
import img4 from "@/assets/memory-4.jpg";
import img6 from "@/assets/memory-6.jpg";

const moments = [
  {
    chapter: "I",
    when: "the very first time",
    title: "When the world went quiet.",
    body: "I remember exactly how the light fell. The way you laughed without thinking. I knew, before I knew anything else, that something had just shifted in me.",
    image: img2,
    align: "left",
  },
  {
    chapter: "II",
    when: "our slow mornings",
    title: "Coffee, and your sleepy smile.",
    body: "Two cups, the same old playlist, your hair still messy. The smallest ritual we share — and somehow the one I never want to live without.",
    image: img3,
    align: "right",
  },
  {
    chapter: "III",
    when: "that one evening",
    title: "Candlelight and your hand in mine.",
    body: "We talked until the staff started turning down the lights. I don't remember what we said. I just remember thinking, this is it. This is the person.",
    image: img4,
    align: "left",
  },
  {
    chapter: "IV",
    when: "today",
    title: "Another candle on the cake.",
    body: "Another year of you in the world. Another year of getting to love you out loud. There is nowhere I would rather be than right here, beside you, watching you make a wish.",
    image: img6,
    align: "right",
  },
];

const OurStory = () => {
  return (
    <section className="relative w-full px-6 md:px-12 pt-8 pb-24">
      <div className="mx-auto max-w-6xl">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center mb-20 md:mb-32"
        >
          <span className="eyebrow">Chapter Two</span>
          <h2 className="mt-6 font-serif italic text-walnut text-6xl md:text-8xl leading-[0.9] text-balance">
            Our little<br />love story.
          </h2>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="ribbon-divider" />
            <span className="font-script text-xl text-ribbon">so far</span>
            <span className="ribbon-divider" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div aria-hidden className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-ribbon/30 to-transparent" />

          <div className="space-y-24 md:space-y-40">
            {moments.map((m, i) => (
              <motion.article
                key={m.chapter}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center ${
                  m.align === "right" ? "md:[&>*:first-child]:order-last" : ""
                }`}
              >
                {/* Image / Polaroid */}
                <div className="flex justify-center">
                  <div
                    className={`polaroid w-[260px] md:w-[340px] aspect-[4/5] ${
                      i % 2 === 0 ? "rotate-[-3deg]" : "rotate-[3deg]"
                    }`}
                  >
                    <div className="w-full h-full overflow-hidden bg-sunlight/20">
                      <img
                        src={m.image}
                        alt={m.title}
                        loading="lazy"
                        className="w-full h-full object-cover sepia-[0.1]"
                      />
                    </div>
                    <div className="absolute bottom-3 md:bottom-5 left-0 w-full text-center font-script text-lg md:text-xl text-walnut/60">
                      {m.when}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className={`relative ${m.align === "right" ? "md:text-right" : ""}`}>
                  <span className="font-serif italic text-7xl md:text-9xl text-ribbon/30 leading-none block">
                    {m.chapter}
                  </span>
                  <span className="eyebrow block mt-2">{m.when}</span>
                  <h3 className="mt-4 font-serif text-walnut text-4xl md:text-5xl leading-tight text-balance">
                    {m.title}
                  </h3>
                  <p className="mt-6 text-walnut/75 leading-loose max-w-prose md:inline-block text-pretty">
                    {m.body}
                  </p>
                </div>

                {/* Center dot */}
                <span aria-hidden className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-3 rounded-full bg-ribbon shadow-[0_0_0_6px_hsl(var(--ivory)),0_0_0_7px_hsl(var(--ribbon)/0.3)]" />
              </motion.article>
            ))}
          </div>
        </div>

        {/* Onward */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 text-center"
        >
          <p className="font-serif italic text-2xl md:text-3xl text-walnut/80 max-w-xl mx-auto text-balance">
            …and the most beautiful chapters are the ones we haven't written yet.
          </p>
          <Link to="/memories" className="group mt-10 inline-flex items-center gap-4 text-walnut">
            <span className="eyebrow group-hover:text-ribbon transition-colors duration-500">See our moments</span>
            <span className="text-lg transition-transform duration-700 group-hover:translate-x-2">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
