import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

function DuckCards({img, title, desc}: any) {
  return (
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="ducks1"
        height="140"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default DuckCards;
