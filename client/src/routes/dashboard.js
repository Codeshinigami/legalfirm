import { lazy } from "react";
import PaymentSuccess from "../Pages/paymentsuccess";

const Dashboard = lazy(() => import("../Pages/Dashboard"));
const Plans = lazy(() => import("../Pages/Plans"));
const LegalSage = lazy(() => import("../Pages/legalsage"));
const GDocs = lazy(() => import("../Pages/gDocs"));
const Profile = lazy(() => import("../Pages/profile"));
const Settings = lazy(() => import("../Pages/settings"));
const Hire = lazy(() => import("../Pages/Hire"));

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
    {
        path: '/legalsage',
        title: 'LegalSage - Legal Firm',
        component: LegalSage
    },
    {
        path: '/gdocs',
        title: 'Generate Documents - Legal Firm',
        component: GDocs
    },
    {
        path: '/profile',
        title: 'Profile - Legal Firm',
        component: Profile
    },
    {
        path: '/settings',
        title: 'Settings - Legal Firm',
        component: Settings
    },
    {
        path: '/hire',
        title: 'hire - Legal Firm',
        component: Hire
    },
];

const Dashboardroutes = [...coreRoutes];
export default Dashboardroutes;