import React, {useEffect, useState} from "react";

interface IValidation {
    minLength?: number;
    maxLength?: number;
    isEmail?: boolean;
    isEmpty?: boolean
}

export const useValidation = (value: string, validations: IValidation ) => {

    const [newValue, setNewValue] = useState<string>('')
    const [isDirty, setDirty] = useState<boolean>(false)

    const handleNewValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewValue(event.target.value)
    }

    const handleOnBlur = () => {
        setDirty(true)
    }

    const [minLengthError, setMinLengthError] = useState<boolean>(false)
    const [maxLengthError, setMaxLengthError] = useState<boolean>(false)
    const [emailError, setEmailError] = useState<boolean>(false)
    const [isEmptyError, setIsEmptyError] = useState<boolean>(false)

    useEffect(() => {
        for(const validation in validations){
            switch (validation){
                case 'minLength':
                    if(validations.minLength && newValue.length < validations?.minLength){
                        setMinLengthError(true)
                    }
                    else {
                        setMinLengthError(false)
                    }
                    break
                case 'maxLength':
                    if(validations.maxLength && newValue.length > validations?.maxLength){
                        setMaxLengthError(true)
                    }
                    else {
                        setMaxLengthError(false)
                    }
                    break
                case 'isEmail':
                const reg =
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                reg.test(newValue.toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    console.log(newValue)
                break
                case 'isEmpty':
                    newValue.length > 0 ? setIsEmptyError(false) : setIsEmptyError(true)
             }
        }
    }, [newValue])


    return{
        newValue,
        handleNewValue,
        isDirty,
        handleOnBlur,
        minLengthError,
        maxLengthError,
        emailError,
        isEmptyError
    }

}