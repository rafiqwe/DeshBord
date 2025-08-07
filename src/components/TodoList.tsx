"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { useState } from "react"
import { Button } from "./ui/button"
import {  CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "./ui/calendar"

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [open, setOpen] = useState(false)
  return (
    <div>
      <h1 className="text-lg font-medium mb-5">Todo List </h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon/>
            {date ? format(date, "PPP") : <span>pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto ">
          <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => {
                setDate(date)
                setOpen(false)
              }}
              className="rounded-lg border"
            />
        </PopoverContent>
      </Popover>

    {/* List  */}
     <ScrollArea className=" h-[400px]  rounded-md p-4">
        <div className="flex items-center flex-col gap-4"> 
        {Array.from({length: 12}).map((_, i) => (
       <Card key={i}>
            <div className="flex items-center gap-4 px-3" >
            <Checkbox id={`item${i}`}/>
            <label htmlFor={`item${i}`}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </label>
         </div>
       </Card>
         ) )}
    </div>
    </ScrollArea>
    </div>
  )
}

export default TodoList