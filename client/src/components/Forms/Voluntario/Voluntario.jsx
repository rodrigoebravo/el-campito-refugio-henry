import React from "react";
import { useForm } from "react-hook-form"
import styles from "./Voluntario.module.css"
import Footer from "../../Footer/Footer"

const Voluntario = () =>{
    
    const { register, handleSubmit, formState:{ errors } } = useForm();

    const onSubmit = (data) => {
        data.availability = parseInt(data.availability);
        console.log(data)
    }

    return(
        <div className={styles.mainContainer}>
            <h2>Convocatoria a Voluntarios</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                
                <div className = {styles.item}>
                    <label className={styles.label}>Correo</label>
                    <input type="text" className={styles.input} placeholder="Tu dirección de correo electrónico"
                        {...register('email', {
                            required: true,
                            pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/    
                        })}
                    />
                    {errors.email?.type === 'pattern' && <p>Formato de Email incorrecto</p>}
                    {errors.email?.type === 'required' && <p>Email requerido</p>}
                </div>

                <div className = {styles.item}>
                    <label className={styles.label}>Nombre y Apellido</label>
                    <input type="text" className={styles.input} placeholder="Tu respuesta"
                        {...register('name', {required: true })}
                    />
                    {errors.name?.type === 'required' && <p>Ingrese su nombre</p>}
                    
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>Fecha de nacimiento</label>
                    <input type="date" className={styles.inputDate}
                        {...register('birthday', {required: true})}/>
                    {errors.date?.type === 'required' && <p>Fecha de nacimiento requerida</p>}
                </div>
                
                <div className = {styles.item} >
                    <label className={styles.label}>Localidad</label>
                    <input type="text" placeholder="Tu respuesta" className={styles.input}
                        {...register('area', {required: true})}
                    />
                    {errors.location?.type === 'required' && <p>Localidad requerida</p>}
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>Telefono</label>
                    <input type="tel" className={styles.input} placeholder="ej: 1161906190" 
                        {...register('telephone', { required: true, pattern: /^\d{3}\d{3}\d{4}$/ })}
                    />
                    {errors.telephone?.type === 'required' && <p>Número de telefono requerido</p>}
                    {errors.telephone?.type === 'pattern' && <p>El numero ingresado es invalido</p>}
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>Profesión</label>
                        <input type="text" className={styles.input} placeholder="Tu respuesta"
                        {...register('profession', { required: true })}
                        />
                        {errors.profession?.type === 'required' && <p>Profesión requerida</p>}
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>¿Tenés algún área de interés en particular para trabajar en el refugio?</label>
                    <input type="text" className={styles.input} placeholder="Tu respuesta" 
                    {...register('interest', {required: true})}/>
                    {errors.interest?.type === 'required' && <p>Haga, al menos, un breve comentario</p>}
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>¿Qué modalidad preferis?</label>
                    <select className={styles.select} {...register('modality', {required: true})}>
                        <option value="virtual">Virtual</option>
                        <option value="presencial">Presencial</option>
                        <option value="hibrido">Hibrido</option>
                    </select>
                    {errors.modality?.type === 'required' && <p>Modalidad requerida</p>}
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>¿De cuánto tiempo -en horas- dispones para realizar una tarea voluntaria?</label>
                    <input type="number" className={styles.input} placeholder="Tu respuesta"
                    {...register('availability', {required: true})}/>
                    {errors.availability?.type === 'required' && <p>poner, al menos, una estimación</p>}
                </div>
                
                <div className = {styles.itemCheckbox}>
                    <label className={styles.label}>¿De cuáles días dispones?</label>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" value='lunes' className={styles.checkbox} 
                        {...register('days', {required: true})}/>
                        <p>Lunes</p>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" value='martes' className={styles.checkbox} 
                        {...register('days', {required: true})}/>
                        <p>Martes</p>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" value='miercoles' className={styles.checkbox}
                        {...register('days', {required: true})}/>
                        <p>Miercoles</p>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" value='jueves' className={styles.checkbox}
                        {...register('days', {required: true})}/>
                        <p>Jueves</p>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" value='viernes' className={styles.checkbox}
                        {...register('days', {required: true})}/>
                        <p>Viernes</p>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" value='sabado' className={styles.checkbox}
                        {...register('days', {required: true})}/>
                        <p>Sábado</p>
                    </div>
                </div>

                <div className = {styles.item}>
                    <label className={styles.label}>Aclaranos un poco los dos puntos anteriores</label>
                    <input type="text" className={styles.input} placeholder="Tu respuesta"
                    {...register('clarification', {required: true})}/>
                    {errors.clarification?.type === 'required' && <p>Haga, al menos, un breve comentario</p>}
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>¿Qué crees que podes sumar personalmente? (No es una pregunta sobre tu profesión, sino sobre vos)</label>
                    <input type="text" className={styles.input} placeholder="Tu respuesta"
                    {...register('description', {required: true})}/>
                    {errors.description?.type === 'required' && <p>Haga, al menos, un breve comentario</p>}
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>¿Por que querés ser voluntario del Campito?</label>
                    <input type="text" className={styles.input} placeholder="Tu respuesta"
                    {...register('purpose', {required: true})}/>
                    {errors.purpose?.type === 'required' && <p>Haga, al menos, un breve comentario</p>}
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>¿Tenés vehiculo propio?</label>
                    <select className={styles.select} {...register('vehicle', {required: true})}>
                        <option value="si">Si</option>
                        <option value="no">No</option>
                    </select>
                    {errors.vehicle?.type === 'required' && <p>Seleccione una opción</p>}
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>¿Harías carpooling?</label>
                    <select className={styles.select} {...register('carpooling', {required: true})}>
                        <option value="si">Si</option>
                        <option value="no">No</option>
                        <option value="tal vez">Tal vez</option>
                    </select>
                    {errors.carpooling?.type === 'required' && <p>Seleccione una opción</p>}
                </div>

                <div className = {styles.item}>
                    <label className={styles.label}>¿Querés hacer algún comentario o dejarnos alguna pregunta?</label>
                    <input type="text" className={styles.input} placeholder="Tu respuesta"
                    {...register('question', {required: false})}/>
                </div>

                <input type="submit" value="Enviar" className = {styles.submit}/>
            </form>   
            <Footer />     
        </div>
    )
}

export default Voluntario;