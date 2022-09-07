import axios from "axios";
import {actionType, APIKEY, URL} from "../Helper";

const fetchGames = () => async dispatch => {
    console.log('action')
    try {
        let res = await axios.get(`${URL}?key=${APIKEY}`)
        const {data:{results}} = res

        console.log(results)
        dispatch({
            type: actionType.FETCH_GAMES,
            payload: results
        })

    } catch (error) {

        console.log(error)
    }
}

export default {
    fetchGames
}