import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import classes from './Styles.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { upDateName } from '../Utils/Store';
import { upDateData } from '../Utils/Store';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0 ,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
  
  const SearchProperties=()=> {
    
    const dispatch = useDispatch();
    const searchHandler=(e)=>{
    console.log(e.target.value)
    dispatch(upDateData(e.target.value));
    dispatch(upDateName('Search'));
    
  }

  return (
    <React.Fragment>
    <Box sx={{ display:'flex',flexGrow: 1 }} className={classes.head}>
    
      <Toolbar variant="dense" sx={{m:'auto'}}>
        
        <Typography variant="h4" color="inherit" component="div" sx={{p:'auto',m:'auto',pb:4,pt:4}}>
          Search Properties To Rent
        </Typography>
        <Typography variant="h5" color="inherit" component="div" >
        <Search sx={{border:1}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={searchHandler}
            />
          </Search> 
  
        </Typography>
      </Toolbar>
    
  </Box>  
  </React.Fragment>
  )
      
}
export default SearchProperties;
