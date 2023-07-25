import React from 'react'
import styles from './Cars.module.css'
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {useForm, Controller, Control} from "react-hook-form";

interface IFields{
    id: string,
    name: string,
    type: string,
    options?:string
}

type FormData = {
    title: string,
    customMarka: string,
    customModel: string,
    customYear: string,
    price: number,
    marka: string,
    model: string,
    description: string,
    year: string,
    fuel: string,
    gearbox: string,
    owners: string,
    mileage: string
};


export const Cars = () => {

    const {register, handleSubmit, watch, control, formState: {errors}} = useForm<FormData>()
    const selectedMarkaOption = watch('marka');
    const selectedModelOption = watch('model');
    const selectedYearOption = watch('year');


    const onSubmit = (data: any) => console.log(data);

    return(
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.area}>
                <div className={styles.inputArea}>
                    <span className={styles.title}>Title Ad</span>
                    <input
                        className={styles.input}
                        {...register('title',
                        )}
                        type='text'
                    />
                </div>
                <h1>Tell us about your car</h1>
                <div className={styles.inputArea}>
                    <span className={styles.title}>Marka</span>
                    <div className={styles.container}>
                        <select {...register("marka")}  className={styles.input} >
                            <option disabled selected>Choose marka</option>
                            <option value="custom">Other</option>
                            <option value="option1">Audi</option>
                            <option value="option2">BMW</option>
                            <option value="option3">Opel</option>
                        </select>

                        {selectedMarkaOption === 'custom' && (
                            <input
                                {...register("customMarka")}
                                className={styles.input}
                                type="text"
                                placeholder="Enter your choice"
                            />
                        )}
                    </div>
                </div>
                {(selectedMarkaOption !== 'custom' && selectedMarkaOption?.length  > 0 ) && <div className={styles.inputArea}>
                    <span className={styles.title}>Model</span>
                    <div className={styles.container}>
                        <select {...register("model")}  className={styles.input} >
                            <option disabled selected>Choose Model</option>
                            <option value="custom">Other</option>
                            <option value="option1">A3</option>
                        </select>

                        {selectedModelOption === 'custom' && (
                            <input
                                {...register("customModel")}
                                className={styles.input}
                                type="text"
                                placeholder="Enter your choice"
                            />
                        )}
                    </div>
                </div>}
                {(selectedModelOption !== 'custom' && selectedModelOption?.length  > 0 ) && <div className={styles.inputArea}>
                    <span className={styles.title}>Year</span>
                    <div className={styles.container}>
                        <select {...register("year")}  className={styles.input} >
                            <option disabled selected>Choose Model</option>
                            <option value="custom">Other</option>
                            <option value="option1">2018</option>
                        </select>

                        {selectedYearOption === 'custom' && (
                            <input
                                {...register("customYear")}
                                className={styles.input}
                                type="text"
                                placeholder="Enter your choice"
                            />
                        )}
                    </div>
                </div>}
                <div className={styles.inputArea}>
                    <span className={styles.title}>Fuel</span>
                    <FormControl component="fieldset">
                        <Controller
                            name="fuel"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <RadioGroup className={styles.radioForm} {...field}>
                                    <FormControlLabel value="petrol" control={<Radio />} label="Petrol" />
                                    <FormControlLabel value="diesel" control={<Radio />} label="Diesel" />
                                </RadioGroup>
                            )}
                        />
                    </FormControl>
                </div>
                <div className={styles.inputArea}>
                    <span className={styles.title}>Gearbox</span>
                    <FormControl component="fieldset">
                        <Controller
                            name="gearbox"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <RadioGroup className={styles.radioForm} {...field}>
                                    <FormControlLabel value="manual" control={<Radio />} label="Manual" />
                                    <FormControlLabel value="automatic" control={<Radio />} label="Automatic" />
                                </RadioGroup>
                            )}
                        />
                    </FormControl>
                </div>
                <div className={styles.inputArea}>
                    <span className={styles.title}>Gearbox</span>
                    <FormControl component="fieldset">
                        <Controller
                            name="owners"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <RadioGroup className={styles.radioForm} {...field}>
                                    <FormControlLabel value="1" control={<Radio />} label="1" />
                                    <FormControlLabel value="2" control={<Radio />} label="2" />
                                    <FormControlLabel value="3" control={<Radio />} label="3" />
                                    <FormControlLabel value="4+" control={<Radio />} label="4+" />
                                </RadioGroup>
                            )}
                        />
                    </FormControl>
                </div>
                <div className={styles.inputArea}>
                    <span className={styles.title}>Mileage</span>
                    <input
                        className={styles.input}
                        {...register('mileage',
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
                </div>
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
            <Button variant="contained"  type={'submit'}>SUBMIT</Button>
        </form>
    )
}