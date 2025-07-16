import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
 


    
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Mission</CardTitle>
          <CardDescription>
          
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                
              </div>
              
              <div className="grid gap-6">
                <div className="grid gap-3">
                 <label htmlFor="username">Username</label>
                  <Input
                    name="username"
                    autoComplete="username"
                    type="text"
                    
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <label htmlFor="password">Password</label>
                  
                  </div>
                  <Input name="password" autoComplete="current-password" type="password" required />
                </div>
                <Button type="submit" className="text-2xl bg-blue-400 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
                  Login
                </Button>
               
              </div>
              <div className="text-center text-sm">
                
              </div>
            </div>
            
          </form>
        </CardContent>
      </Card>
 
    </div>
  )
}
