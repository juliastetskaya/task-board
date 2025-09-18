import { Button } from "@/shared/ui/kit/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/shared/ui/kit/form";
import { Input } from "@/shared/ui/kit/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../model/use-login";

const loginSchema = z.object({
    email: z.email({
        error: (issue) =>
            issue.input === undefined ? "Email is required" : "Wrong email",
    }),
    password: z
        .string({
            error: (issue) =>
                issue.input === undefined
                    ? "Password is required"
                    : "Wrong password",
        })
        .min(6, "Password should be at least 6 symbols"),
});

export function LoginForm() {
    const form = useForm({
        resolver: zodResolver(loginSchema),
    });

    const { isPending, login, errorMessage } = useLogin();

    const onSubmit = form.handleSubmit(login);

    return (
        <Form {...form}>
            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your password"
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {errorMessage && (
                    <p className="text-destructive text-sm">{errorMessage}</p>
                )}
                <Button disabled={isPending}>Enter</Button>
            </form>
        </Form>
    );
}
