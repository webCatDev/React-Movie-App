import { useSelector } from 'react-redux';
import featuredImage1 from '../images/f-t-1.png'
import featuredImage2 from '../images/f-t-2.png'
import FeaturedMovie from './FeaturedMovie/FeaturedMovie';
import classes from './home-page-content.module.css'
import MovieList from './MovieList/MovieList';

const HomePageContent = () => {
    const isDarkMode = useSelector(state => state.darkMode.isDarkMode)
    const themeClasses = isDarkMode ? "" : classes.light;
    const appBackgroundClasses = `${classes.container} ${themeClasses}`;

    return (
        <div className={appBackgroundClasses}>
            
        <FeaturedMovie
          featuredImage={featuredImage1}
          featuredBackground={1}
          imgAlt="unchained movie"
            />

            <MovieList listTitle="Movies" />
            <MovieList listTitle="Series" />

        <FeaturedMovie
          featuredImage={featuredImage2}
          featuredBackground={2}
          imgAlt="dark movie"
            />
            
            <MovieList listTitle="Popular" />
            <MovieList listTitle="Trends" />
            
      </div>
    );
}

export default HomePageContent;

