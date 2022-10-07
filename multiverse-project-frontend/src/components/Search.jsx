import { useState, useEffect } from "react";
import "../css/Search.css"
import axios from "axios";
import Card from './CardComponent';

function Search() {
    const [loading, setLoading] = useState(false);
    const [players, setPlayers] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        const loadPlayers = async () => {
            setLoading(true);
            const response = await axios.get(
                `http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code=%27mlb%27&active_sw=%27Y%27&name_part=%27contreras%25%27`
            );
            console.log(response.data.search_player_all)
            setPlayers(response.data.search_player_all.queryResults.row);
            setLoading(false);
        };

        loadPlayers();
    }, []);

    return (
        <div className="container">
            <input className="search_input"
                type="text"
                placeholder="Search by Last Name..."
                onChange={(e) => {
                    // setSearchTitle(e.target.value)
                }}
            />
            {/* <button className="btn btn-info" type='button' onClick={(e) => this.search(e)}>Search</button> */}
            <div className='cardContainer'>
                {loading ? (
                    <h4>Loading ...</h4>
                ) : (
                    players
                    // .sort((a,b) => a.name_display_first_last > b.name_display_first_last ? 1 : -1)
                    .map((item) => {
                        console.log('item:', item);
                        return (   
                                    <Card key={item.player_id} player={item} /> 
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default Search;