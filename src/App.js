import "./App.css";
import MovieBanner from "./components/MovieBanner/MovieBanner";
import MovieButton from "./components/movieButton/MovieButton";
import MovieRating from "./components/MovieRating/MovieRating";
import MovieTitle from "./components/MovieTitle/MovieTitle";

function App() {
  return (
    <div className="App">
      <div id="card">
        <MovieBanner url={"https://pbs.twimg.com/media/FNmNkGVXoAM42jc.jpg"}/>
        <MovieTitle name={"crepusculo"} />
        <MovieButton text={"Watchlist"} />
        <MovieButton text={"trailer"} />
        <MovieRating number ={9.3} />
      </div> 
   </div>
  );
}

export default App;
