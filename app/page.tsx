import {ConvAI} from "@/components/ConvAI";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center pt-4 pb-20 gap-16 sm:pt-10 sm:pb-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center">
                <ConvAI/>
            </main>
        </div>
    );
}
