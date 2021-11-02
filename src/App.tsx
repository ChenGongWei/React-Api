import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Loading from "@/components/Loading";
import AssistiveTouch from "@/components/AssistiveTouch";

function App() {
    return (
        <BrowserRouter>
            <Suspense
                fallback={
                    <Loading
                        style={{
                            marginTop: "30vh",
                        }}
                    />
                }
            >
                <Routes />
                <AssistiveTouch />
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
