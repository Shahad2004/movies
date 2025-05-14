import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://api.themoviedb.org/3/movie/popular?api_key=d1929a2c57bcd64fab1867190b8be5cd")
      .then((MoviesReasponse) => {
        setMovies(MoviesReasponse.data.results.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);

      })
  }, []);
  if (loading) return <p>Loading movies...</p>;
  if (error) return <p style={{ color: "red" }}>❌ {error}</p>;

  return (
    <div style={{
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#fff",
      width: "100%",
      margin: 0
    }}>
      <h1>Welcome to Movies!</h1>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          width: "100%"
        }}
      >
        {movies.map((movie, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.original_title}
              height="300"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movie.original_title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {movie.overview.length > 150
                  ? movie.overview.slice(0, 150) + "..."
                  : movie.overview}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button
                size="small"
                component={Link}
                to={`/movies/${movie.id}`}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </div>
  );
};
export default Movies;
