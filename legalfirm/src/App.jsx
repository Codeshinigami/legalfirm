import { Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react";
import landingroutes from "./routes/landing";
import Dashboardroutes from "./routes/dashboard";
import AppLoader from "./components/loaders/apploader";

const LayoutLanding = lazy(() => import("./layout/landing/defaultlayout"))
const LayoutDashboard = lazy(() => import("./layout/dashboard/defaultlayout"))

// All App's routes defined
function App() {

  return (
    <Routes>

      {/* routes for landing page will be rendered in defaultlayout of landing page */}
      <Route element={<LayoutLanding />}>
        {landingroutes.map((route, index) => {
          const { path, component: Component } = route;
          return <Route key={index} path={path} element={<Suspense fallback={<AppLoader/>}><Component /></Suspense>} />
        })}
      </Route>

      {/* routes for dashboard page will be rendered in defaultlayout  */}
      <Route element={<LayoutDashboard />}>
        {Dashboardroutes.map((route, index) => {
          const { path, component: Component } = route;
          return <Route key={index} path={path} element={<Suspense fallback={<AppLoader/>}><Component /></Suspense>} />
        })}
      </Route>
    </Routes>
  )
}

export default App
