import {FormFileProps} from "@/components/Form/types";

const FormFIle = ({label, name, required = false, disabled = false}: FormFileProps) => {
    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            <input type="file" name={name} id={name} required={required} disabled={disabled}/>
        </div>
    );
};

export default FormFIle;
