import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Square Agent",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={"h-full w-full"}>
        <body className={`antialiased w-full h-full lex flex-col`}>
        <div className="flex flex-col flex-grow w-full items-center justify-center sm:px-4">
            <nav
                className={
                    "sm:fixed w-full top-0 left-0 grid grid-cols-2 py-4 px-8"
                }
            >
                <div className={"flex"}>
                </div>

                <div className={"flex gap-4 justify-end"}>
                </div>
            </nav>
            <div className={"flex flex-col flex-grow w-full items-center font-bold justify-center text-3xl pt-36"}>Square Support Agent</div>
            {children}
        </div>
        </body>
        </html>
    );
}
