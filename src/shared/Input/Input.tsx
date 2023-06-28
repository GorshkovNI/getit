import React, {FC} from "react";
import './Input.scss'
import cn from 'classnames'

interface IInput{
    className?: string,
    type: string,
    placeholder: string | 'Enter',
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?: () => void,
    value: any,
    error?: boolean
    minLength?: number,
    maxLength?: number
}

export const Input:FC<IInput> = ({type, className, placeholder, onChange, value, error , onBlur, minLength, maxLength} ) => {
    console.log(error)
    return(
        <div className={cn('container', className, {
            error: error === true
        })}>
            <div className={'area'}>
                <input type={type} value={value} className={'input'} placeholder={placeholder} onChange={onChange} onBlur={onBlur} minLength={minLength} maxLength={maxLength} />
            </div>
        </div>
    )
}