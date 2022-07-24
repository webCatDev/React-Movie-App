import { forwardRef } from 'react';
import classes from './movie-list-item.module.css'
const MovieListItem = forwardRef(({ src, styles }, ref) => {
   

    
    return (
        <li ref={ref} className={classes.listItem} style={styles}>
            <img src={src} alt="A movie" />
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
        </li>
    );
})

export default MovieListItem;