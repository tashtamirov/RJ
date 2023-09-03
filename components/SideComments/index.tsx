import React from 'react';
import ArrowIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './SideComments.module.scss';
import clsx from 'clsx';
import data from '../../data'
import CommentItem from '../CommentItem';



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
            {data.comments.popular.map((obj) => (
                visible &&  <CommentItem key={obj.id} {...obj} /> 
            ))}
        </div>
    );
}; 

export default SideComments
