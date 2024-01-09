import { lazy } from "react";

const Dashboard = lazy(() => import("../Pages/Dashboard"));
const Plans = lazy(() => import("../Pages/Plans"));

const coreRoutes = [
    {
        path: '/dashboard',
        title: 'Dashboard - Legal Firm',
        component: Dashboard
    },
    {
        path: '/plans',
        title: 'Plans - Legal Firm',
        component: Plans
    },
];

const Dashboardroutes = [...coreRoutes];
export default Dashboardroutes;