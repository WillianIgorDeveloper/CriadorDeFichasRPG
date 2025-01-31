import { Button } from "@/presenters/components/button"

export function Footer() {
  return (
    <footer className="bg-background opacity-75">
      <div className="p-3 sm:p-5 flex flex-col items-center justify-center gap-2">
        <p className="text-sm">
          © {new Date().getFullYear()} Criador de Fichas RPG. Todos os direitos reservados.
        </p>
        <p className="text-sm">
          Made with 💜 by{" "}
          <Button variant="link" className="p-0 ml-1">
            <a href="https://github.com/WillianIgorDeveloper">Willian Igor</a>
          </Button>
        </p>
      </div>
    </footer>
  )
}
