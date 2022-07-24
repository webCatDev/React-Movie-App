import classes from './featured-movie.module.css'
const FeaturedMovie = ({ featuredImage, featuredBackground, imgAlt}) => {
    let backgroundImage;
    switch (featuredBackground) {
        case 1:
            backgroundImage = classes.featured1
            break;
        case 2:
            backgroundImage = classes.featured2
            break;
        default:
         break
    }

    return (
      <section>
        <article className={`${classes.featured} ${backgroundImage}`}>
          <img src={featuredImage} alt={imgAlt} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            fuga velit labore deleniti saepe nobis cum perspiciatis. Beatae
            saepe repellendus odio, vitae repudiandae qui id natus quam ipsam
            atque repellat. Ab ad vero adipisci.
          </p>
          <button>Watch</button>
        </article>
      </section>
    );
}

export default FeaturedMovie;