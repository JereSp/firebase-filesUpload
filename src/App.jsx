import { uploadFile } from "./firebase/config"; // importo mi funcion para subir archivos
import { useState } from "react";
import styles from "./App.css";

function App() {
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await uploadFile(file); // utilizo mi funcion para subir archivos en el boton del formulario
            console.log(result);
            setUrl(result);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])} //guardo mi archivo en mi estado local
                />
                <button>Upload</button>
            </form>
            <img className="imagen" src={url} />
        </>
    );
}

export default App;
