import React from 'react';
import SearchAppBar from '../Components/Navbar';
import Grid2 from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import { Container } from '@mui/system';

const Home = () => {
  
  const getCurrentWeek = () => {
    const currentDate = new Date()
    const dayOfTheWeek = 0
    const dayOfTheMonth = currentDate.getDate()
    const arrayWeek = []
    for (let index = 0; index < 8 - dayOfTheWeek   ; index++) {
      arrayWeek.push({
       day: dayOfTheWeek + index,
       date: dayOfTheMonth + index 
     })
   }
   return arrayWeek
  }

 
  const printWeek = () => {
    const week = {
      0: 'Domingo',
      1: 'Lunes',
      2: 'Martes',
      3: 'Miercoles',
      4: 'Jueves',
      5: 'Viernes',
      6: 'Sabado',
      7: 'Domingo' 
    }
    const arrayWeek = getCurrentWeek()

    const List = arrayWeek.map((item, index)=> {
      const day = item.day
      console.log(day)

      return (
        <Box key={index}>
          <h5>{week[day]}</h5>
        </Box>
      )
    })

    return List
    
  }



  return (
   <Box sx={{  }}>
    <SearchAppBar />
    <Stack sx={{ flexDirection: 'row', justifyContent: 'space-around', padding: '1rem'}} >
      <h1>Plan your meel</h1>
      <button>...</button>
    </Stack>
      <Box style={{ width: '90%', borderBottom: '1px solid black', margin: '0 auto'}} ></Box>
    <Box sx={ {height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '2rem' } } >
      {printWeek()}
    </Box>
   </Box>
  )
}

export default Home