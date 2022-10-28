import { useState, useEffect } from "react";
import '../css/Home.css';
import axios from "axios";
import CarouselHome from "./CarouselHome";

function Home () {
    const [atBatLeaders, setAtBatLeaders] = useState([]);
    const [homeRunLeaders, setHomeRunLeaders] = useState([]);

    useEffect(() => {
        const loadAtBatLeaders = async () => {
            const response = await axios.get(
                `http://lookup-service-prod.mlb.com/json/named.leader_hitting_repeater.bam?sport_code='mlb'&results=10&game_type='R'&season='2022'&sort_column='ab'`
            );
            setAtBatLeaders(response.data.leader_hitting_repeater.leader_hitting_mux.queryResults.row);
        };

        const loadHomeRunLeaders = async () => {
            const response = await axios.get(
                `http://lookup-service-prod.mlb.com/json/named.leader_hitting_repeater.bam?sport_code='mlb'&results=10&game_type='R'&season='2022'&sort_column='hr'`
            );
            console.log(response.data.leader_hitting_repeater.leader_hitting_mux)
            setHomeRunLeaders(response.data.leader_hitting_repeater.leader_hitting_mux.queryResults.row);
        };

        loadAtBatLeaders();
        loadHomeRunLeaders();
    }, []);

    return (
        <div className="container">
            <CarouselHome />
            <h1 className="battingleaders">Batting Leaders</h1>
            <div className='statContainer'>
                <div className='statCard'>
                    <h1>At Bat Leaders</h1>
                    {
                            atBatLeaders
                            .map((player) => {
                                return (   
                                    <div>
                                        <h3>{player.name_display_first_last}: {player.ab}</h3>
                                    </div> 
                                );
                            })
                    }
                </div>
                <div className='statCard'>
                    <h1>Home Run Leaders</h1>
                    {
                            homeRunLeaders
                            .map((player) => {
                                return (   
                                    <div>
                                        <h3>{player.name_display_first_last}: {player.hr}</h3>
                                    </div> 
                                );
                            })
                    }
                </div>
            </div>
        </div>
    );
};


export default Home;