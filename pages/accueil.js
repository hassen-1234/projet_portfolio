import { motion } from "framer-motion";
import { useState,useEffect } from "react";
import data from "../public/lang_data";
import Link from "next/link";

const h1Variants = {
    hidden:{opacity:0},
    visible:{opacity:1,transition:{staggerChildren:0.1}}
}
const pVariants = {
    hidden:{opacity:0},
    visible:{opacity:1,transition:{staggerChildren:0.04}}
}
const textVariants = {
    hidden:{opacity:0},
    visible:{opacity:1},
}

const Page = (props)=>{
    useEffect(()=>{
        ///// Navbar modification/////
        if (document.getElementsByClassName("select")[0]){
        document.getElementsByClassName("select")[0].classList.remove("select");
    }
        document.getElementById("navHome").classList.add("select");
        /////////////////////////////
    },[])
    return <motion.div initial={{y:-700}} animate={{y:0}} transition={{duration:1}} exit={{x:"120%"}} className="bg-gradient-to-r from-blue-300 to-green-600 bg-opacity-55 rounded-[40px] p-4 mx-10 min-h-72 shadow-black shadow-xl">
        <div className="relative bg-gradient-to-b from-white to-green-300 p-12 rounded-[40px] ltr:rounded-tr-[200px] rtl:rounded-tl-[200px] h-full">
            <motion.img initial={{y:-300}} animate={{y:0}} transition={{duration:3}} className="w-28 shadow-lg shadow-black rounded-full bg-gradient-to-r from-slate-400 to-green-700 relative bottom-7 ltf:right-6 rtl:left-6" src="img/code.svg"/>
            <motion.h1 key={props.title} variants={h1Variants} initial="hidden" animate="visible" className="font-[fantasy] mb-3 text-2xl text-black">
                {props.title.split("").map((char,index)=>{
                return <motion.span key={index} variants={textVariants}>{char}</motion.span>
            })}</motion.h1>
            <motion.p key={props.presentation} variants={pVariants} initial="hidden" animate="visible" className="text-2xl font-[fantasy] bg-clip-text text-black">
                {props.presentation.split("").map((char,index)=>{
                return <motion.span key={index} variants={textVariants}>{char}</motion.span>
            })}
                </motion.p>
            <Link href={"/contact"}>
            <motion.button whileHover={{scale:1.3}} className="bg-gradient-to-r from-blue-800 to-green-500 p-3 rounded-lg hover:shadow-xl hover:shadow-blue-700 w-28 h-12 mt-10 text-black">{props.contactButton}</motion.button>
            </Link>
        </div>
    </motion.div>
}

export default (props) =>{
    const [lang,setLang] = useState("ar");
    let langData = data[lang]
    useEffect(()=>{
        const storeLang = sessionStorage.getItem("lang") || "ar";
        setLang(storeLang);
    },[])
    return <Page title={langData["accueil"]["title"]} presentation={langData["accueil"]["presentation"]} contactButton={langData["navBar"]["linkName"][3]}/>
}