import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from "react";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((
    {
        label,
        id,
        ...props
    }: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <textarea id={id} ref={ref} {...props}/>
        </div>
    )
});        
