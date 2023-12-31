import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import {exerciseOptions, fetchData} from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const[search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExerciseData();
  }, [])
  

  const handleSearch = async () => {
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      console.log(exercisesData)

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems="center" mt={10} justifyContent="center" p={7}>
    <Typography fontWeight={700} sx={{fontSize: {lg:'44px', xs:'30px'}}} mb={10} textAlign="center" > Choose Your Exercises </Typography>
    <Box position="relative" mb={20}>
      <TextField
        sx={{
          input:{
            fontWeight: '700',
            border:'none',
            borderRadius:'4px'
          },
          width: {lg:'800px', xs:'350px'},
          backgroundColor:'#fff',
          borderRadius:'40px'
        }}
        height={76}
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercises"
        type="text"
      />
      <Button className="search-btn"
        sx={{
          bgcolor:'Purple',
          color:'#fff',
          textTransform:'none',
          width: {lg:'175px', xs:'80px'},
          fontSize: {lg:'20px', xs:'14px'},
          height:'56px',
          position:"absolute",
          right:'0'
        }}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
    <Box sx={{position:'relative', width:'100%', p:'20px'}}>
    <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
    </Box>
    </Stack>
  )
}

export default SearchExercises