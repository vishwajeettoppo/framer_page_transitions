import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import styles from './style.scss'

export default function Inner({ children }) {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 1,
    },
  };

  const slide = {
    initial: {
      top: "100%",
    },
    enter: {
      top: "100%",
    },
    exit: {
      top: "0%",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const perspective = {
    initial: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    enter: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    exit: {
      y: -100,
      scale: 0.9,
      opacity: 0.2,
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div className=" bg-black h-screen">
      <motion.div
        {...anim(slide)}
        className=" fixed top-0 left-0 bg-white w-screen h-screen z-30"
      />
      <motion.div {...anim(perspective)}>
        <motion.div {...anim(opacity)} className="bg-white h-screen px-20">
          <div className="flex gap-8 py-10">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
