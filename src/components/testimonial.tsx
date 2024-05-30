import { testimonials } from "@/data";
import { Container } from "./container";
import Image from "next/image";
import { Rating } from "./rating";

export function Testimonial() {
    return (
        <Container className="py-20">
            <h2 className="text-4xl font-heading font-semibold text-center">
                What our customers are say
            </h2>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-6 mt-20">
                {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="bg-white p-6 rounded-md flex gap-4 md:w-[calc(50%-24px)]">
                    <Image src={testimonial.image} alt={testimonial.name} width={100} height={100} className="w-16 h-16 rounded-full object-cover shrink-0"/>
                    <div>
                        <div className="flex justify-between">
                            <div>
                                <p>{testimonial.name}</p>
                                <p className="text-slate-400">{testimonial.country}</p>
                            </div>
                            <Rating rate={testimonial.rating}/>
                        </div>
                        <p>{testimonial.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </Container>
    );
}