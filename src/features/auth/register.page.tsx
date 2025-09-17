import { Link } from "react-router-dom";
import { Layout } from "./layout";
import { ROUTES } from "@/shared/routes";
import { RegisterForm } from "./register-form";

function RegisterPage() {
    return (
        <Layout
            title="Register"
            description="Enter your email and password"
            footerContent={
                <>
                    Have account?
                    <Link className="underline text-primary" to={ROUTES.LOGIN}>
                        Login
                    </Link>
                </>
            }
            form={<RegisterForm />}
        />
    );
}

export const Component = RegisterPage;
