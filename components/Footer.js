import Link from "next/link";

export default ()=>{
    return <footer className="flex bg-black dark:bg-gray-800 w-full justify-center gap-5 p-3 rounded-t-md mt-7 mb-0 z-10">
        <img  title="+222 31667346"  className="bg-white rounded-md cursor-default hover:bg-green-500" src="/img/whatsapp.svg"/>
        <img title="hassen.nouachott@gmail.com" className="bg-white rounded-md hover:bg-red-500" src="/img/gmail.svg"/>
        <Link href={"https://www.linkedin.com/in/الحسن"} target="_blank" prefetch={false}><img className="bg-white rounded-md hover:bg-blue-500" src="/img/linkedin.svg"/></Link>
    </footer>
}