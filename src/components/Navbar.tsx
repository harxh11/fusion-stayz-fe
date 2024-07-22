'use client'

import { TiHeart } from "react-icons/ti";
import { IoIosGlobe } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import { useRouter } from "next/navigation";

const Navbar = () => {

    const router = useRouter();

    return(
        <div className="text-black w-full px-10 py-2 flex items-center justify-between bg-white">
            <div onClick={() => {router.push('/')}} className="text-center cursor-pointer">
                <h1 className="font-[800] text-[30px]">Stayvana</h1>
                <h1 className="opacity-50 text-[12px] relative top-[-10px]">Fusion Stayz :)</h1>
            </div> 
            <div className="flex items-center justify-center w-[30%]">
                <div className="w-[100%] flex items-center pr-4 border-2 rounded-[10px] text-[15px]">
                    <input type="text" placeholder="Search for Hotels, Places..." className="w-full py-2 px-2 rounded-[10px] mr-4" />
                    <div className="cursor-pointer">
                        <CiSearch size={30} />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center gap-7 text-white ">
                    <div className="bg-black flex p-2 rounded-[10px] cursor-pointer">
                        <TiHeart size={25} />
                    </div>
                    <div className="bg-black flex p-2 rounded-[10px] cursor-pointer">
                        <IoIosGlobe size={25} />
                    </div>
                    <div onClick={() => {router.push('/signup')}} className="flex p-2 bg-black cursor-pointer rounded-[10px]">
                        <FaRegUser size={25} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar;