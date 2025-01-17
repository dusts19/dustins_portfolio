'use client'

import { useState } from "react"
import { postEntry } from "../utils/action"
import Input from "./Input"
import Textarea from "./Textarea"

const Contact: React.FC = () => {
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
            const response = await fetch('/api/visitors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();

            if (response.ok) {
                setError('Message sent successfully!');
            } else {
                setError(`Error: ${result.message}`);
            }
    
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
        // try{
        //     await postEntry(formData)
    
        //     setFormData({
        //         username:'',
        //         email:'',
        //         subject:'',
        //         message:'',
        //     })
        //     setError(null)
        // } catch (err) {
        //     setError((err as Error).message)
        // }
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setFormData(prevState => ({ ...prevState, [name]: value}))
    }
    function handleTextareaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = event.target
        setFormData(prevState => ({ ...prevState, [name]: value}))
    }

    return (
        <div className="flex flex-col items-center p-8 xs:pt-8 xs:pl-16 mb-40 xs:mb-32 w-full space-y-8 border-x-black dark:bg-inherit xs:pr-1">
            <p className="text-center">Contact, comments, or critiques about the page.</p>
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
                    onChange={handleInputChange}
                />
                <Input 
                    label="Email"
                    name="email" 
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <Input 
                    label="Subject"
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                />
                <div>
                <Textarea
                    label="Message" 
                    name="message" 
                    required
                    value={formData.message}
                    onChange={handleTextareaChange}
                />
                </div>
                <button
                    className="bg-blue-500 rounded-full p-2 dark:bg-sky-900 border-slate-600 border-2 dark:border-white"
                    type="submit"
                >
                    Message
                </button>
            </form>
        </div>
    )
}

export default Contact;