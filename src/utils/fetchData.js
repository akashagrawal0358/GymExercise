export const exerciseOptions = {
    method : 'GET',
    headers:{
            'X-RapidAPI-Key': '7d27199a0amsh18ce49184a9723ep196c13jsn7beada4e1eef',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
    };
    
export const fetchData = async(url , options)=>{
    const response = await fetch(url , options);
    const data = await response.json();

    return data ;
}