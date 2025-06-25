type InputProps = {
    label: string,
    name: string,
    type?: string,
    required?: boolean,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Input: React.FC<InputProps> = ({ label,  name, type="text", required=false, value, onChange}: InputProps) =>{
    return (
        <div className="flex flex-col">
            <label htmlFor={name}>{label}</label>
            <input
                className="border-b-2 border-gray-600 w-80 pl-2 bg-gray-100 dark:placeholder:text-slate-800 dark:text-slate-800"
                type={type}
                id={name}
                name={name}
                required={required}
                placeholder={`${label} ${required ? '*' : ''}`}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
export default Input;