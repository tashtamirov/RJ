import React from 'react'
import { Button, Paper, Typography } from '@mui/material'
import MessageIcon from '@mui/icons-material/TextsmsOutlined';
import FollowIcon from '@mui/icons-material/PersonAddAltOutlined';
import styles from './FullPost.module.scss'
import PostActions from '../PostActions'

const FullPost = () => {
    return (
        <Paper elevation={0} className={styles.root} style={{ marginTop: -15 }}>
            <div className='container'>
                <Typography variant='h4' className={styles.title} >
                    Выполнявший рейс Пхукет – Москва самолет экстренно сел в Ташкенте.
                </Typography>
                <div>
                    <Typography className={styles.p}>
                        Самолет российской авиакомпании Azur Air, выполнявший рейс из Пхукета в Москву, совершил экстренную посадку в Ташкенте. Об этом 28 августа сообщается в Telegram-канале Uzbekistan Airports.
                    </Typography>
                    <Typography className={styles.p}>
                        Самолет приземлился в аэропорту столицы Узбекистана в 18:50 по местному времени (16:50 мск). В пресс-службе аэропорта уточнили, что причиной посадки стало ухудшение самочувствия одного из пассажиров.
                    </Typography>
                    <Typography className={styles.p}>После приземления самолета пассажира госпитализировали. </Typography>
                    <div style={{ width: 225 }}>
                        <PostActions />
                    </div>
                    <div className='d-flex justify-between align-center mt-30'>
                        <div className={styles.userInfo}>
                            <img src='https://techwireasia.com/wp-content/uploads/2023/07/Anonymous-hacker-group-scaled.jpg' />
                            <b>Donnie Darko</b>
                            <span>+1685</span>
                        </div>
                        <div>
                            <Button style={{color: 'black'}} size='small' variant='outlined' className='mr-15'>
                                <MessageIcon />
                            </Button >
                            <Button style={{color: 'black', font: 'inherit'}} size='small' variant='outlined'>
                                <FollowIcon />
                                <span style={{fontSize: 10}} className='ml-10'>Подписаться</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    )
}

export default FullPost
