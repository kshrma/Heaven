import Image from "next/image";
import { SearchIcon,GlobeAltIcon,MenuAlt1Icon,UserCircleIcon} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-col-3 bg-white shadow-md py-5 md:px-10">
      {/* left */}
      <div className="p-8" >
        <Image
          src="https://links.papareact.com/qd3"
          height={100}
          width={100}
          alt="Airbnb logo"
        />
      </div>

      {/* middle -search */}
      <div className="flex items-center">
         <input type="text" placeholder="Start your search" />
         <SearchIcon
          className="ml-200 md-inline-flex h-8 bg-pink-400 text-white rounded-full p-2 cursor-pointer md:mx-4 "
          height={20}/>
      </div>

  
   {/* Right */}

          {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer"
        height={20}/>
        <div className="Flex items-center space-x-2 border-2 p-2 rounded-full">
        <MenuAlt1Icon className="h-6"
        height={20}/>
        <UserCircleIcon className="h-6" 
        height={20}/>
        </div>
      </div>

      
    </header>
  )
}

export default Header;