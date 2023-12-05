import { useState } from 'react';
import style from "./Form.module.css";

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        platforms: [{
            id: 0,
            name: '',
            slug: '',
            image: '',
            year_end: 0,
            year_start: 0,
            games_count: 0,
            image_background: ''
        }],
        released_at: '',
        background_image: '',
        rating: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos del formulario a tu lógica de manejo de estado o a tu backend
        console.log(formData);
    };

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit} className={style.form}>
            <h1>Crear Nuevo Videojuego</h1>
                <label className={style.label}>
                    Nombre:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className={style.input} />
                </label>
                <label className={style.label}>
                    Descripción:
                    <textarea name="description" value={formData.description} onChange={handleChange} className={style.input}></textarea>
                </label>
                {/* Otros campos del formulario con clases CSS */}
                <label className={style.label}>
                    Fecha de Lanzamiento:
                    <input type="date" name="released_at" value={formData.released_at} onChange={handleChange} className={style.input} />
                </label>
                <label className={style.label}>
                    Imagen de Fondo:
                    <input type="text" name="background_image" value={formData.background_image} onChange={handleChange} className={style.input} />
                </label>
                <label className={style.label}>
                    Rating:
                    <input type="number" name="rating" value={formData.rating} onChange={handleChange} className={style.input} />
                </label>
                <button type="submit" className={style.button}>Crear Videojuego</button>
            </form>
        </div>
    )
}

export default Form;
