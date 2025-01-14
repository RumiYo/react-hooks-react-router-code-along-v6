import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";

function ErrorPage(){
    const error = useRouteError()
    console.log(error);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>Woops! Something went wrong!</h1>
            </main>
        </>
    )
}

export default ErrorPage;