import { Route, Routes } from "react-router-dom"
import routes from "./routes"
import LayoutLanding from "./layout/landing/defaultlayout";

function App() {

  return (
    <Routes>
      <Route element={<LayoutLanding/>}>
        {routes.map((route,index) =>{
          const {path, component : Component} = route;
          return <Route key={index} path={path} element={<Component/>}/>
        })}
      </Route>
    </Routes>
  )
}

export default App
