export function planetModel(response) {    
    let residentsArray = [];  

    residentsArray = response.residents.map((resident, residentKey) => {      
        let residentFilmsArray = [];
        resident.data.films.map((film, filmKey) => {
            return residentFilmsArray[filmKey] = (
                {
                    title: film.data.title,
                    episode_id: film.data.episode_id,
                }
            )
        })        
        
        return residentsArray[residentKey] = (
            {
                name: resident.data.name,
                height: resident.data.height,
                mass: resident.data.mass,
                hair_color: resident.data.hair_color,
                skin_color: resident.data.skin_color,
                eye_color: resident.data.eye_color,
                birth_year: resident.data.birth_year,
                gender: resident.data.gender,
                films: residentFilmsArray,
            }
        )
    })

    let planet = {
        name: response.name,
        rotation_period: response.rotation_period,
        orbital_period: response.orbital_period,
        diameter: response.diameter,
        climate: response.climate,
        gravity: response.gravity,
        terrain: response.terrain,
        surface_water: response.surface_water,
        population: response.population,
        residents: residentsArray,
    }

    return planet;
}