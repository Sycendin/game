import React, { Fragment, useState } from "react";
import "./Searchbox.css";
import SearchList from "../SearchList/SearchList";
import CardShow from "../../CardShow/CardShow";
const Searchbox = ({
  data,
  onInputChange,
  clickCard,
  pick,
  setPick,
  setOptions,
}) => {
  const [cardShowOpen, setCardShowOpen] = useState(false);
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
  const closeShowModal = () => {
    setCardShowOpen(false);
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
          <button
            className="button-clear"
            onClick={() => setCardShowOpen(true)}
          >
            Show
          </button>
          <SearchList
            data={data}
            clickCard={clickCard}
            setPick={setPick}
            pick={pick}
            setOptions={setOptions}
          />
        </div>
      </div>
      <CardShow
        pick={pick}
        setOptions={setOptions}
        setPick={setPick}
        clickCard={clickCard}
        data={data}
        open={cardShowOpen}
        onClose={closeShowModal}
      />
    </Fragment>
  );
};
export default Searchbox;
