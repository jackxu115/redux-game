import axios from "axios";
import {actionType, APIKEY, URL} from "../Helper";

const fetchGames = () => async dispatch => {
    console.log('action')
    try {
        let res = await axios.get(`${URL}?key=${APIKEY}`)
        console.log(res.data.results)
        dispatch({
            type: actionType.FETCH_GAMES,
            payload: res
        })

    } catch (error) {

        console.log(error)
    }
}

export default {
    fetchGames
}