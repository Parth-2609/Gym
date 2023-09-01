import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollBar from './HorizontalScrollbar';
import Loader from './Loader'; 

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: {lg: '50px', xs:'0'}}}>
      <Typography variant="h3" mb={5}>
        Similar <span style= {{ color: '#ff2625' }}> Target Muscle </span> Exercises
      </Typography>
      <Stack directions="row" sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercises.length ? 
          <HorizontalScrollBar data={targetMuscleExercises} />
          : <Loader /> }
      </Stack>
      <Typography variant="h3" mb={5}>
        Similar <span style= {{ color: '#ff2625' }}> Equipment </span> Exercises
      </Typography>
      <Stack directions="row" sx={{ p: '2', position: 'relative' }}>
        {equipmentExercises.length ? 
          <HorizontalScrollBar data={equipmentExercises} />
          : <Loader /> }
      </Stack>
    </Box>
  )
}

export default SimilarExercises