import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './css/Card.css'


function Cards(props){
    const genres = props.genre;
    const renderListOfGenres = (genres) => {
        return genres.map(genres => <li>{genres} </li> )
      }
      const name=props.name;
      const language=props.language;
      const url=props.url;
      const genre=props.genre;
      const summary=props.summary;

    return(
        <div className="cardcontainer">
        <Card  sx={{ maxWidth: 545, borderRadius:'25px' }}>
        <CardHeader 
          sx={{ textAlign:"center" }}
          title={props.name}
          subheader={props.language}
        />
         <CardMedia className='images'
          height="350"
          sx={{ padding: "0 1em 0 0", objectFit: "contain",borderRadius:10}}
          component="img"
          image={props.url} 
        />
        <CardContent>
          <Typography  variant="body2" color="red" textAlign="center">
            {renderListOfGenres(genres)}
          </Typography>
          <Typography  variant="body2" color="black" textAlign="center">
            <div className='summary' dangerouslySetInnerHTML={{__html: props.summary}}></div>
          </Typography>
        </CardContent>
        
        
        </Card>
        </div>
    )
}
    
export default Cards