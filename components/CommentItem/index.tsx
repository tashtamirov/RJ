import Link from 'next/link'
import React from 'react'
import styles from '../SideComments/SideComments.module.scss'


interface CommentItemProps {
    user: {
        id: number,
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
                <img src='' alt='User avatar' />
                <Link href={`/profile/${user.id}`}>
                    <b>{user.fullname}</b>
                </Link>
            </div>
            <p className={styles.text}>{text}</p>
            <Link href={`/news/${user.id}`}>
                <b className={styles.postTitle}>{post.title}</b>
            </Link>
        </div>
    )
}

export default CommentItem
