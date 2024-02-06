import { ServiceApi } from "./service-api.interface";

export class PreferencesServiceAPI implements ServiceApi {

    createService() {
        console.log('PreferencesServiceAPI created');
    }
}