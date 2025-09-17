import { Outlet, useLocation } from "react-router-dom";
import { Header } from "@/features/header";
import { ROUTES } from "@/shared/routes";
import "./index.css";

export function App() {
    const { pathname } = useLocation();

    const isAuth = pathname === ROUTES.LOGIN || pathname === ROUTES.REGISTER;

    return (
        <div className="min-h-screen flex flex-col bg-amber-900">
            {!isAuth && <Header />}
            <Outlet />
        </div>
    );
}
