import Image from "next/image";
import { Container } from "./container";
import { SearchForm } from "./search-from";

export function Hero() {
    return (
        <Container className="grid lg:grid-cols-2 p-10">
            <div className="py-10 md:py-20">
                <p className="text-orange-600 font-semibold ml-1 text-lg">
                    Book With Us!
                </p>
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-2 text-balance font-heading">
                    Discover Your Next Adventure
                </h1>
                <p className="text-lg text-slate-600">
                    Discover amazing places at exclusive deals. Eat, Shop, Visit interesting places around Indonesia.
                </p>
                <div className="p-4 md:p-10 mt-10 rounded-md bg-white lg:-mr-[50%] relative">
                    <SearchForm/>
                </div>
            </div>
            <div className="hidden lg:flex justify-center">
                <Image src="/hero.jpg" alt="A mountain with ice" width={480} height={600} className="rounded-md w-[80%] h-full max-h-[700px] object-cover"/>
            </div>
        </Container>
    );
}