import React from "react";
import { useForm } from "react-hook-form"
import styles from "./Voluntario.module.css"

const Voluntario = () =>{
    
    const { register, handleSubmit, formState:{ errors } } = useForm();

    const onSubmit = (data) => {
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
                    <label className={styles.label}>Nombre</label>
                    <input type="text" className={styles.input} placeholder="Tu respuesta"
                        {...register('name', {required: true })}
                    />
                    {errors.name?.type === 'required' && <p>Ingrese su nombre</p>}
                    
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>Apellido</label>
                    <input type="text" className={styles.input} placeholder="Tu respuesta"
                        {...register('surname', {required: true })}
                    />
                    {errors.surname?.type === 'required' && <p>Ingrese su apellido</p>}
                    
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
                        {...register('location', {required: true})}
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
                    {...register('location', {required: true})}/>
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>Qué modalidad preferis?</label>
                    <select className={styles.select} {...register('modality', {required: true})}>
                        <option value="virtual">Virtual</option>
                        <option value="presential">Presencial</option>
                        <option value="hybrid">Hibrido</option>
                    </select>
                    {errors.modality?.type === 'required' && <p>Modalidad requerida</p>}
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>¿De cuánto tiempo dispones para realizar una tarea voluntaria?</label>
                    <input type="text" className={styles.input} placeholder="Tu respuesta"/>
                </div>
                
                <div className = {styles.itemCheckbox}>
                    <label className={styles.label}>¿ De cuáles días dispones?</label>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" value='lunes' className={styles.checkbox} 
                        {...register('availableDay', {required: true})}/>
                        <p>Lunes</p>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" value='martes' className={styles.checkbox} 
                        {...register('availableDay', {required: true})}/>
                        <p>Martes</p>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" value='miercoles' className={styles.checkbox}
                        {...register('availableDay', {required: true})}/>
                        <p>Miercoles</p>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" value='jueves' className={styles.checkbox}
                        {...register('availableDay', {required: true})}/>
                        <p>Jueves</p>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" value='viernes' className={styles.checkbox}
                        {...register('availableDay', {required: true})}/>
                        <p>Viernes</p>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" value='sabado' className={styles.checkbox}
                        {...register('availableDay', {required: true})}/>
                        <p>Sábado</p>
                    </div>
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>¿Qué crees que podes sumar personalmente? (No es una pregunta sobre tu profesión, sino sobre vos)</label>
                    <input type="text" className={styles.input} placeholder="Tu respuesta"/>
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>¿Por que querés ser voluntario del Campito?</label>
                    <input type="text" className={styles.input} placeholder="Tu respuesta"/>
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>¿Tenés vehiculo propio?</label>
                    <select className={styles.select} {...register('vehicle', {required: true})}>
                        <option value="yes">Si</option>
                        <option value="no">No</option>
                    </select>
                    {errors.modality?.type === 'required' && <p>Seleccione una opción</p>}
                </div>
                
                <div className = {styles.item}>
                    <label className={styles.label}>¿Harías carpooling?</label>
                    <select className={styles.select} {...register('carpooling', {required: true})}>
                        <option value="yes">Si</option>
                        <option value="no">No</option>
                        <option value="maybe">Tal vez</option>
                    </select>
                    {errors.modality?.type === 'required' && <p>Seleccione una opción</p>}
                </div>

                <input type="submit" value="Enviar" className = {styles.submit}/>
            </form>        
        </div>
    )
}

export default Voluntario;