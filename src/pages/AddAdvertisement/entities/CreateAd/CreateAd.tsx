import React, {FC} from 'react'
import styles from './CreateAd.module.css'
import {SubmitHandler, useForm} from "react-hook-form";
import {Button} from "@mui/material";
import {ucFirst} from "@utils/ucFirst";

interface IFields{
    id: string,
    name: string,
    type: string,
    options?:string
}

interface ICreateAd{
    fields:IFields[]
}

export const CreateAd:FC<ICreateAd> = ({fields}) => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm()
    const onSubmit = (data: any) => {
        console.log(data)
    };

    return(
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.area}>
                <div className={styles.inputArea}>
                    <span className={styles.title}>Title Ad</span>
                    <input
                        className={styles.input}
                        {...register('title',
                            //     {
                            //     required: "I should enter field",
                            //     minLength:{
                            //         value: 2,
                            //         message: "Min 2 symbol"
                            //     }
                            // }
                        )}
                        type='text'
                    />
                </div>
                <h1>Describe your product</h1>
                { fields.map((item: IFields) => {
                    return(
                        <>
                            <div className={styles.inputArea}>
                                <span className={styles.title}>{ucFirst(item.name)}</span>
                                <input
                                    className={styles.input}
                                    {...register(item.name,
                                    //     {
                                    //     required: "I should enter field",
                                    //     minLength:{
                                    //         value: 2,
                                    //         message: "Min 2 symbol"
                                    //     }
                                    // }
                                    )}
                                    type={item.type}
                                />
                            </div>
                            {/*<div>*/}
                            {/*    {<p className={styles.error}>{(errors[item.name]?.message as string)}</p>}*/}
                            {/*</div>*/}
                        </>
                    )
                    })
                }
                <h1>Details</h1>
                <div className={styles.inputArea}>
                    <span className={styles.title}>Price</span>
                    <input
                        className={styles.input}
                        {...register('price',
                            //     {
                            //     required: "I should enter field",
                            //     minLength:{
                            //         value: 2,
                            //         message: "Min 2 symbol"
                            //     }
                            // }
                        )}
                        type='number'
                    />
                    <span className={styles.postscript}>MRU</span>
                </div>
                <div className={styles.inputArea}>
                    <span className={styles.title}>Ad Description</span>
                    <textarea className={styles.textArea} {...register("description")} />
                </div>
            </div>
            {/*<div className={styles.area}>*/}
            {/*    <div className={styles.inputArea}>*/}
            {/*        <h3 className={styles.title}>Car Model</h3>*/}
            {/*        <input*/}
            {/*            className={styles.input}*/}
            {/*            {...register('Car Model',{*/}
            {/*                required: "I should enter field",*/}
            {/*                minLength:{*/}
            {/*                    value: 2,*/}
            {/*                    message: "Min 2 symbol"*/}
            {/*                }*/}
            {/*            })}*/}
            {/*            type={type}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        {<p className={styles.error}>{(errors[name]?.message as string)}</p>}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={styles.area}>*/}
            {/*    <div className={styles.inputArea}>*/}
            {/*        <h3 className={styles.title}>Fuel</h3>*/}
            {/*        <select className={styles.input} {...register("Fuel")} >*/}
            {/*            <option value={'Disel'}>Disel</option>*/}
            {/*            <option value={'Petrol'}>Petrol</option>*/}
            {/*            <option value={'Gas'}>Gas</option>*/}
            {/*            <option value={'Electro'}>Electro</option>*/}
            {/*        </select>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        {<p className={styles.error}>{(errors[name]?.message as string)}</p>}*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Button variant="contained"  type={'submit'}>SUBMIT</Button>
        </form>
    )
}