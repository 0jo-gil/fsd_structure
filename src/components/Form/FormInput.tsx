import {FormInputProps} from "@/components/Form/types";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

const FormInput = ({label, name, required = false, disabled = false}: FormInputProps) => {
    const state = useSelector((state: RootState) => state)

    console.log(state)
    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            <input type="text" name={name} id={name} required={required} disabled={disabled}/>
        </div>
    );
};

export default FormInput;
