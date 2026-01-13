import { useContext } from "react"
import { Context } from "../App"


export default function Header(){
    const context = useContext(Context)
    if (!context) return null; 
    
    const { state } = context
    return (
        <div className="w-325 p-4 rounded-b-[40px] flex items-center justify-between mx-auto bg-cyan-800 text-white">
            <h1 className="font-bold text-3xl" >LOGO</h1>
            <div className="flex items-center gap-5" >
                <div className="relative">
                    <p className="absolute font-bold text-gray-500 -right-3 -top-2 bg-white p-4 rounded-full w-2.5 h-2.5 flex items-center justify-center">{state.likedIds.length}</p>
                    <button className="bg-white text-black p-3 rounded-[40px] cursor-pointer" >❤️ like</button>
                </div>
                <div className="relative">
                    <p className="absolute text-gray-500 font-bold -right-3 -top-2 bg-white p-4 rounded-full w-2.5 h-2.5 flex items-center justify-center">{state.cart.length}</p>
                    <button className="bg-white  text-black p-3 rounded-[40px] cursor-pointer" >🛒 cart</button>
                </div>
            </div>
        </div>
    )
}  