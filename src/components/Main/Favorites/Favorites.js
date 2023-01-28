import { nanoid } from 'nanoid'

function Favorites(props){

    let favoriteHtml = []
    props.genres.forEach(genre => {
        for(let i = 0; i < genre.length; i++){
            if(genre.length > 1){
                if(genre[i].isFavorite){
                    favoriteHtml.push(<div key={nanoid()}>
                        <img id={genre[i].id} 
                            src={genre[i].isFavorite ? props.favoriteIcon : props.starIcon} 
                            className="genres--genre--favorite" 
                            onClick={props.toggleFavorite} 
                            alt="star Icon" 
                        />
                        <a href={genre[i].link} 
                            key={genre[i].code} 
                            className="genres--genre" 
                            target="_blank" 
                            rel="noreferrer">{props.language === "dutch"? genre[i].genre.dutch : genre[i].genre.english}
                        </a>
                        <p className="genre--genre--code">{genre[i].code}</p>
                        </div>)
                }
            } 
        }
    })

    return(
        <div>
            {favoriteHtml}
        </div>
    )
}

export default Favorites;