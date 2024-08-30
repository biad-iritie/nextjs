"use client";

import { useRouter } from "next/navigation";

export default function Modal({children}: {children: React.ReactNode}){
    return (
        <div>
            {children}
        </div>
    )
}