import { Link } from "react-router-dom";


export default function CountryCard({name,flag,population,region,capital}) {
    
  return (
    <Link to={`/country?name=${name}`} className="country-card">
    <img src={flag} alt={name + 'flag'} />
    <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
            <b>Population: </b>{population}
        </p>
        <p>
            <b>Region: </b>{region}
        </p>
        <p>
            <b>Capital: </b>{capital}
        </p>
    </div>
</Link>
  )
}