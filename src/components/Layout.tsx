import { NavLink as RouterNavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const nav = [
  { to: "/", label: "Wish", index: "I" },
  { to: "/our-story", label: "Our Story", index: "II" },
  { to: "/memories", label: "Memories", index: "III" },
  { to: "/letter", label: "A Letter", index: "IV" },
];

const Layout = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Ambient warm gradients */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[-15%] right-[-10%] h-[70vw] w-[70vw] rounded-full bg-sunlight/40 blur-[140px] animate-drift" />
        <div className="absolute bottom-[-20%] left-[-15%] h-[60vw] w-[60vw] rounded-full bg-blush/60 blur-[120px] animate-drift" style={{ animationDelay: "-4s" }} />
        <div className="absolute top-[40%] left-[40%] h-[40vw] w-[40vw] rounded-full bg-ribbon/10 blur-[160px]" />
      </div>

      <header className="relative z-20 w-full px-6 md:px-12 pt-8 md:pt-10 pb-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8">
          <RouterNavLink to="/" className="group flex items-center gap-3">
            <span className="font-script text-2xl text-walnut leading-none">for you</span>
            <span className="hidden md:inline-block w-8 h-px bg-walnut/20 transition-all duration-700 group-hover:w-14 group-hover:bg-ribbon" />
          </RouterNavLink>

          <nav className="hidden md:flex items-center gap-10">
            {nav.map((n) => (
              <RouterNavLink key={n.to} to={n.to} end={n.to === "/"}>
                {({ isActive }) => (
                  <span className="nav-link" data-active={isActive}>
                    <span className="mr-2 text-ribbon/60">{n.index}</span>
                    {n.label}
                  </span>
                )}
              </RouterNavLink>
            ))}
          </nav>

          <span className="eyebrow hidden md:inline-block">A Birthday Keepsake</span>
        </div>

        {/* Mobile nav */}
        <nav className="mt-6 flex md:hidden items-center justify-center gap-5 flex-wrap">
          {nav.map((n) => (
            <RouterNavLink key={n.to} to={n.to} end={n.to === "/"}>
              {({ isActive }) => (
                <span className="nav-link text-[9px]" data-active={isActive}>
                  {n.label}
                </span>
              )}
            </RouterNavLink>
          ))}
        </nav>
      </header>

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="relative z-10 mt-24 pb-10 px-6 text-center">
        <div className="mx-auto max-w-md flex flex-col items-center gap-3">
          <span className="ribbon-divider" />
          <p className="font-script text-2xl text-walnut">made with all my heart</p>
          <p className="eyebrow">for the only one</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
