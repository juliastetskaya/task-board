import { Outlet, useLocation } from "react-router-dom";
import { Header } from "@/features/header";
import { ROUTES } from "@/shared/routes";

export function App() {
    const { pathname } = useLocation();

    const isAuth = pathname === ROUTES.LOGIN || pathname === ROUTES.REGISTER;

    return (
        <>
            {!isAuth && <Header />}
            <Outlet />
        </>
    );
}
