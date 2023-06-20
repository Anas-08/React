

export default function Search({setQuery}) {
  return (
    <div className="search-container">
    <i className="fa-solid fa-magnifying-glass" />
    <input onChange={(e)=> setQuery(e.target.value.toLowerCase())} type="text" name="search" placeholder="Search for a country" />
</div>
  )
}
