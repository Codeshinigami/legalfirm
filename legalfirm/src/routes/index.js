import { lazy } from "react";

const Landing = lazy(() => import("../Pages/Landing"));

const coreRoutes = [
    {
        path: '/',
        title: 'Legal Firm',
        component: Landing,
    }
];

const routes = [...coreRoutes];
export default routes;