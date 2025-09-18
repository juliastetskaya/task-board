import { ROUTES } from "@/shared/routes";
import { Link } from "react-router-dom";
import { Layout } from "./ui/layout";
import { LoginForm } from "./ui/login-form";

function LoginPage() {
    return (
        <Layout
            title="Enter"
            description="Enter your email and password"
            footerContent={
                <>
                    No account yet?
                    <Link
                        className="underline text-primary"
                        to={ROUTES.REGISTER}
                    >
                        Register
                    </Link>
                </>
            }
            form={<LoginForm />}
        />
    );
}

export const Component = LoginPage;
