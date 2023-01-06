import './Search.css';

// once search button is clicked, call api to fetch latitude, longitude data
// onChange={(e) => updateCity(e.target.value)}
const Search = (props) => {
  const { updateCity, fetchCoordinates } = props;
  
  return (
    <>
      <form className="search-form" onSubmit={fetchCoordinates}>
        <label className="search-title">
            <span> Search for a forecast: </span>      
            <input type="text" name="name" placeholder="City" onChange={(e) => updateCity(e.target.value)}/>
        </label>
        <button type={"submit"} >Search</button>
      </form>
    </>
  );
};
export default Search;

