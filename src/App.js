import Header from "./Components/Header";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";
import { useEffect, useState } from "react";
function App() {

  const [card, setCard] = useState([])

  function movie(name) {
    fetch(`https://api.tvmaze.com/search/shows?q=${name}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setCard(data)
      })
  }

  useEffect(() => {
    movie()
    // console.log("hello");
  }, [])


  return (
    <div className="App">
      <Header />
      <div className="main">

        <Search search={movie} />
        <div className="movies-section">
          {/* <!-- one card --> */}
          {card.map((cards) => <MovieCard data={cards} />)}

          {/* <MovieCard /> */}
          {/* <!-- one card --> */}
        </div>
      </div>
    </div>
  );
}

export default App;
