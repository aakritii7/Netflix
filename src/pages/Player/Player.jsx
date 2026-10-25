import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
const Player = () => {
  const [apidata, SetApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjNhZWUwYmQ0YzExMTIzZTAwYzYxMTM2MDdmMWJjOCIsIm5iZiI6MTc5Mjg0NzQxOS4wODQsInN1YiI6IjZhZGNhZTNiYjUwMDk1OGJiYjdkNDA1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bIcCG4S1BrChwCBhQSEGNvk0Ik1pgLsyB1gjIbitVOE'
  }
};
useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/502356/videos?language=en-US', options)
  .then(res => res.json())
  .then(res => SetApiData(res.results[0]))
  .catch(err => console.error(err));  

},[])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width='90%' height='90%' src='https://www.youtube.com/embed/BKOVzHcjEIo' title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  )
}

export default Player
