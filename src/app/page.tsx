"use client"

import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center gap-5 flex-col">
      <h1 className="text-3xl font-bold capitalize">muhammad rabbi ☠️</h1>
    <Button variant='destructive' size='lg'> Click Me </Button>
     <InputOTP maxLength={6}>
      <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator/>
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
    </InputOTP>
    </div>
  );
}
