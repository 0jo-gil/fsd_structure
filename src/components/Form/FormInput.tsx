import {FormInputProps} from "@/components/Form/types";

const FormInput = ({label, name, required = false, disabled = false}: FormInputProps) => {
    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            <input type="text" name={name} id={name} required={required} disabled={disabled}/>
        </div>
    );
};

export default FormInput;
