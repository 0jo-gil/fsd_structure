import { CreateServiceFormFieldsetData } from "@/features/services/create-service/ui/create-service-form-fieldset";

export interface ServiceApi {
    getService: () => void;
    createService: (service: CreateServiceFormFieldsetData) => void;
}