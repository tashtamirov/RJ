import React, { useState } from 'react'
import { Button } from '@mui/base'
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';

export const FollowButton: React.FC = () => {
    const [follow, setFollow] = useState(false)
    return (
        <Button onClick={() => setFollow(!follow)}  style={{ minWidth: 30, width: 35, height: 30 }}>
            {!follow ? <AddIcon /> : <CheckIcon  style={{ fontSize: 20, color: '#2ea83a' }} />}
        </Button>
    )
}
