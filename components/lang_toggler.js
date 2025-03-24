import {useState,useEffect} from "react";
import data from "@/public/lang_data";

const langChange = (e)=>{
    if (e.target.value == "ar" || e.target.value == "العربية"){
       sessionStorage.setItem("lang","ar");
    }
    else{
        sessionStorage.setItem("lang","fr");
    }
    window.location.reload();
}

const setSelectLang = (langData, index, lang) => {
    if (!langData) return "";

    if (lang === "ar") {
        return index === 0 ? langData["langToggler"][1] : langData["langToggler"][0];
    } else {
        return index === 0 ? langData["langToggler"][0] : langData["langToggler"][1];
    }
};

export default ()=>{
    const [lang,setLang] = useState("ar");
    let langData = data[lang]
    useEffect(()=>{
            const storeLang = sessionStorage.getItem("lang") || "ar";
            setLang(storeLang);
        },[])
    if (!langData) return null;

    return <select onChange={(e)=>{langChange(e)}} className="rtl:left-10 fixed z-20 bottom-10 ltr:right-10 p-3 w-24 bg-gradient-to-r from-blue-800 to-green-500 opacity-85 text-black dark:bg-white dark:text-black rounded-md cursor-pointer">
            <option>{setSelectLang(langData,0,lang)}</option>
            <option>{setSelectLang(langData,1,lang)}</option>
        </select>
}