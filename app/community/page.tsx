// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { useEffect, useState } from "react"

// const formSchema = z.object({
//   msg: z.string().min(2, {
//     message: "Message must be at least 2 characters.",
//   }),
// })

// export default function MsgForm() {
//   const [messages, setMessages] = useState<string[]>([]);

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       msg: "",
//     },
//   })

//   async function fetchMessages() {
//     const response = await fetch('/api/community');
//     const data = await response.json();
//     setMessages(data.messages);
//   }

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   async function onSubmit(values: z.infer<typeof formSchema>) {
//     const response = await fetch('/api/community', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ msg: values.msg }),
//     });

//     if (response.ok) {
//       fetchMessages();
//       form.reset();
//     }
//   }

//   return (
//     <div>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//           <FormField
//             control={form.control}
//             name="msg"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Message</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter your message" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <Button type="submit">Submit</Button>
//         </form>
//       </Form>
//       <div className="mt-4">
//         <h2>Messages</h2>
//         <ul>
//           {messages.map((message, index) => (
//             <li key={index}>{message}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }


"use client";

const CommunityDemo = () => {
  return (
    <div className="wrapper group">
      <div className="relative flex flex-col items-center justify-center h-[75vh] md:h-[45vh] mx-16 rounded-3xl bg-gradient-to-b my-36 from-blue-700 to-pink-500 p-8 overflow-hidden">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex flex-col gap-2 md:w-[70%]">
            <h3 className="text-3xl font-medium text-white md:text-4xl tracking-tighter">
            New Community Feature Coming up Very Soon...! 🎉
              {/* <span className="font-bold tracking-tighter">Community</span> */}
            </h3>
            <p className="text-lg md:text-xl text-white/80">
              Private Community For Students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDemo;