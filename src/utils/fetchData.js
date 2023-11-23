export const exerciseOptions ={
  method: 'GET',
  params: {limit: '100'},
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key':  'e40657bacdmsh6f3e2067279f1a0p1780b0jsn0804caaec002'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'e40657bacdmsh6f3e2067279f1a0p1780b0jsn0804caaec002',
  },
};
  
  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
  
    return data;
  };

