import { ROUTES } from "@utils"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
// Pages
import { IndexPage } from "@pages/_index"
import { CharacterSheetPage } from "@pages/character-sheet"
// Layouts
import { IndexLayout } from "@layouts/_index"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<IndexLayout />}>
          <Route path={ROUTES.INDEX} element={<IndexPage />} />
          <Route path={ROUTES.CHARACTER_SHEET} element={<CharacterSheetPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
