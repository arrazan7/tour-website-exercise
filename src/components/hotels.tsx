import { hotels } from "@/data";
import { Container } from "./container";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "./rating";
import { BedDoubleIcon, User2 } from "lucide-react";

export function Hotels() {
    return (
        <Container className="py-20">
            <h2 className="text-4xl font-heading font-semibold text-center">
                Our Hotels Rooms
            </h2>
            <p className="text-center max-w-4xl mx-auto text-slate-600 mt-2">
                Explore our top hotels rooms voted by more than 100,000+ customers around the world.
            </p>

            <ul className="grid sm:grid-cols-2 gap-10 mt-20">
                {hotels.map((hotel) => 
                    <Link href={hotel.id} key={hotel.id} className="group">
                        <div>
                            <div className="aspect-[16/10] rounded-md overflow-hidden">
                                <Image src={hotel.image} alt={hotel.title} width={420} height={400} className="w-full h-full object-cover transition-transform group-hover:scale-110 origin-bottom duration-300"/>
                            </div>
                            <div className="py-2 space-y-2">
                                <div className="flex justify-between items-center">
                                    <p className="text-lg font-semibold">{hotel.title}</p>
                                    <Rating rate={hotel.rating}/>
                                </div>
                                <div className="flex justify-between gap-4 items-center">
                                    <p className="font-medium flex-1">From ${hotel.price}</p>
                                    <p className="text-slate-600 flex items-center gap-2">
                                        <BedDoubleIcon size={20}/>
                                        {hotel.bed}
                                    </p>
                                    <p className="text-slate-600 flex items-center gap-2">
                                        <User2 size={20}/>
                                        {hotel.capacity} Guest
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
            </ul>
        </Container>
    );
}