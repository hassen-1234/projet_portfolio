import Link from "next/link";
import { motion } from "framer-motion";

const NavBarItem = (props)=>{
    return <Link id={props.id} href={props.href} className="p-4 hover:opacity-50 rounded-md">
            {props.lang_data["navBar"]["linkName"][props.index]}
    </Link>
};

export default (props)=>{
    return <nav className="bg-black dark:bg-gray-800 text-white font-bold flex w-full rounded-md mb-4 z-10 relative">
        <NavBarItem id="navHome" href="/accueil" index={0} lang_data={props.lang_data} />
        <NavBarItem id="navAbout" href="/about" index={1} lang_data={props.lang_data} />
        <NavBarItem id="navprojects" href="/projects" index={2} lang_data={props.lang_data} />
        <NavBarItem id="navContact" href="/contact" index={3} lang_data={props.lang_data} />
    </nav>
}