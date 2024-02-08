import Image from "next/image"
import { IoPerson, IoPersonOutline } from "react-icons/io5";
import { FaWandSparkles } from "react-icons/fa6";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { HiBookOpen, HiOutlineBookOpen } from "react-icons/hi2";
import { BiCameraMovie, BiSolidCameraMovie } from "react-icons/bi";

import { SidebarMenuItem } from "./SidebarMenuItem"
import Link from "next/link";

const menuItems = [
  {
    path: '/characters',
    activeIcon: <IoPerson size={30}/>,
    inactiveIcon: <IoPersonOutline size={30}/>,
    title: 'Characters',
  },
  {
    path: '/spells',
    activeIcon: <FaWandSparkles size={30}/>,
    inactiveIcon: <FaWandSparkles size={30}/>,
    title: 'Spells',
  },
  {
    path: '/houses',
    activeIcon: <AiFillHome size={30}/>,
    inactiveIcon: <AiOutlineHome size={30}/>,
    title: 'Houses',
  },
  {
    path: '/books',
    activeIcon: <HiBookOpen size={30}/>,
    inactiveIcon: <HiOutlineBookOpen size={30}/>,
    title: 'Books',
  },
  {
    path: '/movies',
    activeIcon: <BiSolidCameraMovie size={30}/>,
    inactiveIcon: <BiCameraMovie size={30}/>,
    title: 'Movies',
  },
]

export const Sidebar = () => {
  return (
    <div className="p-2">
      <div className="p-2">
        <Link href="/">
          <div className="pl-3 mb-12">
              <Image
                src="/logo.png"
                alt="logo"
                width={60}
                height={60}
                className=""
              />
            </div>
        </Link>
        
        {
          menuItems.map(item => <SidebarMenuItem key={item.title} {...item}/>)
        }
      </div>
    </div>
  )
}
