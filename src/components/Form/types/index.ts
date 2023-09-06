import React from "react";

interface FormInitProps {
    label?: string;
    name?: string;
    required?: boolean;
    disabled?: boolean;
}

export interface FormInputProps extends FormInitProps {
}

export interface FormButtonProps {
    label?: string;
    onClick?: () => void;
}

export interface FormFileProps extends FormInitProps {
    label?: string;
    name?: string;
    required?: boolean;
    disabled?: boolean;
}

export interface FormSelectProps extends FormInitProps {
    selectOptions?: Array<{ label: string; value: string }>;
}

export interface FormRowProps {
    children?: React.ReactNode;
}
