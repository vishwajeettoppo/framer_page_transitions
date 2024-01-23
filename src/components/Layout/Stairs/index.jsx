import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Stairs({ children }) {

    const anim=(variants, custom)=>{
        return{
            initial:'initial',
            animate:'enter',
            exit:'exit',
            variants,
            custom
        }
    }

    const expand={
        initial:{
            top:0,
        },
        enter:(i)=>({
            top:'100%',
            transition:{
                duration:0.3,
                delay:0.05 *i,
            },
            transitionEnd:{
              height:0,
              top:0  
            }
        }),
        exit:(i)=>({
            height:'100%',
            transition:{
                duration:0.3,
                delay:0.05 *i,
            }
        })
    }

    const overlay={
        initial:{
            opacity:0.5,
        },
        enter:{
            opacity:0,
        },
        exit:{
            opacity:0.5
        }
    }

    const noOfColumns=5
  return (
    <div className="px-20">
        <motion.div {...anim(overlay)} className=" fixed h-screen w-screen top-0 left-0 pointer-events-none bg-black"/>
        <div className=" w-screen h-screen fixed top-0 left-0 pointer-events-none flex">
            {
                [...Array(noOfColumns)].map((_,i)=>{
                    return <motion.div key={i} {...anim(expand, noOfColumns-i)} className=" relative h-full w-full bg-black"/>
                })
            }
        </div>
      <div className="flex gap-8 py-10">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      {children}
    </div>
  );
}
