import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({elemento}) => {
  return (
    <Card className='container-fluid text-center p-5'>
      <div className='row'>
        <CardActionArea  className='align-items-center'>
          <CardMedia className='w-100 px-1 resaltado-img'
            component="img"
            height="200"
            image={elemento.img}
            alt={elemento.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {elemento.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {elemento.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/itemDetail/${elemento.id}`}>
            <Button size="small" color="primary" variant= "contained">
              VER DETALLE
            </Button>
          </Link>
        </CardActions>
      </div>
    </Card>
  )
}

export default ProductCard