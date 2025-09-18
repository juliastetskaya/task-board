import type { ReactNode } from "react";
import {
    Card,
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/shared/ui/kit/card";

export function Layout({
    title,
    description,
    form,
    footerContent,
}: {
    title: ReactNode;
    description: ReactNode;
    form: ReactNode;
    footerContent: ReactNode;
}) {
    return (
        <main className="grow flex flex-col pt-[200px] items-center">
            <Card className="w-full max-w-[400px]">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>{form}</CardContent>
                <CardFooter>
                    <p className="flex gap-2 text-sm text-muted-foreground [&_a]:underline [&_a]:text-primary">
                        {footerContent}
                    </p>
                </CardFooter>
            </Card>
        </main>
    );
}
