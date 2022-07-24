import { useRef, useState, useEffect } from "react";
import MovieListItem from "./MovieListItem";
import classes from "./movie-list.module.css";
import RightButtonIcon from "../Icons/RightButtonIcon";

const MovieList = ({ listTitle, id }) => {
  const listItemRef = useRef();

  const initialStyles = { transform: "translateX(0)" };
  const [styles, setStyles] = useState(initialStyles);
  // eslint-disable-next-line
    const [clickCount, SetClickCount] = useState(1);
    const [clickLimit, setClickLimit] = useState()
  const imageNumbers = Array(19)
    .fill(1)
    .map((_, i) => i + 1);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const listItemWidth = Number(
      window.getComputedStyle(listItemRef.current).width.replace("px", "")
    );
    setClickLimit(imageNumbers.length - ~~(windowWidth / listItemWidth));
  }, [imageNumbers]);

    const handleNext = () => {
        console.log("Click Count:" + clickCount, 'Click Limit:' + clickLimit)
        if (clickCount === clickLimit + 1) {
            SetClickCount(0)
          return  setStyles((prevStyles) => ({
              ...prevStyles,
              transform: `translateX(0)`,
            }));
      }
    setStyles((prevStyles) => ({
      ...prevStyles,
      transform: `translateX(${clickCount * -29}em)`,
    }));
        
    SetClickCount((prevClickCount) => prevClickCount + 1);
  };

  return (
    <section id={id} className={classes.container}>
      <h1>{listTitle}</h1>
      <ul className={classes.movieList}>
        <RightButtonIcon onNext={handleNext} />
        {imageNumbers.map((num) => (
          <MovieListItem
            ref={listItemRef}
            styles={styles}
            key={num}
            src={`/img/${num}.jpg`}
          />
        ))}
      </ul>
    </section>
  );
};

export default MovieList;
