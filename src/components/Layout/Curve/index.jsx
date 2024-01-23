import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

const routes={
    '/':'Home',
    '/about':'About',
    '/contact':'Contact'
}

export default function Curve({ children }) {

  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  const router=useRouter()

  useEffect(() => {
    const resize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const text={
    initial:{
        opacity:1,
    },
    enter:{
        opacity:0,
        top:-100,
        transition: {
            duration: 0.7,
            delay: 0.4,
            ease: [0.76, 0, 0.24, 1],
          },
          transitionEnd:{
            top:'50%'
          }
    },
    exit:{
        opacity:1,
        top:'40%',
        transition: {
            duration: 0.5,
            delay: 0.4,
            ease: [0.33, 1, 0.68, 1],
          }, 
    }
  }

  return (
    <div className="px-20">
        <motion.p {...anim(text)} className="absolute top-[40%] left-[50%] translate-x-[-50%] text-white z-30 text-4xl font-bold">{routes[router.route]}</motion.p>
      <div
        style={{ opacity: dimensions.width > 0 ? 0 : 1 }}
        className="bg-black w-[100vw] h-[calc(100vh+600px)] top-[-300px] left-0 fixed pointer-events-none"
      ></div>
      {dimensions.width > 0 && <SVG {...dimensions} />}
      <div className="flex gap-8 py-10">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      {children}
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 300
    `;
  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 300
    `;

  const slide = {
    initial: {
      top: "-300px",
    },
    enter: {
      top: "-100vh",
      transition: {
        duration: 0.7,
        delay: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd:{
        top:'100vh'
      }
    },
    exit:{
        top:'-300px',
        transition: {
            duration: 0.7,
            ease: [0.76, 0, 0.24, 1],
        }
    }
  };

  const curve={
    initial:{
        d:initialPath,
    },
    enter:{
        d:targetPath,
        transition: {
            duration: 0.7,
            delay: 0.5,
            ease: [0.76, 0, 0.24, 1],
          },
    },
    exit:{
        d:initialPath,
        transition: {
            duration: 0.7,
            ease: [0.76, 0, 0.24, 1],
          },
    }
  }
  return (
    <motion.svg
      {...anim(slide)}
      className=" w-[100vw] h-[calc(100vh+600px)] top-[-300px] left-0 fixed pointer-events-none"
    >
      <motion.path {...anim(curve)}></motion.path>
    </motion.svg>
  );
};
