import { useEffect,useState } from "react";
import { motion } from "framer-motion";
import data from "../public/lang_data";

const Page = (props)=>{
    useEffect(()=>{
        ///// Navbar modification/////
        if (document.getElementsByClassName("select")[0]){
            document.getElementsByClassName("select")[0].classList.remove("select");
        }
            document.getElementById("navAbout").classList.add("select");    
        /////////////////////////////
    },[])
    return <motion.div initial={{y:-700}} animate={{y:0}} transition={{duration:1}} exit={{x:"120%"}} className="bg-gradient-to-r from-blue-300 to-green-600 bg-opacity-55 rounded-[40px] p-4 mx-10 min-h-72 shadow-black shadow-xl flex flex-col">
    <div className="bg-gradient-to-b from-white to-green-300 p-10 rounded-[40px] ltr:rounded-tr-[200px] rtl:rounded-tl-[200px] h-full">
    <h1 className="text-2xl font-extrabold mb-6 text-black">{props.title}</h1>
    <p className="text-xl font-semibold text-gray-500">{props.presentation}</p>
    <div className="flex flex-col gap-5">
    <p className="text-[23px] mt-5 font-bold">{props.skillsText}</p>
    <div className="flex lg:justify-center overflow-auto gap-5 bg-gradient-to-r from-lime-500 to-green-400 p-4 rounded-xl">
            {["css.svg","dart.svg","html-5.svg","java-script-logo.png","python-file.png","java.svg","c-programming.svg","sql.png","flutter.svg","nextjs.svg","tailwindcss.svg","figma.svg"].map((item,index)=>{
                return <motion.img whileHover={{scale:1.4}} src={"/img/"+item} className="max-h-11"/>
            })}
    </div>
    </div>
    </div>
</motion.div>
}

export default ()=>{
    const [lang,setLang] = useState("ar");
    let langData = data[lang]
    useEffect(()=>{
              const storeLang = sessionStorage.getItem("lang") || "ar";
              setLang(storeLang);
          },[])
    return <Page title={langData["about"]["title"]} presentation={langData["about"]["presentation"]} skillsText={langData["about"]["skillsText"]} skillsSection1Text={langData["about"]["skillsSection1Text"]}/>
}