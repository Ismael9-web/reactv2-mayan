import mission from '../../../assets/mission.png'
import logosif from '../../../assets/logosif.svg'



import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


import { Button } from "@/components/ui/button"
function Login() {


  return (
    <div className="relative min-h-screen bg-gray-100">
    <div className="absolute top-4 left-4 flex">
    <img src={logosif} alt="Logo ESIF" className="w-24 h-auto " />
    <Label className='text-2xl gap'>Ministere du budget</Label>
  </div>
   <div className="flex items-center justify-center min-h-screen bg-gray-100">
     
     
    <div className="flex w-full max-w-4xl flex-row  items-center justify-center ">
    <Card className="w-[550px] bg-pink-50">
      <CardHeader>
        <CardTitle className='font-bold text-3xl  ml-40'>Login</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form >
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="name"  type='text'  placeholder="please enter your email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">password</Label>
              <Input id="name"  type='password' placeholder="please enter your password"   />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        
        <Button variant="outline">Annuler</Button>
        <Button type='submit' variant="outline">sign in</Button>
       
      </CardFooter>
    </Card>
    </div>
     <div className="w-[230px] h-[230px]" >
      <img src={mission} className='rounded-3xl object-cover w-full h-full ' alt='Mission'/>
     </div>
  </div>
  </div>
)
}

export default Login