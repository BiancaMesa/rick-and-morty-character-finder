
function FilterBySpecies({onChangeSpecies}) {

    const handleChange = (event) => {
        onChangeSpecies(event.target.value); 
    };

  return (
    <fieldset className="filter__bySpecies">
        <label className="filter__bySpecies--title" htmlFor="species">Species</label>
        <select className="filter__bySpecies--options" name="species" id="species" onChange={handleChange}>
            <option value="">All</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
        </select>
    </fieldset>
  );
}

export default FilterBySpecies;