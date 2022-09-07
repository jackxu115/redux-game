import './App.css';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import action from "./actions";
import {Home} from "./components/Home";
import {Search} from "./components/Search";
import {Navigate, Route, Routes} from "react-router-dom";
import {SearchResult} from "./components/SearchResult";
import {GameDetail} from "./components/GameDetail";
import {WishList} from "./components/WishList";

function App() {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(action.gameAction.fetchGames()
        )
    }, [])

    return (
        <div className="App">
            <Search />
            <Routes>
                <Route path="home" element={<Home />}/>
                <Route path="/" element={<Navigate to="/home" />}/>
                <Route path="/search/:name" element={<SearchResult />}/>
                <Route path="/game/:name" element={<GameDetail />}/>
                <Route path="/wishlist" element={<WishList />}/>
            </Routes>
        </div>
    );
}

export default App;
