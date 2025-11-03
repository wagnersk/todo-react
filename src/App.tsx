import { BrowserRouter, Route, Routes } from 'react-router'
import PageComponents from './pages/page-components'
import LayoytMain from './pages/layout-main'
import PageHome from './pages/pages-home'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoytMain />}>

          <Route index element={<PageHome />} />
          <Route path="/componentes" element={<PageComponents />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )

}