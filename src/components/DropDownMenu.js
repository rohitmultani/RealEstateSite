import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { upDate } from '../Utils/Store';

const DropDownMenu=(props)=> {
  const dispatch = useDispatch();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value)
    dispatch(upDate(event.target.value));
    // console.log(age)
  };
  const dispatchItem =(item)=>{

}
  return (
    <Box sx={{ minWidth: 140 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={`${props.name}`}
          onChange={handleChange}
        >
          {props.val.map((item)=>
          
          <MenuItem  key={item} value={item} onClick={dispatchItem(item)}> {item}</MenuItem>
          )}
          {/* <MenuItem value={2}>{props.val[1]}</MenuItem> */}
          {/* <MenuItem value={3}>{props.val[2]}</MenuItem> */}
          {/* <MenuItem value={4}>{props.val[3]}</MenuItem>  */}
        </Select>
      </FormControl>
      
    </Box>
  );
}
export default DropDownMenu;