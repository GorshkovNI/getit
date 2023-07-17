import React, {FC} from 'react'
import styles from './CreateAd.module.css'
import {SubmitHandler, useForm} from "react-hook-form";

interface ICreateAd{
    name: string,
    type: string
}

export const CreateAd:FC<ICreateAd> = ({name, type}) => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm()
    const onSubmit = (data: any) => console.log(data);

    return(
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.area}>
                <div className={styles.inputArea}>
                    <h3 className={styles.title}>{name}</h3>
                    <input
                        className={styles.input}
                        {...register(name,{
                            required: "I should enter field",
                            minLength:{
                                value: 2,
                                message: "Min 2 symbol"
                            }
                        })}
                        type={type}
                    />
                </div>
                <div>
                    {<p className={styles.error}>{(errors[name]?.message as string)}</p>}
                </div>
            </div>
            <div className={styles.area}>
                <div className={styles.inputArea}>
                    <h3 className={styles.title}>Car Model</h3>
                    <input
                        className={styles.input}
                        {...register('Car Model',{
                            required: "I should enter field",
                            minLength:{
                                value: 2,
                                message: "Min 2 symbol"
                            }
                        })}
                        type={type}
                    />
                </div>
                <div>
                    {<p className={styles.error}>{(errors[name]?.message as string)}</p>}
                </div>
            </div>
            <div className={styles.area}>
                <div className={styles.inputArea}>
                    <h3 className={styles.title}>Fuel</h3>
                    <select className={styles.input} {...register("Fuel")} >
                        <option value={'Disel'}>Disel</option>
                        <option value={'Petrol'}>Petrol</option>
                        <option value={'Gas'}>Gas</option>
                        <option value={'Electro'}>Electro</option>
                    </select>
                </div>
                <div>
                    {<p className={styles.error}>{(errors[name]?.message as string)}</p>}
                </div>
            </div>
            <button type={'submit'}>ТЫК</button>
        </form>
    )
}