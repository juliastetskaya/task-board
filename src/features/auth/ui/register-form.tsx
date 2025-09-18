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
import { useRegister } from "../model/use-register";

const registerSchema = z
    .object({
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
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords don't match",
    });

export function RegisterForm() {
    const form = useForm({
        resolver: zodResolver(registerSchema),
    });

    const { errorMessage, register, isPending } = useRegister();

    const onSubmit = form.handleSubmit(register);

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
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
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
                <Button disabled={isPending}>Register</Button>
            </form>
        </Form>
    );
}
