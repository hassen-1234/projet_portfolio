import "@/styles/globals.css";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import data from "../public/lang_data.json";
import LangToggler from "@/components/lang_toggler";

export default function App({ Component, pageProps }) {
  const [lang,setLang] = useState("ar");
    let langData = data[lang]
    useEffect(()=>{
          const storeLang = sessionStorage.getItem("lang") || "ar";
          setLang(storeLang);
      },[])
  const route = useRouter();
  return <div dir={langData["orientation"]} className="h-screen flex flex-col bg-white dark:bg-black rtl:text-right">
  <Nav lang_data={langData}/>
  <AnimatePresence mode="wait">
    <div key={route.pathname} className="flex-1">
      <Component {...pageProps} />
    </div>
  </AnimatePresence>
  <LangToggler/>
  <Footer/>
  </div>
}
