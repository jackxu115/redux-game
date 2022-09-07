export const Game = ({game}) => {


    return (
        <div className="Game">
            <div className="Game_Image">
                <img src={game.background_image} width="200px"/>
            </div>
            <div className="Game_Content">
                <div className="Game_Name">{game.name}</div>
                <div className="Game_Released">{game.released}</div>
                <div className="Game_Rating">{game.metacritic}</div>
            </div>
            <div className="Game_Button">
                WishList
            </div>
        </div>
    )
}