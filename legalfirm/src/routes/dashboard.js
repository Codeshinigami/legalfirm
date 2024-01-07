import { lazy } from "react";

const Dashboard = lazy(() => import("../Pages/Dashboard"));

const coreRoutes = [
    {
        path: '/dashboard',
        title: 'Dashboard - Legal Firm',
        component: Dashboard
    },
];

const Dashboardroutes = [...coreRoutes];
export default Dashboardroutes;