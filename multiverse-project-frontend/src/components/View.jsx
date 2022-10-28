import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap"
import '../css/View.css'
import axios from "axios";



function View() {

    const params = useParams();

    const id = params.id;
    

    const [name_first, setFName] = useState("");
    const [name_last, setLName] = useState("");
    const [team_name, setTeamName] = useState("");
    const [team_img_url, setTeamImageUrl] = useState("");
    const [name_nick, setNickName] = useState("");
    const [age, setAge] = useState("");
    const [primary_position_txt, setPrimaryPosition] = useState("");
    const [throws, setThrows] = useState("");
    const [bats, setBats] = useState("");


    useEffect(() => {
        axios.get(`https://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code=%27mlb%27&player_id=${id}`).then((res) => {
            
            var url = "/images/teamlogos/" + res.data.player_info.queryResults.row.team_name.replace(/\s/g, "") + ".jpg";

            setFName(res.data.player_info.queryResults.row.name_first);
            setLName(res.data.player_info.queryResults.row.name_last);
            setTeamName(res.data.player_info.queryResults.row.team_name);
            setTeamImageUrl(url);
            setNickName(res.data.player_info.queryResults.row.name_nick);
            setAge(res.data.player_info.queryResults.row.age);
            setPrimaryPosition(res.data.player_info.queryResults.row.primary_position_txt);
            setThrows(res.data.player_info.queryResults.row.throws);
            setBats(res.data.player_info.queryResults.row.bats);
        });
    }, []);


    return (
        <Container className="player_container">
                <Col xs={8} lg={4} className="player_title">
                    <Row className="name_first">
                        <h1>{name_first} {name_last}</h1>
                    </Row>
                    <Row className="name_nick">
                        {name_nick.length > 0 && <h2>'{name_nick}'</h2>}
                    </Row>
                    <Row className="team_name">
                        <h3>{team_name}</h3>
                    </Row>
                </Col>
                <Col xs={6} lg={3} className="player_img">
                    <Row>
                        <img src={team_img_url} />
                    </Row>
                </Col>
                <Col xs={8} lg={4} className="player_info">
                    <Row className="age">
                        <h3>Age: {age}</h3>
                    </Row>
                    <Row className="primary_position">
                        <h3>Position: {primary_position_txt}</h3>
                    </Row>
                    <Row className="throws">
                        <h3>Throws: {throws}</h3>
                    </Row>
                    <Row className="bats">
                        <h3>Bats: {bats}</h3>
                    </Row>
                </Col>
        </Container>
    )
}

export default View;