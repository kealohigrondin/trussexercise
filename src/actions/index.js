import swapi from "../swapi"

export const getPlanets = () => {
    swapi.get('/planets').then(response => {
        console.log(response);
    });
}