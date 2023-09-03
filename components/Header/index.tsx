"use client"
import React from 'react'
import Link from 'next/link';

import {
    Paper,
    Button,
    IconButton,
    Avatar,
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'
import MessageIcon from '@mui/icons-material/Sms'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MenuIcon from '@mui/icons-material/Menu'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LogoIcon from '@/public/LogoIcon'
import styles from './Header.module.scss'
import AuthDialog from '../AuthDialog';
import UserIcon from '@mui/icons-material/AccountCircleOutlined';

const Header: React.FC = () => {
    const [authVisible, setAuthVisible] = React.useState(false);

    const openAuthDialog = () => {
        setAuthVisible(true);
    };

    const closeAuthDialog = () => {
        setAuthVisible(false);
    };

    return (
        <Paper classes={{ root: styles.root }} elevation={0}>
            <div className='d-flex align-center'>
                <IconButton><MenuIcon /></IconButton>
                <Link href='/'>
                    <LogoIcon />
                </Link>
                <div className={styles.searchBlock}>
                    <SearchIcon />
                    <input placeholder='Поиск' />
                </div>
                <Link href='/write'>
                    <Button className={styles.penButton}>
                        Новая запись
                    </Button>
                </Link>
            </div>

            <div className='d-flex align-center'>
                <IconButton><MessageIcon /></IconButton>
                <IconButton><NotificationsIcon /></IconButton>
                {/* <Link href='/profile/1'>
                    <Avatar className='ml-15' alt="Usman T" src="https://tipik.ru/wp-content/uploads/2021/05/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0-%D0%B2-%D0%B2%D0%BA-%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D1%82%D0%BE%D0%BF%D0%BE%D0%B2%D1%8B%D1%85-%D0%B0%D0%B2%D0%BE%D0%BA-28.jpg" />
                </Link>
                <ExpandMoreIcon className={styles.avatar_arrow} /> */}
                <button onClick={openAuthDialog} className={styles.btnUser}>
                    <UserIcon />
                    войти
                </button>
            </div>
            <AuthDialog visible={authVisible} onClose={closeAuthDialog} />
        </Paper>
    )
}

export default Header

