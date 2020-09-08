
export const getGifs= async(category) => {
    const apiKey = 'Ppf5yGpxkkuAjKi9OrmyV0T5gdKJqfUc';
    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
    const resp = await fetch(url);
    const {data} = await resp.json();

        console.log(resp);

    const gifs  = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    //console.log(gifs);

    return gifs;
}