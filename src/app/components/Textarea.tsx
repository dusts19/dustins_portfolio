type TextareaProps = {
    label: string,
    name: string,
    required?: boolean,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function Textarea({label, name, required=false, value, onChange }: TextareaProps){
    return (
        <div className="flex flex-col">
            <label htmlFor={name}>{label}</label>
            <textarea
                rows={4}
                cols={40}
                id={name}
                name={name}
                required={required}
                placeholder={`${label} ${required ? '*' : ''}`}
                className="border-b-2 border-gray-600 pl-2 bg-gray-100 dark:placeholder:text-slate-800"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}