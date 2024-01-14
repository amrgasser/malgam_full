import React from 'react'

import Typography from '@mui/Typography'
import ListItem from '@mui/ListItem'
import ListItemIcon from '@mui/ListItemIcon'
import ListItemText from '@mui/ListItemText'


import styled from 'styled-components';
import Check from '@mui/icons-material/Check'

const Listing = ({ title, listings, icon }) => {
    const [dense, setDense] = React.useState(false);

    return (
        <div className="grid grid-cols-1">
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                {title}
            </Typography>

            <div className='flex flex-col flex-start justify-between'>
                {
                    listings.map((l) => {
                        return (
                            <>
                                <ListItem>
                                    <ListItemIcon>
                                        <Check />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={l}
                                    />
                                </ListItem>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Listing