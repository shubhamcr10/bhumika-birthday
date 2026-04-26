import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "@/assets/memory-1.jpg";
import img2 from "@/assets/memory-2.jpg";
import img3 from "@/assets/memory-3.jpg";
import img4 from "@/assets/memory-4.jpg";
import img5 from "@/assets/memory-5.jpg";
import img6 from "@/assets/memory-6.jpg";

const photos = [
  { src: img1, caption: "the walk home", rotate: "-rotate-3", aspect: "aspect-[3/4]" },
  { src: img2, caption: "our usual order", rotate: "rotate-2", aspect: "aspect-[5/4]" },
  { src: img3, caption: "your favourite blooms", rotate: "-rotate-2", aspect: "aspect-square" },
  { src: img6, caption: "make a wish", rotate: "rotate-3", aspect: "aspect-[4/5]" },
  { src: img4, caption: "stay a little longer", rotate: "-rotate-1", aspect: "aspect-[4/5]" },
  { src: img5, caption: "everything I want to say", rotate: "rotate-2", aspect: "aspect-[5/4]" },
];

const Memories = () => {
  return (
    <section className="relative w-full px-6 md:px-12 pt-8 pb-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="eyebrow">Chapter Three</span>
          <h2 className="mt-6 font-serif text-walnut text-6xl md:text-8xl leading-[0.9] text-balance">
            <span className="italic">A scrapbook</span><br />of small forevers.
          </h2>
          <p className="mt-8 font-script text-2xl text-ribbon">moments I never want to forget</p>
        </motion.div>

        {/* Scrapbook grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 md:gap-y-28">
          {photos.map((p, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: (i % 3) * 0.15, ease: [0.2, 0.8, 0.2, 1] }}
              className={`polaroid mx-auto w-full max-w-[340px] ${p.rotate} ${
                i % 2 === 0 ? "md:translate-y-0" : "md:translate-y-10"
              }`}
            >
              <div className={`w-full ${p.aspect} overflow-hidden bg-sunlight/20`}>
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  className="w-full h-full object-cover sepia-[0.12] hover:sepia-0 transition-all duration-1000"
                />
              </div>
              <figcaption className="absolute bottom-3 md:bottom-5 left-0 w-full text-center font-script text-lg md:text-xl text-walnut/60">
                {p.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Quote / interlude */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-32 md:mt-40 mx-auto max-w-3xl text-center"
        >
          <span className="font-serif italic text-7xl text-ribbon/30 leading-none">"</span>
          <p className="mt-[-1rem] font-serif italic text-3xl md:text-4xl text-walnut leading-snug text-balance">
            With you, even the ordinary days have a way of feeling like the photographs we'll one day frame.
          </p>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 text-center"
        >
          <Link to="/letter" className="group inline-flex items-center gap-4 text-walnut">
            <span className="eyebrow group-hover:text-ribbon transition-colors duration-500">Read your letter</span>
            <span className="text-lg transition-transform duration-700 group-hover:translate-x-2">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Memories;
