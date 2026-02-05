import { ReactNode } from "react";

export default function Container({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return <div className={`px-5 lg:px-[80px] xl:px-[120px] ${className}`}>{children}</div>;
}
