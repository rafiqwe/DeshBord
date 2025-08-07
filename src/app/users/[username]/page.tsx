import AppLineChart from "@/components/AppLineCharts"
import CardList from "@/components/CardList"
import EditUser from "@/components/EditUser"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react"

const SingleUserPage = () => {
  return (
    <div>
     <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbPage>Muhammmad Rabbi</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
    {/* Container  */}
        <div className="mt-4 flex flex-col xl:flex-row gap-8">
            {/* Left  */}
            <div className="w-full xl:w-1/3 space-y-5">
                {/* User badge container  */}
                <div className="bg-primary-foreground p-4 rounded-lg"> 
                    <h1 className="text-xl font-semibold">User Badge </h1>
                    <div className="flex mt-5 gap-4">
                    <HoverCard>
                        <HoverCardTrigger>
                            <BadgeCheck size={36} className="rounded-full bg-blue-500/50 border-1 border-blue-500/50 p-2"/>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <h1 className="font-bold mb-2">Verified User</h1>
                            <p className="text-sm text-muted-foreground">This user has been verified by admin.</p>
                        </HoverCardContent>
                    </HoverCard>
                            <HoverCard>
                            <HoverCardTrigger>
                            <Shield
                                size={36}
                                className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"
                            />
                            </HoverCardTrigger>
                            <HoverCardContent>
                            <h1 className="font-bold mb-2">Admin</h1>
                            <p className="text-sm text-muted-foreground">
                                Admin users have access to all features and can manage
                                users.
                            </p>
                            </HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                            <HoverCardTrigger>
                            <Candy
                                size={36}
                                className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                            />
                            </HoverCardTrigger>
                            <HoverCardContent>
                            <h1 className="font-bold mb-2">Awarded</h1>
                            <p className="text-sm text-muted-foreground">
                                This user has been awarded for their contributions.
                            </p>
                            </HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                            <HoverCardTrigger>
                            <Citrus
                                size={36}
                                className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                            />
                            </HoverCardTrigger>
                            <HoverCardContent>
                            <h1 className="font-bold mb-2">Popular</h1>
                            <p className="text-sm text-muted-foreground">
                                This user has been popular in the community.
                            </p>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                </div>
                 {/* User Information container  */}
                <div className="bg-primary-foreground p-4 rounded-lg"> 
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold">User Information </h1>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button>Edit User</Button>
                            </SheetTrigger>
                            <EditUser/>
                        </Sheet>
                    </div>
                    <div className="space-y-4 mt-5">
                        <div className="flex flex-col mb-8 gap-2">
                            <p className="text-sm text-muted-foreground">Profile completion</p>
                            <Progress value={80} />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold"> User Name:</span>
                            <span>Muhammad Rabbi</span>
                        </div>
                         <div className="flex items-center gap-2">
                            <span className="font-bold"> Email:</span>
                            <span>muhammad.rabbi@example.com</span>
                        </div>
                         <div className="flex items-center gap-2">
                            <span className="font-bold"> Phone:</span>
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold"> Location:</span>
                            <span>New York, NY</span>
                        </div>
                         <div className="flex items-center gap-2">
                            <span className="font-bold">Role:</span>
                            <Badge>Admin</Badge>
                        </div>
                    </div>
                    <p className="text-sm pt-2 text-muted-foreground">
                        Joined on: <span className="font-semibold">January 1, 2025</span>
                    </p>
                </div>
                {/* Card List Cotainer  */}
                <div className="bg-primary-foreground p-4 rounded-lg">
                    <CardList title="Recent Transactions"/>    
                 </div>
            </div>
            {/* Right  */}
            <div className="w-full xl:w-2/3 space-y-5">
                <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                         <Avatar>
                             <AvatarImage  src="https://avatars.githubusercontent.com/u/143347520?s=96&v=4" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h1 className="text-xl font-semibold">Muhammad Rabbi</h1>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Muhammad Rabbi is an experienced administrator known for his active involvement and valuable contributions to the community. As a verified user and award recipient, he consistently demonstrates leadership and reliability. His profile highlights a strong commitment to excellence and a positive impact within the organization.
                    </p>
                </div>
                <div className="bg-primary-foreground p-4 rounded-lg">
                    <h1 className="text-xl font-semibold">User Activity</h1>
                    <AppLineChart/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleUserPage