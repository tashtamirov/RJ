import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogContentText,
    TextField,
    Typography
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './AuthDialog.module.scss'
import Main from './forms/Main';
import Login from './forms/Login';
import Register from './forms/Register';

interface AuthDialogProps {
    onClose: () => void,
    visible: boolean,
}

const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, visible }) => {
    const [formType, setFormType] = useState<'main' | 'login' | 'register'>('main')
    return (
        <>
            <Dialog
                open={visible}
                onClose={onClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth='xs'
                fullWidth
            >
                <DialogContent>
                    <DialogContentText>
                        <div className={styles.content}>
                            <Typography className={styles.title}>
                                {formType === 'main' ? (
                                    'Вход в TJ'
                                ) : (
                                    <div className={styles.backArrow}>
                                        <ArrowBackIcon fontSize='small' />
                                        <span onClick={() => setFormType('main')}>К авторизации</span>
                                    </div>
                                )}
                            </Typography>
                            {formType === 'main' && (<Main onOpenLogin={() => setFormType('login')} />)}
                            {formType === 'login' && (<Login onOpenRegister={() => setFormType('register')} />)}
                            {formType === 'register' && (<Register onOpenRegister={() => setFormType('register')} 
                            onOpenLogin={() => setFormType('login')} />)}
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog></>
    )
}

export default AuthDialog
