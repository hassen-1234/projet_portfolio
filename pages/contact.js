import { useEffect,useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import data from "../public/lang_data";

const Page = (props)=>{
    useEffect(()=>{
        ///// Navbar modification/////
        if (document.getElementsByClassName("select")[0]){
        document.getElementsByClassName("select")[0].classList.remove("select");
    }
        document.getElementById("navContact").classList.add("select");
        /////////////////////////////
        document.getElementById("formMessage").addEventListener("submit",async (event)=>{
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            try{
            const response = await fetch(`/api/telegrame_message?name=${name}&email=${email}&message=${message}`);
            const data = await response.json();
            if (data){
                alert(props.data["contact"]["succesSendMessage"]);
                return ;
            }
            else{
                alert(props.data["contact"]["errorSendMessage"]);
                return ;
            }
            }
            catch (e){
                alert(props.data["contact"]["errorSendMessage"]);
                return ;
            }           
        })
            },[])
    return <motion.div initial={{y:-700}} animate={{y:0}} transition={{duration:1}} exit={{x:"120%"}} className="bg-gradient-to-r from-blue-300 to-green-600 bg-opacity-55 rounded-[40px] p-4 mx-10 shadow-black shadow-xl">
        <form id="formMessage" className="flex flex-col gap-10 h-full bg-gradient-to-b from-white to-green-300 p-20 rounded-[40px] ltr:rounded-tr-[200px] rtl:rounded-tl-[200px]">
            <input id="name" type="text" className="p-3 rounded-lg focus:shadow-lg focus:shadow-black" placeholder={props.data["contact"]["input1Text"]} required/>
            <input id="email" type="email" className="p-3 rounded-lg focus:shadow-lg focus:shadow-black" placeholder={props.data["contact"]["input2Text"]} required/>
            <textarea id="message" rows={4} className="p-3 rounded-lg focus:shadow-lg focus:shadow-black" placeholder={props.data["contact"]["input3Text"]} required></textarea>
            <motion.button whileHover={{scale:1.2}} className="font-bold text-lg bg-gradient-to-r from-blue-800 to-green-500 rounded-lg hover:shadow-xl hover:shadow-blue-700 w-28 p-4 self-center active:opacity-85 text-black">{props.data["contact"]["buttonText"]}</motion.button>
        </form>
    </motion.div>
}

export default ()=>{
    const [lang,setLang] = useState("ar");
    let langData = data[lang]
    useEffect(()=>{
              const storeLang = sessionStorage.getItem("lang") || "ar";
              setLang(storeLang);
          },[])
    return <Page data={langData}/>
}