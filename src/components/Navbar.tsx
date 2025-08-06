"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut, Moon, Settings, Sun, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { useTheme } from "next-themes"
import { SidebarTrigger } from "./ui/sidebar"

const Navbar = () => {
    const { setTheme } = useTheme()

  return (
    <nav className='p-4 flex justify-between items-center'>
        {/* Left side */}
        <SidebarTrigger/>
        {/* Right side  */}
        <div className='flex items-center justify-between gap-4'>
            <Link href={'/'}>Deshbord</Link>
         {/* Theme Menu  */}
         <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                    </DropdownMenuItem>
                </DropdownMenuContent>
         </DropdownMenu>
        {/* User Menu  */}
         <DropdownMenu>
            <DropdownMenuTrigger>
            <Avatar>
                <AvatarImage  src="https://avatars.githubusercontent.com/u/143347520?s=96&v=4" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={10} >
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem >
                        <User/>
                         Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem ><Settings/> Settings</DropdownMenuItem>
                    <DropdownMenuItem variant="destructive"><LogOut/> Logout</DropdownMenuItem>
                </DropdownMenuContent>
        </DropdownMenu>
        </div>
    </nav>
  )
}

export default Navbar