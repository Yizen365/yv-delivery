"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"
import { profile } from "@/utils/data"

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    // return (
        // <Carousel
        //     plugins={[plugin.current]}
        //     className="ml-0 h-[30vh] md:h-[70vh]"
        //     onMouseEnter={plugin.current.stop}
        //     onMouseLeave={plugin.current.reset}
        // >
        //     <CarouselContent>
        //         {profile.map((item, index) => (
        //             <CarouselItem
        //                 key={index}
        //                 style={{ backgroundImage: `url(${item.img})` }}
        //                 className='w-full h-full bg-cover bg-center pt-3 bg-no-repeat relative pointer-events-none'
        //             >
        //                 <div className="p-1 h-[60vh]">
        //                     <Card className='bg-transparent border-none'>
        //                         <CardContent className="flex items-center justify-center p-6">
        //                             <div className="h-[60vh] md:h-[40vh] flex lg:justify-center items-center relative">
        //                                 <p className="text-yellow-600 font-extrabold text-sm md:text-4xl text-center w-10/12 md: 8/12">
        //                                     <span>{item.text}</span>
        //                                 </p>
        //                             </div>
        //                         </CardContent>
        //                     </Card>
        //                 </div>
        //             </CarouselItem>
        //         ))}
        //     </CarouselContent>
        // </Carousel>
    // )
}