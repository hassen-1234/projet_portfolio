import { useEffect,useState } from "react";
import { motion } from "framer-motion";
import data from "../public/lang_data";
import Card from "@/components/Card";

const Page = (props)=>{
    useEffect(()=>{
        ///// Navbar modification/////
        if (document.getElementsByClassName("select")[0]){
        document.getElementsByClassName("select")[0].classList.remove("select");
    }
        document.getElementById("navprojects").classList.add("select");
        /////////////////////////////
    },[])
    return <motion.div initial={{y:-700}} animate={{y:0}} transition={{duration:1}} exit={{x:"120%"}} className="bg-gradient-to-r from-blue-300 to-green-600 bg-opacity-55 rounded-[40px] p-4 mx-10 shadow-black shadow-xl">
        <div className="h-full bg-gradient-to-b from-white to-green-300 px-16 pb-16 pt-10 rounded-[40px] ltr:rounded-tr-[200px] rtl:rounded-tl-[200px]">
           <h1 className="font-extrabold text-3xl mb-8 text-black">{props.title}</h1>
           <div className="grid grid-cols-3 gap-4">
                <Card title={props.data["projects"]["items"][0]["title"]} description={props.data["projects"]["items"][0]["description"]} href={props.data["projects"]["items"][0]["link"]}/>
                <Card title={props.data["projects"]["items"][1]["title"]} description={props.data["projects"]["items"][1]["description"]} href={props.data["projects"]["items"][1]["link"]}/>
                <Card title={props.data["projects"]["items"][2]["title"]} description={props.data["projects"]["items"][2]["description"]} href={props.data["projects"]["items"][2]["link"]}/>
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
    // return <Page title={langData["projects"]["title"]} data={langData}/>
}