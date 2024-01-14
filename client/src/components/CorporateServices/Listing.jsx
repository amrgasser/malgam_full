
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import React from 'react'
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