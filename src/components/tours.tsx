import { destinationsItems } from "@/data";
import { Container } from "./container";
import Link from "next/link";
import Image from "next/image";
import { Rating } from "./rating";

export function Tours() {
    return (
        <Container className="py-20">
            <h2 className="text-4xl font-heading font-semibold text-center">
                Most Demanded Destination
            </h2>
            <p className="text-center max-w-4xl mx-auto text-slate-600 mt-2">
                Explore our top destinations voted by more than 100,000+ customers around the world.
            </p>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
                {destinationsItems.map((destination) => 
                    <Link href={destination.id} key={destination.id} className="group">
                        <div>
                            <div className="aspect-[16/10] rounded-md overflow-hidden">
                                <Image src={destination.image} alt={destination.title} width={420} height={400} className="w-full h-full object-cover transition-transform group-hover:scale-110 origin-bottom duration-300"/>
                            </div>
                            <div className="py-2 space-y-2">
                                <div className="flex justify-between items-center">
                                    <p className="text-lg font-semibold">{destination.title}</p>
                                    <Rating rate={destination.rating}/>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="font-medium">${destination.price}</p>
                                    <p className="text-slate-600">{destination.period}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
            </ul>
        </Container>
    );
}