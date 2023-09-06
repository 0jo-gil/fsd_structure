import {FormSelectProps} from "@/components/Form/types";

const FormSelect = ({label, name, required = false, disabled = false, selectOptions}: FormSelectProps) => {
    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            <select name={name} id={name} required={required} disabled={disabled}>
                {selectOptions?.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default FormSelect;
