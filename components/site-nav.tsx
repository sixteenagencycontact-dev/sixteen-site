"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/nav";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1800px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex h-[34px] w-auto items-center md:h-[42px]">
          <Image
            src="/logo_sixttensvg.svg"
            alt="SIXTEEN"
            width={151}
            height={42}
            priority
            className="h-full w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-bold uppercase text-white/70 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "text-white" : "transition hover:text-white"}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-12 w-12 items-center justify-center border border-white/20 text-white transition hover:border-white md:hidden"
        >
          <span className="relative h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-white transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-6 bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-6 bg-white transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-20 h-[calc(100dvh-5rem)] overflow-y-auto bg-ink px-5 py-6 md:hidden"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      className="block border-b border-white/10 py-3 text-5xl font-black uppercase leading-none text-white sm:text-6xl"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <p className="max-w-sm text-sm font-bold uppercase leading-relaxed text-white/50">
                Independent digital studio for identities, campaigns, and AI-shaped content.
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
