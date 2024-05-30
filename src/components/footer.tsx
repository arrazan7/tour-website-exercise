import Link from "next/link";
import { Container } from "./container";

export function Footer() {
    return (
        <footer className="pt-20 mt-20 bg-slate-700">
            <Container className="flex flex-col md:flex-row gap-10 justify-between">
                <div>
                    <div className="text-lg text-white">Tour and Travel Website</div>
                    <p className="text-slate-400 max-w-sm">Discover amazing places at exclusive deals. Eat, Shop, Visit interesting places around the world.</p>
                </div>
                <div>
                    <div className="text-lg text-white">Contact</div>
                    <p className="text-slate-400">Mobile No. 13352342134</p>
                    <Link className="text-slate-400 underline" href="emailto:tour-travel@email.com">
                        Email: tour-travel@email.com
                    </Link>
                </div>
            </Container>
            <p className="text-center text-sm text-stone-500 pt-20 pb-4">Tour and Travel Website developed using Next.JS and Tailwind CSS just for frontend practice</p>
        </footer>
    );
}