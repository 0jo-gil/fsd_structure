import './App.css'
import {Provider} from "react-redux";
import {store} from "@/store";
import FormInput from "@/components/Form/FormInput.tsx";

function App() {

    return (
        <Provider store={store}>
            <FormInput/>
        </Provider>
    )
}

export default App
