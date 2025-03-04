import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"

export default function Mainlayout() {
  return (
      <>
    <Sidebar />
    <div className="w-[80%] m-auto absolute right-0 bg-[#F4F2EE]">
    <Outlet />
    </div>
      </>
  )
}
