'use client'

import { useState } from "react"
import { postEntry } from "../utils/action"
import Input from "./Input"
import Textarea from "./Textarea"

export default function Contact() {
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        subject:'',
        message:'',
    })
    const [error, setError] = useState<string | null>(null)
    
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        try{
            await postEntry(formData)
    
            setFormData({
                username:'',
                email:'',
                subject:'',
                message:'',
            })
            setError(null)
        } catch (err) {
            setError((err as Error).message)
        }
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = event.target
        setFormData(prevState => ({ ...prevState, [name]: value}))
    }

    return (
        <div className="flex flex-col items-center p-8 mb-40 w-full space-y-8 border-x-black dark:bg-inherit">
            <p>Contact, comments, or critiques about the page.</p>
            <form 
                onSubmit={handleSubmit}
                method="post" 
                className="flex flex-col items-center space-y-4 min-w-64"
                >
                <Input 
                    label="Name"
                    name="username"
                    required
                    value={formData.username}
                    onChange={handleChange}
                />
                <Input 
                    label="Email"
                    name="email" 
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Input 
                    label="Subject"
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                />
                <div>
                <Textarea
                    label="Message" 
                    name="message" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                />
                </div>
                <button
                    className="bg-blue-500 rounded-full p-2 dark:bg-sky-900"
                    type="submit"
                >
                    Message
                </button>
            </form>
        </div>
    )
}