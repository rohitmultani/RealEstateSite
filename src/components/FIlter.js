import { Fragment } from "react"
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import DropDownMenu from "./DropDownMenu";
import Button from '@mui/material/Button';
import classes from './Styles.module.css';
import { useDispatch,useSelector } from "react-redux";
import { resetState } from "../Utils/Store";
const Filter=()=>{
  const dispatch = useDispatch();
  const data = useSelector((state=>state.Notes))
  const reset=()=>{
    
dispatch(resetState(!data.reset)); 
  }
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
        <DropDownMenu name={"Bathrooms"} val={['1','2','3']}/>
        <Divider orientation="vertical" variant="middle" flexItem  />
        <DropDownMenu name={"Bedrooms"} val={['1','2','3','4']}/>
        <Divider orientation="vertical" variant="middle" flexItem />
        <DropDownMenu name={"Price"} val={['100-150','150-200','200-250','250-300','300-350','350-400','400-500','500-600']}/>
        <Divider orientation="vertical" variant="middle" flexItem />
        <DropDownMenu name={"Type"} val={['Flat','Terraced house','End terrace house','Semi-detached house']}/>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Button variant="contained" sx={{p:2}} onClick={reset}>Reset</Button>
      </Box>
        </Fragment>
    )
}
export default Filter;