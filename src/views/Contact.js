import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/AppContext";

const Contact = () => {
    const { store, actions } = useContext(Context);
    const history = useHistory();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Contact</h1>
                    <p>{store.name} {store.lastname}</p>
                    <button onClick={history.goBack}>Regresar</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;