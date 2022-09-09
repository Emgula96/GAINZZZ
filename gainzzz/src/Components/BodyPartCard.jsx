import React from 'react'
import { Stack, Typography } from '@mui/material'
import '../css/bodyPartCard.css'
import { setSearchResults } from '../actions/searchResults';
import { useDispatch } from 'react-redux';
import { listByBodyPart} from '../actions/supabase';

const BodyPartCard = ({ bodyPart, setBodyPart, item }) => {
  const dispatch = useDispatch()
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPartCard"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item)
        console.log(item)
        listByBodyPart(dispatch, item)
      }}>
      <img src={require("../images/gym.webp")} style={{ width: "50px", height: "50" }} />
      <Typography fontSize="24px" fontWeight="bold" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );  
}

export default BodyPartCard