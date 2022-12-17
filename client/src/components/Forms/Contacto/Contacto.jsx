import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Contacto.module.css";
import Footer from "../../Footer/Footer"

const Contacto = () =>{
    
    const { register, handleSubmit, formState:{ errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
     
    return(
        <div className={styles.mainContainer}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

                 
                <div className = {styles.item}>
                    <label className={styles.label}>Nombre y Apellido</label>
                    <input type="text" className={styles.input} placeholder="Tu respuesta"
                        {...register('name', {required: true })} />
                    {errors.name?.type === 'required' && <p>Ingrese su nombre</p>}                    
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>Si pertenece a alguna organización específiquela por favor</label>
                    <input type="text" className={styles.input} placeholder="Tu respuesta"
                        {...register('organization', {required: false })}
                    />
                </div>

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
                    <label className={styles.label}>Teléfono</label>
                    <input type="tel" className={styles.input} placeholder="ej: 1161906190" 
                        {...register('telephone', { required: true, pattern: /^\d{3}\d{3}\d{4}$/ })}
                    />
                    {errors.telephone?.type === 'required' && <p>Número de telefono requerido</p>}
                    {errors.telephone?.type === 'pattern' && <p>El numero ingresado es invalido</p>}
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>Asunto</label>
                    <select className={styles.select} {...register('type', {required: true})}>
                        <option value="adopciones">adopciones</option>                        
                        <option value="consulta">consulta general</option>
                        <option value="reclamo">reclamo</option>
                        <option value="donaciones">donaciones</option>
                        <option value="débitos automáticos">débitos automáticos</option>
                        <option value="campito escolar">charlas para colegios</option>
                        <option value="visita">visita</option>
                        <option value="denuncias">denuncias</option>
                        <option value="prensa">para medios de comunicación</option>
                        <option value="felicitaciones">felicitaciones</option>
                        <option value="otro">otro</option>
                    </select>
                    {errors.type?.type === 'required' && <p>selecciones una opción</p>}
                </div>

                <div className = {styles.item}>
                    <label className={styles.label}>Cuéntenos !!! Su consulta es importante para nosotros 😊 !!</label>
                    <input type="text" className={styles.input} placeholder="Tu respuesta"
                        {...register('description', {required: true })} />
                    {errors.description?.type === 'required' && <p>Ingrese su nombre</p>}                    
                </div>

                <input type="submit" value="Enviar" className = {styles.submit}/>
            </form>
            <Footer /> 
        </div>
    )
}

export default Contacto;