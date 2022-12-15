import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Contacto.module.css"

const Contacto = () =>{
    
    const { register, handleSubmit, formState:{ errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    
    return(
        <div className={styles.mainContainer}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className = {styles.item}>
                    <label className={styles.label}>Nombre</label>
                    <input type="text" className={styles.input} placeholder="Tu respuesta"
                        {...register('name', {required: true })}
                    />
                    {errors.name?.type === 'required' && <p className={styles.error}>Ingrese su nombre</p>}
                    
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>Apellido</label>
                    <input type="text" className={styles.input} placeholder="Tu respuesta"
                        {...register('surname', {required: true })}
                    />
                    {errors.surname?.type === 'required' && <p className={styles.error}>Ingrese su apellido</p>}
                    
                </div>

                <div className = {styles.item}>
                    <label className={styles.label}>Correo</label>
                    <input type="text" className={styles.input} placeholder="Tu dirección de correo electrónico"
                        {...register('email', {
                            required: true,
                            pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/    
                        })}
                    />
                    {errors.email?.type === 'pattern' && <p className={styles.error}>Formato de Email incorrecto</p>}
                    {errors.email?.type === 'required' && <p className={styles.error}>Email requerido</p>}
                </div>

                <div className = {styles.item}>
                    <label className={styles.label}>Telefono</label>
                    <input type="tel" className={styles.input} placeholder="ej: 1161906190" 
                        {...register('telephone', { required: true, pattern: /^\d{3}\d{3}\d{4}$/ })}
                    />
                    {errors.telephone?.type === 'required' && <p className={styles.error}>Número de telefono requerido</p>}
                    {errors.telephone?.type === 'pattern' && <p className={styles.error}>El numero ingresado es invalido</p>}
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>Asunto</label>
                    <select className={styles.select} {...register('subject', {required: true})}>
                        <option value="adoptions">Adopciones</option>
                        <option value="campitoEscolar">Campito Escolar</option>
                        <option value="donations">Donaciones</option>
                        <option value="patronage">Madrinas / Padrinos</option>
                    </select>
                    {errors.subject?.type === 'required' && <p className={styles.error}>Modalidad requerida</p>}
                </div>

                <div className = {styles.item}>
                    <label className={styles.label}>Mensaje</label>
                    <textarea className={styles.inputAsunto} 
                        {...register('message', { required: true})}
                    />
                    {errors.message?.type === 'required' && <p className={styles.error}>Escribir motivo de contacto</p>}
                </div>

                <input type="submit" value="Enviar" className = {styles.submit}/>
            </form>
        </div>
    )
}

export default Contacto;