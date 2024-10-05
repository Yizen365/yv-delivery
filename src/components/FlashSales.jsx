import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel"

import Title from './Title'
import Favorite from "./Favorite"
import View from "./View"
import AddToCart from "./AddToCart"
import { Button } from "./ui/button"
import Link from "next/link"
import { Star } from "lucide-react"

const FlashSales = ({ title, heading }) => {
    return (
        <div className="px-6 py-8 mt-2 bg-slate-100">
            <Title title={title} heading={heading} />
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full relative py-9 px-1"
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                            <div className="mb-1">
                                <div
                                    className="bg-slate-400 rounded-md h-64 bg-no-repeat bg-center bg-cover relative"
                                    style={{backgroundImage: 'url(./banner3.png'}}
                                >
                                    <div className="absolute top-2 right-2 flex flex-col gap-1">
                                        <Favorite/>
                                        <View/>
                                    </div>
                                    <AddToCart >
                                        <div className='absolute bottom-0 hover:bg-black hover:text-white text-center text-sm cursor-pointer p-2 w-full bg-cyan-300'>
                                            Add to Cart
                                        </div>
                                    </AddToCart>
                                </div>
                            </div>
                            <h2 className="font-semibold text-xl">Product Name</h2>
                            <div className="flex items-center">
                                <div className="mr-4">
                                    <span className="mr-1">$ 200</span>
                                    <span className="text-red-500 line-through">$ 500</span>
                                </div>
                                <Star size={20} color="yellow" fill="yellow"/>
                                <span className="font-semibold">4.7</span>
                                <span className="h-1 w-1 rounded-full bg-gray-500 mx-1"></span>
                                <span className="underline hover:no-underline hover:font-semibold cursor-pointer">198 reviews</span>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-[4%] left-0  bg-slate-300"/>
                <CarouselNext className="absolute top-[4%] right-0 bg-slate-300"/>
            </Carousel>
            <Link href='/' className="flex justify-center">
                <Button className="w-full">View All Products</Button>
            </Link>
        </div>
    )
}

export default FlashSales