import React from 'react'
import Title from './Title'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel"

const Categories = () => {
  return (
    <div className='px-6 py-8 mt-2 bg-slate-100'>
      <Title title="Categories" heading="Browse by Categories" />
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
                                <div className="bg-slate-400 rounded-md h-40 flex justify-center items-center flex-col gap-2">
                                   <img src="./banner3.png" alt="" />
                                   <div className='text-black font-bold'>Category Name</div>
                                </div>
                            </div>
                            
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-[4%] left-0  bg-slate-300"/>
                <CarouselNext className="absolute top-[4%] right-0 bg-slate-300"/>
            </Carousel>
    </div>
  )
}

export default Categories
