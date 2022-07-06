import {useState} from 'react';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import classes from './Styles.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import WbShadeIcon from '@mui/icons-material/WbShade';

const PropertyCard=(props)=> {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
const img=props.image;
  return (
    <Card sx={{ maxWidth: 345,borderStartStartRadius:50}} >
      <CardMedia
        component="img"
        height="204"
        image={`${img}`}
        alt="Paella dish"
        sx={{borderEndEndRadius:50,borderStartStartRadius:50}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{display:'flex',justifyContent:'space-between'}}>
            <div>
        <span className={classes.amt}> ${props.price} </span>/month
        </div>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.street}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions >
          <BedIcon /> {props.bed} Beds
          <Divider orientation="vertical" variant="middle" flexItem />
          <BathtubIcon />{props.bath} Bathrooms
          <Divider orientation="vertical" variant="middle" flexItem />
          <WbShadeIcon />{props.type}
    
      </CardActions>
      
    </Card>
  );
}

export default PropertyCard;