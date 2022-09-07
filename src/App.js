import './App.css';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import action from "./actions";

function App() {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(action.gameAction.fetchGames()
        )
    }, [])

    return (
        <div className="App">
        </div>
    );
}

export default App;
