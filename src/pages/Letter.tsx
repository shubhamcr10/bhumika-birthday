import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import letterImage from "@/assets/memory-5.jpg";

const Letter = () => {
  return (
    <section className="relative w-full px-6 md:px-12 pt-8 pb-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="eyebrow">Chapter Four — the last one</span>
          <h2 className="mt-6 font-serif italic text-walnut text-6xl md:text-8xl leading-[0.9] text-balance">
            A letter,<br />for you.
          </h2>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="ribbon-divider" />
            <span className="font-script text-xl text-ribbon">to be read slowly</span>
            <span className="ribbon-divider" />
          </div>
        </motion.div>

        {/* Letter card */}
        <motion.article
          initial={{ opacity: 0, y: 40, rotateX: -6 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative bg-card border border-walnut/10 shadow-soft p-8 md:p-16 lg:p-20"
          style={{ backgroundImage: "linear-gradient(180deg, hsl(var(--card)), hsl(var(--blush) / 0.3))" }}
        >
          {/* Wax-seal accent */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 size-12 rounded-full bg-gradient-ribbon shadow-glow flex items-center justify-center">
            <span className="font-script text-ivory text-2xl leading-none">♡</span>
          </div>

          <p className="font-script text-3xl md:text-4xl text-walnut">
            My dearest love,
          </p>

          <div className="mt-10 space-y-6 font-serif text-lg md:text-xl text-walnut/85 leading-loose text-pretty">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              I tried to write this a hundred different ways, and none of them ever quite captured it. So I'll
              just tell you the truest thing I know: <em className="text-rose-deep">loving you is the best
              thing I have ever done.</em>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              You have a way of making the world feel softer. The way you hum without realising. The way you
              fold yourself into me when you're tired. The way you laugh at your own jokes a half-second before
              the punchline. Every small, ordinary thing you do — I notice. And I keep it.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              On your birthday, I want you to feel exactly how you make me feel: <em>seen, adored, and
              completely at home</em>. I hope this year brings you every single thing your heart has been
              quietly hoping for. And I hope you let me be there for all of it.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              Thank you for being born. Thank you for finding me. Thank you for choosing me, even on the days
              I'm difficult to choose.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 1 }}
              className="text-2xl md:text-3xl italic"
            >
              Happy birthday, my heart. Here's to us — and to all the years still ahead.
            </motion.p>
          </div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="mt-14 flex flex-col items-end"
          >
            <span className="font-serif italic text-walnut/70">always & all of it,</span>
            <span className="font-script text-5xl md:text-6xl text-rose-deep mt-2">yours.</span>
          </motion.div>

          {/* Decorative photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="hidden lg:block absolute -right-16 -top-10 polaroid w-48"
          >
            <div className="w-full aspect-square overflow-hidden bg-sunlight/20">
              <img src={letterImage} alt="A pressed memory" loading="lazy" className="w-full h-full object-cover sepia-[0.15]" />
            </div>
            <div className="absolute bottom-2 left-0 w-full text-center font-script text-sm text-walnut/60">
              p.s. forever
            </div>
          </motion.div>
        </motion.article>

        {/* Back to start */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="font-script text-2xl text-walnut/70 mb-6">…and we'll start the story again, tomorrow.</p>
          <Link to="/" className="group inline-flex items-center gap-4 text-walnut">
            <span className="text-lg transition-transform duration-700 group-hover:-translate-x-2">←</span>
            <span className="eyebrow group-hover:text-ribbon transition-colors duration-500">Back to the beginning</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Letter;
