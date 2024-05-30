import { Hero } from "@/components/hero";
import { Hotels } from "@/components/hotels";
import { Testimonial } from "@/components/testimonial";
import { Tours } from "@/components/tours";

export default function Home() {
    return (
        <main>
            <Hero/>
            <Tours/>
            <Hotels/>
            <Testimonial/>
        </main>
    );
}