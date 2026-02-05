"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
    const router = useRouter();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("auth-token");

        if (!token) {
            router.replace("/login");
        } else {
            setChecked(true);
        }
    }, [router]);

    if (!checked) {
        return null; // or loading spinner
    }

    return children;
}
