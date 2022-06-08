import React, { Fragment } from "react";
import "./Searchbox.css";
import SearchList from "../SearchList/SearchList";
const Searchbox = ({
  data,
  onInputChange,
  clickCard,
  pick,
  setPick,
  setOptions,
}) => {
  // const myRef = useRef();
  // const [x, setX] = useState();
  // const getPosition = () => {
  //   const x = myRef.current.getBoundingClientRect().bottom;
  //   setX(x);
  // };
  const resetText = () => {
    document.getElementById("text-input").value = "";
    setOptions([]);
  };
  // useEffect(() => {
  //   getPosition();
  // }, []);
  return (
    <Fragment>
      <div className="search-div">
        {/* <div className="search-div" ref={myRef}> */}
        <div className="searchbar">
          <input
            id="text-input"
            type="text"
            className="search-box"
            placeholder="Search"
            onChange={onInputChange}
          />
          <button className="button-clear" onClick={() => resetText()}>
            Clear
          </button>
          <SearchList
            // x={x}
            data={data}
            clickCard={clickCard}
            setPick={setPick}
            pick={pick}
            setOptions={setOptions}
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Searchbox;
