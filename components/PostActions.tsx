import React, { CSSProperties } from 'react'
import { IconButton } from '@mui/material';
import CommentIcon from '@mui/icons-material/ModeCommentOutlined';
import RepostIcon from '@mui/icons-material/RepeatOutlined';
import BookmarkIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShareIcon from '@mui/icons-material/ShareOutlined';

const PostActions: React.FC = () => {

    const styles: CSSProperties = {
        'display': 'flex',
        'justifyContent': 'space-between',
        'position': 'relative',
        'top': '5',
        'listStyle': 'none',
        'padding': '0',
        'margin': '0'
    }

    return (
        <ul style={styles}>
            <li>
                <IconButton>
                    <CommentIcon />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <RepostIcon />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <BookmarkIcon />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <ShareIcon />
                </IconButton>
            </li>
        </ul>
    )
}

export default PostActions
