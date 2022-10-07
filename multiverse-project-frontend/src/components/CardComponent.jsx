import '../css/Home.css'
import { useNavigate } from "react-router-dom";

const Card = (props) => {

    const navigate = useNavigate()

    const player = props.player
    console.log('props:', props);
    return(
        <div className='card' onClick={() => navigate(`/view/${player.player_id}`)} id={player.player_id}>
            <div className='cardProfilePicture'>
                {/* <img src={user.profile_pic} /> */}
            </div>
            <div className='usersName'>
                <h2>
                    {player.name_display_first_last}
                </h2>
            </div>
            <div className='usersEmail'>
                <h3>
                    Team: {player.team_full}
                </h3>
            </div>
        </div>
    )
}

export default Card;