import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { applyFilters, searchByName } from "../../redux/slice";

const FiltersComponent = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    byNames: false,
    lowToHigh: false,
    highToLow: false,
  });
  const [searchInput, setSearchInput] = useState("");

  function handleFilterEvents(e) {
    if (e.target.name === "BY_NAMES") {
      setFilters({ ...filters, byNames: !filters.byNames });
    } else if (e.target.name === "LOW_TO_HIGH") {
      setFilters({
        ...filters,
        lowToHigh: true,
        highToLow: false,
      });
    } else if (e.target.name === "HIGH_TO_LOW") {
      setFilters({
        ...filters,
        lowToHigh: false,
        highToLow: true,
      });
    } else if (e.target.name === "CLEAR_FILTER") {
      setFilters({
        byNames: false,
        lowToHigh: false,
        highToLow: false,
      });
    }
  }

  useEffect(() => {
    if (searchInput) {
      dispatch(searchByName(searchInput));
    } else if (filters) {
      dispatch(applyFilters(filters));
    }
  }, [filters, searchInput]);

  return (
    <div className="container filter-section">
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchInput}
          onInput={(e) => setSearchInput(e.target.value)}
        />
      </form>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-info dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filters
        </button>
        <ul className="dropdown-menu">
          <label className="form-check-label" htmlFor="by-names">
            A to Z order
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            name="BY_NAMES"
            id="by-names"
            checked={filters.byNames}
            onChange={handleFilterEvents}
          />
          <li>
            <label className="form-check-label" htmlFor="low-to-high">
              Low To High
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="LOW_TO_HIGH"
              id="low-to-high"
              checked={filters.lowToHigh}
              onChange={handleFilterEvents}
            />
          </li>
          <li>
            <label className="form-check-label" htmlFor="high-to-low">
              High To Low
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="HIGH_TO_LOW"
              id="high-to-low"
              checked={filters.highToLow}
              onChange={handleFilterEvents}
            />
          </li>
          <button
            className="btn btn-secondary"
            name="CLEAR_FILTER"
            onClick={handleFilterEvents}
          >
            Clear Filters
          </button>
        </ul>
      </div>
    </div>
  );
};
export default FiltersComponent;
