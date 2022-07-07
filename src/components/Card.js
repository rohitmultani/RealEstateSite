import {memo} from 'react'
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import classes from "./Styles.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import WbShadeIcon from "@mui/icons-material/WbShade";

const PropertyCard = (props) => {
  const img = props.image;
  return (
    <Card sx={{ minWidth: 345, maxWidth: 370, borderStartStartRadius: 50 }}>
      <CardMedia
        component="img"
        height="204"
        image={`${img}`}
        alt="Not Available,Sold Out"
        sx={{ borderEndEndRadius: 50, borderStartStartRadius: 50 }}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
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
        <Typography variant="body2">{props.description}</Typography>
      </CardContent>
      <CardActions>
        <BedIcon /> {props.bed} Beds
        <Divider orientation="vertical" variant="middle" flexItem />
        <BathtubIcon />
        {props.bath} Bathrooms
        <Divider orientation="vertical" variant="middle" flexItem />
        <WbShadeIcon />
        {props.type}
      </CardActions>
    </Card>
  );
};

export default memo(PropertyCard);
