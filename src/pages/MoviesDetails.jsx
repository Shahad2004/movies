import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

const MoviesDetails = () => {
  const[MoviesDetails,setMoviesDetails] = useState([]);
  const { id } = useParams();
  const [loading,MovieLoading] = useState(true);
  const [error,setError] = useState(null);

  const api_key = 'd1929a2c57bcd64fab1867190b8be5cd';

  useEffect(()=>{
    axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
.then(MoviesReasponse =>{
    setMoviesDetails(MoviesReasponse.data);
    MovieLoading(false);
})
.catch(error =>{
    console.error('Error fetching movies:', error);
    setError(error);
    MovieLoading(false);
});
}, [id]);

if (error) return <p style={{ color: "red" }}>❌ Error loading movie.</p>;
if (loading) return <p>Loading movie details...</p>;
return (
    <Box sx={{ padding: 4, display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500/${MoviesDetails.poster_path}`}
          alt={MoviesDetails.original_title}
        />
        <CardContent>
          <Typography variant="h4" component="div">
            {MoviesDetails.original_title}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {MoviesDetails.overview}
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            Release Date: {MoviesDetails.release_date}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default MoviesDetails;
