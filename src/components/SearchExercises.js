import React from 'react'
import { useEffect , useState } from 'react'; 
import {Box , Button , Stack , TextField ,Typography } from '@mui/material';

import { ExerciseOptions , fetchData } from '../utils/fetchData';
// ^ we import this from out own file 
import HorizontalScrollbar from './HorizontalScrollbar';
const SearchExercises = ({setExercises , bodyPart ,setBodyPart}) => {
  //^ main constructor to initialize SearchExercises function
  const [search, setSearch] = useState('');
  //^ creating useState or background
  // const [exercises ,setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', ExerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();

  },[])
  const HandleSearch = async () =>{
    //^ for feaching data we need from rapid API 
    if (search){
      const exercisesData = await fetchData
      ('https://exercisedb.p.rapidapi.com/exercises',ExerciseOptions);
      console.log(exercisesData);
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
    <Typography  color = {'#77ad95'} fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
            The Body Achieves what the <br />  Mind Believes
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, 
              width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' 
              }}
          value = {search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
         <Button className="search-btn" sx={{ bgcolor: '#2a314e', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={HandleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} 
        bodyPart = {bodyPart}
        setBodyPart= {setBodyPart}
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises