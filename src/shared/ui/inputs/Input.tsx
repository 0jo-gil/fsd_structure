import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((
    {
        label,
        id,
        ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>) => {

    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input id={id} ref={ref} {...props}/>
        </div>
    )
})