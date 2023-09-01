import React from 'react'
import { Paper, Typography } from "@mui/material";
import Image from 'next/image'
import styles from './Post.module.scss'

import Link from 'next/link';
import PostActions from '../PostActions';

const Post: React.FC = () => {
    return (
        <Paper classes={{ root: styles.root }} elevation={0} className='p-20'>
            <Typography variant="h5" className={styles.title}>
                <Link href='/news/test-123'>
                Кот прилег отдохнуть в английском парке миниатюр и стал гером шуток и фотожаб.
                </Link>
            </Typography>
            <Typography className="mt-10 mb-15">
                Пока одни не могли соотнести размеры животного и окружениия, другие начали создавать апокалиптические сюжеты  котом в главной роли.
            </Typography>
            <Image
                width={600}
                height={400}
                src={"https://bryansktoday.ru/uploads/common/0ac33254f665c523_XL.jpg"}
                alt={""}
            />
            <div style={{width: 225}}>
                <PostActions />
            </div>
        </Paper>
    )
}

export default Post
