"use client"
import { Input } from "@/components/ui/input"
import { AddAServerButton } from "./button"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { 
  Form, 
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel
} from "@/components/ui/form"

const formSkema = z.object({
  name: z.string().min(2, {
    message: "Server name must be at least 2 characters."
  }),

  imageUrl: z.string().min(1, {
    message: "Server image is required."
  }) 
})


export function AddAServerModal() {
  
  const form = useForm<z.infer<typeof formSkema>>({
    resolver: zodResolver(formSkema),
    defaultValues: {
      name: "",
      imageUrl: ""
    }
  })

  return (
    <Dialog open>

      <DialogTrigger asChild>
        <AddAServerButton></AddAServerButton>
      </DialogTrigger>

      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        
        <DialogHeader className="pt-4 px-8">
          <DialogTitle className="text-2xl text-center font-bold">
            Customize your server
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
             Give your new server a personality with a name and an icon. You can always change it later.
          </DialogDescription>
        </DialogHeader>
      
        <Form {...form}>
          <form className="space-y-6">
            
            <div className="space-y-8 px-4">
              <div className="flex items-center justify-center text-center">
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      To Do Image Upload
                      <FormControl>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70"
                    >
                      Server Name
                    </FormLabel>
                    <FormControl>
                      <Input 
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Enter server name" {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div> 

            <div className="flex bg-zinc-300/50 px-4 py-6">
              <Button  variant="secondary" className="p-5 ml-auto">Create</Button>
            </div>
          </form>
        </Form>
      
      </DialogContent>

    </Dialog>
  )
}