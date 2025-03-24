import Link from "next/link"

export default (props)=>{
    return <div className="bg-white bg-opacity-50 border-black border-2 text-gray-700 rounded-xl p-5 flex flex-col shadow-lg shadow-black overflow-auto">
        <h1 className="text-center text-xl font-semibold mb-4">{props.title}</h1>
        <p className="font-serif text-gray-900">{props.description}</p>
        <Link href={props.href} className=" bg-blue-500 rounded-lg px-6 py-1 hover:shadow-blue-500 hover:shadow-lg active:opacity-50 w-20 h-10 mt-3"><img src="img/show.png"/></Link>
    </div>
}