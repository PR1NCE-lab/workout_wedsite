export const ExerciseOptions ={
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  




export const fetchData  = async (url , options) => {
  console.log(Response.data)
  const res = await fetch(url , options);
  const data = await res.json();
    return data;

}