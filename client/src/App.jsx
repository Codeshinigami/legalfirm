import { Route, Routes } from "react-router-dom"
import { Suspense, lazy, useContext } from "react";
import landingroutes from "./routes/landing";
import Dashboardroutes from "./routes/dashboard";
import AppLoader from "./components/loaders/apploader";
const LayoutLanding = lazy(() => import("./layout/landing/defaultlayout"))
const LayoutDashboard = lazy(() => import("./layout/dashboard/defaultlayout"))
import { LoginContext } from "./context/loginProvider";
import PaymentSuccess from "./Pages/paymentsuccess";

// All App's routes defined
function App() {

  const credentials = useContext(LoginContext);

  return (
    <Routes>
        {/* routes for landing page will be rendered in defaultlayout of landing page */}
        <Route element={<Suspense fallback={<AppLoader />}><LayoutLanding /></Suspense>}>
          {landingroutes.map((route, index) => {
            const { path, component: Component } = route;
            return <Route key={index} path={path} element={<Suspense fallback={<AppLoader />}><Component /></Suspense>} />
          })}
        </Route>

        {/* routes for dashboard page will be rendered in defaultlayout  */}
        {credentials.loggedIn && <Route element={<Suspense fallback={<AppLoader />}><LayoutDashboard /></Suspense>}>
          {Dashboardroutes.map((route, index) => {
            const { path, component: Component } = route;
            return <Route key={index} path={path} element={<Suspense fallback={<AppLoader />}><Component /></Suspense>} />
          })}
        </Route> }

        <Route element={<PaymentSuccess/>} path="/paymentsuccess"/>
    </Routes>
  )
}

export default App
