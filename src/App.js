import { BrowserRouter, Route, Switch } from "react-router-dom"
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import injectContext from "./store/AppContext";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/" component={Home} />
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default injectContext(App);