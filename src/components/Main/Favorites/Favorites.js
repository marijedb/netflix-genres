import "./Favorites.css"
import { nanoid } from 'nanoid'

function Favorites(props){

    let favoriteHtml = []
    props.genres.forEach(genre => {
        for(let i = 0; i < genre.length; i++){
            if(genre.length > 1){
                if(genre[i].isFavorite){
                    favoriteHtml.push(<div key={nanoid()} className="favorites--container">
                        <img id={genre[i].id} 
                            src={genre[i].isFavorite ? props.favoriteIcon : props.starIcon} 
                            className="favorites--favorite" 
                            onClick={props.toggleFavorite} 
                            alt="star Icon" 
                        />
                        <a href={genre[i].link} 
                            key={genre[i].code} 
                            className="favorites--genre" 
                            target="_blank" 
                            rel="noreferrer">{props.language === "dutch"? genre[i].genre.dutch : genre[i].genre.english}
                        </a>
                        <p className="favorites--code">{genre[i].code}</p>
                        </div>)
                }
            } 
        }
    })

    return(
        <div className="favorites">
            <p className="favorites--title">{props.language === "dutch" ? "FAVORIETEN" : "FAVORITES"}</p>
            {favoriteHtml.length === 0 ? 
                props.language === "dutch" ? 
                    <p className="favorites--addFavorites">Nog geen favorieten toegevoegd. Klik snel op wat sterren in de lijst van genres! :)</p> : 
                    <p className="favorites--addFavorites">No favorites added yet. Quickly click on some stars on the list of genres! :)</p> :
                    <div className="hide"></div>}
            {favoriteHtml}
        </div>
    )
}

export default Favorites;