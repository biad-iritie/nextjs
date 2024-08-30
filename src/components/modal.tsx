"use client";

import { useRouter } from "next/navigation";

export default function Modal({children}: {children: React.ReactNode}){
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-10/12 md:w-8/12 lg:w-2/5 p-6"
        >
            {children}
        </div>
    )
}