import React from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { Link } from "react-router-dom"

const NavItem = ({ item, setActive }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    if (item.sublist) setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button id="demo-positioned-button" aria-controls={open ? "demo-positioned-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
        {item.link ?
          <Link to={item.link} className="text-white">
            <p className="text-[white] text-[12px] md:text-[20px]" onClick={() => setActive(item.title)}>{item.title}</p>
          </Link>
          :
          <p className="text-[10px] md:text-[18px] text-white">{item.title}</p>
        }
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ opacity: "0.8" }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        {item.sublist?.map((i) => (
          <MenuItem
            sx={{
              color: "black",
            }}>
            <Link to={i.link} className="text-black">
              <p className="text-[black] text-[12px] md:text-[20px]" onClick={() => setActive(i.title)}>{i.title}</p>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default NavItem
