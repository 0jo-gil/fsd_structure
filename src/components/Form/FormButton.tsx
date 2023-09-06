import {FormButtonProps} from "@/components/Form/types";

const FormButton = ({label, onClick}: FormButtonProps) => {
    return (
        <button onClick={onClick}>{label}</button>
    );
};

export default FormButton;
