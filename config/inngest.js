import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/User";
    
// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next " });

//ingest functiom to save the user data to a database
export const  syncUserCreation = inngest.createFunction ({
id:'sync-user-from-clerk'
},
{event:'clerk/user.created'},
async(event)=>{
const {id,first_name,last_name,email_address,image_url}= event.data
const userData={
    id:id,
    email:email_adresses[0].email_adresses,
    name:first_name+' ' + last_name,
    imageUrl:image_Url
}
await connectDB()
await User.create(userData)
}
)
//inngest Function to update user data in database
export const syncUserUpdation=inngest.createFunction(
    {
        id:'update-user-from-clerk'
    },
    {
        event:'clerk/user.updated'
    },
    async({event})=>{
        const {id,first_name,last_name,email_address,image_url}= event.data
const userData={
    id:id,
    email:email_adresses[0].email_adresses,
    name:first_name+' ' + last_name,
    imageUrl:image_Url
}
await connectDB()
await User.findByIdUpdate(id,userData)
    }
)
//Inngest Function to delete user from database
export const syncUserDeletion=inngest.createFunction(
    {
        id:'delete-user-from-clerk'
    },
    {
        event:'clerk/user.deleted'
    },
    async({event})=>{
        const{id}=event.data
        await connectDB()
        await User.findByIdDelete(id)
       
}
)