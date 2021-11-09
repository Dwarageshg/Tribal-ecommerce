import Image from "next/image";
import {
        MenuIcon,
        SearchIcon,
        ShoppingCartIcon,
} from "@heroicons/react/outline";

import {signIn,signOut,useSession} from "next-auth/client"
import { useRouter } from "next/router";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";

function Header() {

    const [session]=useSession();
    const router = useRouter();
    const items = useSelector(selectItems);
    return (
        <header>

            {/* Top nav */}
            <div className="flex items-center bg-blue-900 p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 ">
                   <img src="/images/lo.jpeg" 
                  
                   alt="" />
                </div>

                {/* Search */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor pointer bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" type="text" />
                    <SearchIcon className="h-12 p-4"/>
                </div>
                {/* Right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                   <div onClick={!session ? signIn : signOut} className="link hover:underline">
                       <p>
                           {session? `Hello, ${session.user.name}`  : 'Sign in'}

                       </p>
                       <p className="font-extrabold md:text-sm">Account & List</p>
                   </div> 
                   
                   <div className="link hover:underline">
                       <p>Returns</p>
                       <p className="font-extrabold md:text-sm">& Orders</p>
                   </div >

                   <div onClick={() => router.push("/checkout")} className="relative link hover:underline flex items-center">
                       <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                           {items.length}
                        </span>
                       <ShoppingCartIcon className='h-10'/>
                       <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                   </div>
                </div>

            </div>
            {/* bottom nav */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-blue-500 text-black text-sm">
                <p className="link hover:underline flex items-center">
                    <MenuIcon className="h-6 mr-1"/>
                    All
                </p>
                {/* <p className="link hover:underline"></p> */}
                <p className="link hover:underline">Buisness</p>
                <p className="link hover:underline">Today's Deals</p>
                {/* <p className="link hover:underline hidden lg:inline-flex"></p>
                <p className="link hover:underline hidden lg:inline-flex"></p>
                <p className="link hover:underline hidden lg:inline-flex"></p> */}
                <p className="link hover:underline hidden lg:inline-flex">Home decors</p>
                <p className="link hover:underline hidden lg:inline-flex">Fashion</p>
                <p className="link hover:underline hidden lg:inline-flex">Health & Personal Care</p>


            </div>
        </header>
    )
}

export default Header;
