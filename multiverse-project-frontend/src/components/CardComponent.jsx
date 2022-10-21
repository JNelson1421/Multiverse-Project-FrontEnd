import '../css/Home.css'
import { useNavigate } from "react-router-dom";

const Card = (props) => {

    const navigate = useNavigate()

    const player = props.player
    //console.log("Team = ", player.team_full)
    var teamImageSrc = "images/teamlogos/"
    switch(player.team_full) {
        case "Arizona Diamondbacks":
        teamImageSrc += "ArizonaDiamondbacks.jpg"
        break;
        case "Atlanta Braves":
        teamImageSrc += "AtlantaBraves.jpg"
        break;
        case "Baltimore Orioles":
        teamImageSrc += "BaltimoreOrioles.jpg"
        break;
        case "Boston Red Sox":
        teamImageSrc += "BostonRedSox.jpg"
        break;
        case "Chicago Cubs":
        teamImageSrc += "ChicagoCubs.jpg"
        break;
        case "Chicago White Sox":
        teamImageSrc += "ChicagoWhiteSox.jpg"
        break;
        case "Cincinnati Reds":
        teamImageSrc += "CincinnatiReds.jpg"
        break;
        case "Cleveland Indians":
        teamImageSrc += "ClevelandGuardians.jpg"
        break;
        case "Colorado Rockies":
        teamImageSrc += "ColoradoRockies.jpg"
        break;
        case "Detroit Tigers":
        teamImageSrc += "DetroitTigers.jpg"
        break;
        case "Houston Astros":
        teamImageSrc += "HoustonAstros.jpg"
        break;
        case "Kansas City Royals":
        teamImageSrc += "KansasCityRoyals.jpg"
        break;
        case "Los Angeles Angels":
        teamImageSrc += "LosAngelesAngels.jpg"
        break;
        case "Los Angeles Dodgers":
        teamImageSrc += "LosAngelesDodgers.jpg"
        break;
        case "Miami Marlins":
        teamImageSrc += "MiamiMarlins.jpg"
        break;
        case "Milwaukee Brewers":
        teamImageSrc += "MilwaukeeBrewers.jpg"
        break;
        case "Minnesota Twins":
        teamImageSrc += "MinnesotaTwins.jpg"
        break;
        case "New York Mets":
        teamImageSrc += "NewYorkMets.jpg"
        break;
        case "New York Yankees":
        teamImageSrc += "NewYorkYankees.jpg"
        break;
        case "Oakland Athletics":
        teamImageSrc += "OaklandAthletics.jpg"
        break;
        case "Philadelphia Phillies":
        teamImageSrc += "PhiladelphiaPhillies.jpg"
        break;
        case "Pittsburgh Pirates":
        teamImageSrc += "PittsburghPirates.jpg"
        break;
        case "San Diego Padres":
        teamImageSrc += "SanDiegoPadres.jpg"
        break;
        case "San Francisco Giants":
        teamImageSrc += "SanFranciscoGiants.jpg"
        break;
        case "Seattle Mariners":
        teamImageSrc += "SeattleMariners.jpg"
        break;
        case "St. Louis Cardinals":
        teamImageSrc += "St.LouisCardinals.jpg"
        break;
        case "Tampa Bay Rays":
        teamImageSrc += "TampaBayRays.jpg"
        break;
        case "Texas Rangers":
        teamImageSrc += "TexasRangers.jpg"
        break;
        case "Toronto Blue Jays":
        teamImageSrc += "TorontoBlueJays.jpg"
        break;
        case "Washington Nationals":
        teamImageSrc += "WashingtonNationals.jpg"
        break;
}
    return(
        <div className='card' onClick={() => navigate(`/view/${player.player_id}`)} id={player.player_id}>
            <div className='teamLogo'>
                <img src={teamImageSrc} /> 
            </div>
            <div className='name'>
                <h2>
                    {player.name_display_first_last}
                </h2>
            </div>
            <div className='team'>
                <h3>
                    Team: {player.team_full}
                </h3>
            </div>
        </div>
    )
}

export default Card;