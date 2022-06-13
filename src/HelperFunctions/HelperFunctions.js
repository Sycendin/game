import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// Toast message that will be played when the reset button is clicked
export const notify = (message) => {
  if (message === "reset") {
    toast.info("Game has been reset!", {
      autoClose: 2000,
      pauseOnHover: true,
    });
  } else if (message === "clear") {
    toast.info("Filter has been reset", {
      autoClose: 2000,
      pauseOnHover: true,
    });
  } else if (message === "set") {
    toast.info("Filter has been set", {
      autoClose: 2000,
      pauseOnHover: true,
    });
  }
};

export function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// If filter has been set/cleared, call api with new filter and display filtered/unfiltered
// contents
export const filterSet = (filterContent, setFilterValue, setOptions) => {
  let url = "";
  // Get end of current url
  const currentUrl = window.location.href.split("/");
  const currentUrlEnd = currentUrl[currentUrl.length - 1];
  const searchSelect = document.querySelector("#text-input").value;
  if (Object.keys(filterContent).length === 0) {
    if (currentUrlEnd === "game") {
      url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?format=tcg&type=fusion%20monster&fname=${searchSelect.replace(
        " ",
        "%20"
      )}`;
    } else {
      url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?format=tcg&fname=${searchSelect.replace(
        " ",
        "%20"
      )}`;
    }
    setFilterValue({});
    notify("clear");
  } else {
    let filterUrl = "";
    // Go through the filter and prepare the additional parameters in the url
    Object.entries(filterContent).forEach(([key, val]) => {
      filterUrl = filterUrl + `&${key}=${val}`;
    });
    if (currentUrlEnd === "game") {
      url =
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?format=tcg&type=fusion%20monster&fname=${searchSelect.replace(
          " ",
          "%20"
        )}` + filterUrl;
    } else {
      url =
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?format=tcg&fname=${searchSelect.replace(
          " ",
          "%20"
        )}` + filterUrl;
    }

    setFilterValue(filterContent);
    notify("set");
  }
  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      setOptions(result.data.slice(0, 10));
    })
    .catch((error) => {
      setOptions([{ name: "No results" }]);
    });
};
