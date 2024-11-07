import Link from "next/link";
export default function Navbar() {
    return (
        <div className ="bg-slate-700 text-white w-full font-semibold justify-between items-center shadow-slate-950 shadow-2xl h-20 flex mx-auto"> 
        <div className= "text-3xl">Logo</div>  
        <div className= " ml-auto flex ">
          <h1 className = "hover:text-gray-400 mr-3"><Link href="/home">Home</Link></h1>
        <br/>
          <h1 className = "hover:text-gray-400 mr-3"><Link href="/about">About</Link></h1>
        <br/>
          <h1 className = "hover:text-gray-400 mr-3"><Link href="/jobs">Jobs</Link></h1>
        <br/>
          <h1 className = "hover:text-gray-400 mr-3"><Link href="/jobs/programming">Programming</Link></h1>
        <br/>
          <h1 className = "hover:text-gray-400 mr-3"><Link href="/contact">Contact</Link></h1>
          </div>

        </div>
    )
}