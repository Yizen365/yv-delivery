"use client"

import Link from 'next/link'
import React, { forwardRef } from "react"

import { components } from '@/utils/data'

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Input } from './ui/input'
import { Heart, Menu, ShoppingCart } from 'lucide-react'

const Header = async () => {

  return (
    <div className='p-3 flex justify-between items-center'>
      <Link href="/" className='text-xl sm:text-2xl font-bold'>YV <span className='text-yellow-500'>Deliveries</span></Link>
      <div className='flex gap-2 items-center'>
        <Link href="/" className='hidden sm:block'>Home</Link>
        <div className='hidden sm:block'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {
                      components.map(component=> (
                        <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                      ))
                    }
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Link className='hidden sm:block' href="/signup">Register</Link>
      </div>
      <div className='flex items-center gap-2'>
        <Input placeholder="Search"></Input>
        <Heart className='cursor-pointer' size={20}></Heart>
        <ShoppingCart className='cursor-pointer' size={20}></ShoppingCart>
        <Menu className='cursor-pointer' size={20}></Menu>
      </div>
    </div>
  )
}

export default Header

const ListItem = forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
