import { Fragment } from "react"
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import DropDownMenu from "./DropDownMenu";
import Button from '@mui/material/Button';
import classes from './Styles.module.css';
const Filter=()=>{

    return(
        <Fragment>
            <Box className={classes.filter}
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          border: `1px solid`,
          boxShadow:'10',
          borderRadius: 1,
          m:'auto',
          p:4,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
        <DropDownMenu/>
        <Divider orientation="vertical" variant="middle" flexItem />
        <DropDownMenu/>
        <Divider orientation="vertical" variant="middle" flexItem />
        <DropDownMenu/>
        <Divider orientation="vertical" variant="middle" flexItem />
        <DropDownMenu/>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Button variant="contained" sx={{p:2}}>Search</Button>
      </Box>
        </Fragment>
    )
}
export default Filter;