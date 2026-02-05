import ProtectedLayout from "@/components/ProtectedLayout";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
    return <ProtectedLayout>{children}</ProtectedLayout>;
}
