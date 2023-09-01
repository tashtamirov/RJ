import React from 'react';
import ArrowIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './SideComments.module.scss';
import clsx from 'clsx';

export const comments = [
    {   
        id: 1,
        user: {
            fullname: 'Вася Попов',
            avatarUrl: 'https://tipik.ru/wp-content/uploads/2021/05/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0-%D0%B2-%D0%B2%D0%BA-%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D1%82%D0%BE%D0%BF%D0%BE%D0%B2%D1%8B%D1%85-%D0%B0%D0%B2%D0%BE%D0%BA-28.jpg'
        },
        text: 'Теперь каждое рабочее утро после кровати я перекладываюсь туда спать еще на часок',
        post: {
            title: 'какая дома у нас ванна?'
        },
        createdAt: new Date().toString()
    },
    {   
        id: 2,
        user: {
            fullname: 'Вася Попов',
            avatarUrl: 'https://tipik.ru/wp-content/uploads/2021/05/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0-%D0%B2-%D0%B2%D0%BA-%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D1%82%D0%BE%D0%BF%D0%BE%D0%B2%D1%8B%D1%85-%D0%B0%D0%B2%D0%BE%D0%BA-28.jpg'
        },
        text: 'Теперь каждое рабочее утро после кровати я перекладываюсь туда спать еще на часок',
        post: {
            title: 'какая дома у нас ванна?'
        },
        createdAt: new Date().toString()
    },
    {   
        id: 3,
        user: {
            fullname: 'Вася Попов',
            avatarUrl: 'https://tipik.ru/wp-content/uploads/2021/05/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0-%D0%B2-%D0%B2%D0%BA-%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D1%82%D0%BE%D0%BF%D0%BE%D0%B2%D1%8B%D1%85-%D0%B0%D0%B2%D0%BE%D0%BA-28.jpg'
        },
        text: 'Теперь каждое рабочее утро после кровати я перекладываюсь туда спать еще на часок',
        post: {
            title: 'какая дома у нас ванна?'
        },
        createdAt: new Date().toString()
    }
]

interface CommentItemProps {
    user: {
        fullname: string,

    }
    text: string,
    post: {
        title: string
    }
}

const CommentItem: React.FC<CommentItemProps> = ({ user, text, post }) => {
    return (
        <div className={styles.commentItem}>
            <div className={styles.userInfo}>
                <img src='' />

                <a href='#'>
                    <b>{user.fullname}</b>
                </a>
            </div>
            <p className={styles.text}>{text}</p>
            <a href='#'>
                <span className={styles.postTitle}>{post.title}</span>
            </a>
        </div>
    )
}

const SideComments = () => {

    const [visible, setVisible] = React.useState(true);

    const toggleVisible = () => {
        setVisible(!visible);
    };

    return (
        <div className={clsx(styles.root, !visible && styles.rotated)}>
            <h3 onClick={toggleVisible}>
                Комментарии <ArrowIcon />
            </h3>
            {comments.map((obj) => (
                <CommentItem key={obj.id} {...obj} />
            ))}
        </div>
    );
}; 

export default SideComments
