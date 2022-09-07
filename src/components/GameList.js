import {useSelector} from "react-redux";
import {Game} from "./Game";


export const GameList = () => {

    let games = useSelector(state => state?.gameReducer?.gameList)

    return (
        <div className="GameList">
            {
                games?.map((element, index) => <Game key={index} game={element}/>)
            }
        </div>
    )
}