import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const NavItem = ({ item }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        if (item.sublist)
            setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {item.title}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{ opacity: '0.8' }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {item.sublist?.map(i => (
                    <MenuItem>
                        <Link to={i.link} className='text-black'>
                            <p className='text-[black]'>{i.title}</p>
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export default NavItem