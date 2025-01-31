import { Link, NavLink } from "react-router-dom"
import { ChevronsRightIcon, MenuIcon } from "lucide-react"
import { ROUTES } from "@utils"
import { Button } from "@components/button"
import { Sheet, SheetContent, SheetTrigger } from "@components/sheet"

export function Navbar() {
  return (
    <>
      <header className="w-full fixed top-0 left-0 bg-background z-40">
        <div className="container p-3 flex items-center justify-between sm:p-5">
          <Link to={ROUTES.INDEX}>
            <h1 className="font-display text-2xl font-bold">Criador de Fichas RPG</h1>
          </Link>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <MenuIcon />
              </SheetTrigger>
              <SheetContent side="top">
                <nav className="flex flex-col gap-3">
                  <SheetTrigger asChild className="text-center">
                    <Link to={ROUTES.INDEX}>
                      <h1 className="font-serif text-2xl font-bold">MDM</h1>
                    </Link>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <NavLink
                      to={ROUTES.CHARACTER_SHEET}
                      className={({ isActive }) => (isActive ? "bg-card rounded-lg" : "")}
                    >
                      <Button variant="link" className="text-md">
                        Ficha de personagem
                      </Button>
                    </NavLink>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Button className="text-md gap-3 w-full justify-between">
                      Login <ChevronsRightIcon />
                    </Button>
                  </SheetTrigger>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <nav className="gap-6 hidden lg:flex">
            <NavLink
              to={ROUTES.CHARACTER_SHEET}
              className={({ isActive }) => (isActive ? "bg-muted rounded-lg" : "")}
            >
              <Button variant="link" className="text-md">
                Ficha de personagem
              </Button>
            </NavLink>
          </nav>
        </div>
      </header>
      <div className="py-7 sm:py-10" />
    </>
  )
}
