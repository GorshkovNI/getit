import React, {useState} from "react";
import './Registration.scss'
import {Modal} from "../../../../shared/Modal/Modal";
import {useTranslation} from "react-i18next";
import {TextField} from "@mui/material";
import {Input} from "../../../../shared/Input/Input";
import {useValidation} from "../../../../hooks/useValidation/useValidation";
import {Button} from "../../../../shared/Button/Button";

export const Registration = () => {

    const {t} = useTranslation();

    const [isOpenModal, setIsOpenModal] = useState<boolean>(true)

    const email = useValidation('', { isEmail: true })
    const password = useValidation('', {minLength: 3, maxLength: 20})
    const name = useValidation('', {isEmpty: true})
    const phone = useValidation('', {isEmpty: true})
    // const [name, setName] = useState<string>('')
    // const [phone, setPhone] = useState<string>('')

    // const enterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setName(e.target.value)
    // }
    //
    // const enterPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setPhone(e.target.value)
    // }

    const closeModal = () => {
        setIsOpenModal(false)
    }

    return(
        <Modal onClose={closeModal} isOpen={isOpenModal}>
            <h1 className={'title'}>{t('registration')}</h1>
            <form className={'form'}>
                <Input
                    error={name.isDirty && name.isEmptyError}
                    onBlur={() => name.handleOnBlur()}
                    type={'text'}
                    value={name.newValue}
                    onChange={name.handleNewValue}
                    placeholder={t('name')}
                    className='input' />
                <Input
                    error={email.isDirty && email.emailError}
                    onBlur={() => email.handleOnBlur()}
                    type={'email'}
                    value={email.newValue}
                    onChange={email.handleNewValue}
                    placeholder={t('email')}
                    className='input' />
                <Input
                    type={'phone'}
                    value={phone.newValue}
                    onChange={phone.handleNewValue}
                    placeholder={t('phone')}
                    className='input' />
                <Input
                    error={password.isDirty && password.minLengthError || password.maxLengthError}
                    onBlur={() => password.handleOnBlur()}
                    type={'password'}
                    value={password.newValue}
                    onChange={password.handleNewValue}
                    placeholder={t('password')}
                    className='input'
                    minLength={3}
                    maxLength={20}
                />
                <Button className={'submit'} size={'big'} mode={'primary'}>{t('submit')}</Button>
            </form>
        </Modal>
    )
}