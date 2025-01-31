import { Outlet } from "react-router-dom"
import { Navbar } from "./navbar"
import { Footer } from "./footer"

export function IndexLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
