import { CreateServiceFormFieldsetData } from "@/features/services/create-service/ui/create-service-form-fieldset";
import { ServiceApi } from "./service-api.interface";

export class PreferencesServiceAPI implements ServiceApi {
    private state = {};

    private async getState() {
        if (!this.state) {
            const state = {}

            await this.setState(state);
            return state;
        }

        return this.state;
    }

    private async setState(state: any) {
        this.state = state;
    }

    async getService() {
        return await this.getState();
    }

    async createService(service: CreateServiceFormFieldsetData) {
        const state = await this.getState();

        const createdService = {
            ...service
        }

        await this.setState(state);
        return createdService;
    }
}