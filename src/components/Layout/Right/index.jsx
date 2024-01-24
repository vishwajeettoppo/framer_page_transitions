import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const routes = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
};

export default function Right({ children }) {
  const router = useRouter();

  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const right = {
    initial: {
      x: "0%",
    },
    enter: {
      x: "-100%",
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: [0.45, 0, 0.55, 1],
      },
    },
    exit: {
      x: "0%",
      transition: {
        duration: 0.7,
        ease: [0.45, 0, 0.55, 1],
      },
    },
  };

  const right2 = {
    initial: {
      x: "0%",
    },
    enter: {
      x: "-100%",
      transition: {
        duration: 0.7,
        delay: 0.45,
        ease: [0.45, 0, 0.55, 1],
      },
    },
  };

  const text = {
    initial: {
      x: "0vw",
    },
    enter: {
      x: "-100vw",
      transition: {
        duration: 0.7,
        delay: 0.45,
        ease: [0.45, 0, 0.55, 1],
      },
    },
    exit: {
      x: "0vw",
      transition: {
        duration: 0.7,
        ease: [0.45, 0, 0.55, 1],
      },
    },
  };

  return (
    <div className="px-20">
      <motion.p
        {...anim(text)}
        className="absolute top-[40%] left-[70%] translate-x-[-50%] z-40 text-4xl font-bold text-white"
      >
        {routes[router.route]}
      </motion.p>

      <motion.div
        {...anim(right)}
        className=" fixed top-0 left-0 h-screen w-screen bg-orange-500 z-30"
      />
      <motion.div
        {...anim(right2)}
        className=" fixed top-0 left-0 h-screen w-screen bg-orange-400 z-20"
      />
      <div className="flex gap-8 py-10">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      {children}
    </div>
  );
}
