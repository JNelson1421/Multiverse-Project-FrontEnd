import { React } from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/CarouselHome.css';


function CarouselHome() {
    const teams = [
        {
            img: 'images/teamlogos/ArizonaDiamondbacks.jpg',
        },
        {
            img: 'images/teamlogos/AtlantaBraves.jpg',
        },
        {
            img: 'images/teamlogos/BaltimoreOrioles.jpg',
        },
        {
            img: 'images/teamlogos/BostonRedSox.jpg',
        },
        {
            img: 'images/teamlogos/ChicagoCubs.jpg',
        },
        {
            img: 'images/teamlogos/ChicagoWhiteSox.jpg',
        },
        {
            img: 'images/teamlogos/CincinnatiReds.jpg',
        },
        {
            img: 'images/teamlogos/ClevelandGuardians.jpg',
        },
        {
            img: 'images/teamlogos/ColoradoRockies.jpg',
        },
        {
            img: 'images/teamlogos/DetroitTigers.jpg',
        },
        {
            img: 'images/teamlogos/HoustonAstros.jpg',
        },
        {
            img: 'images/teamlogos/KansasCityRoyals.jpg',
        },
        {
            img: 'images/teamlogos/LosAngelesAngels.jpg',
        },
        {
            img: 'images/teamlogos/LosAngelesDodgers.jpg',
        },
        {
            img: 'images/teamlogos/MiamiMarlins.jpg',
        },
        {
            img: 'images/teamlogos/MilwaukeeBrewers.jpg',
        },
        {
            img: 'images/teamlogos/MinnesotaTwins.jpg',
        },
        {
            img: 'images/teamlogos/NewYorkMets.jpg',
        },
        {
            img: 'images/teamlogos/NewYorkYankees.jpg',
        },
        {
            img: 'images/teamlogos/OaklandAthletics.jpg',
        },
        {
            img: 'images/teamlogos/PhiladelphiaPhillies.jpg',
        },
        {
            img: 'images/teamlogos/PittsburghPirates.jpg',
        },
        {
            img: 'images/teamlogos/SanDiegoPadres.jpg',
        },
        {
            img: 'images/teamlogos/SanFranciscoGiants.jpg',
        },
        {
            img: 'images/teamlogos/SeattleMariners.jpg',
        },
        {
            img: 'images/teamlogos/St.LouisCardinals.jpg',
        },
        {
            img: 'images/teamlogos/TampaBayRays.jpg',
        },
        {
            img: 'images/teamlogos/TexasRangers.jpg',
        },
        {
            img: 'images/teamlogos/TorontoBlueJays.jpg',
        },
        {
            img: 'images/teamlogos/WashingtonNationals.jpg',
        },
    ];

    return (
        <>
        <div className="mt-4 mx-auto h-50 w-50">
            <h1>MLB Teams</h1>
             <Carousel>
            {teams.map(team => {
                return (   
                    <Carousel.Item>
                <img className="w-100" src={team.img}/>
                </Carousel.Item>
                );
                })}
            </Carousel>
      </div>
      </>
    );
}

export default CarouselHome;