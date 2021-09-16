import react,{Component} from "react";
import { Button ,Card } from "react-bootstrap"
import './Body.css'
//import pic from '../assets/equ.jpg';

class Body extends Component{
    constructor(props){
        super(props);
    }
   
    render(){
        return(
            <react.Fragment>
                <div class="body-wrapper">
                    <div class="body-heading">Play My Playlist</div>
                    
                    <div class="body-description">A multiplayer Social Game to play along with your friends in a private room</div>
                    <div  class="button-container">
                        
                        <Card className="card1 cards">
                            <Card.Body>
                                <Card.Title className="card-title">Create Room</Card.Title>
                                <Card.Text className="card-text">Play along with <br/>your friends</Card.Text>
                                <i class="fal fa-long-arrow-right"></i>
                            </Card.Body>    
                        </Card>
                        <Card className="card2 cards">
                            <Card.Body>
                                <Card.Title className="card-title">Join Room</Card.Title>
                                <Card.Text className="card-text">Play along with <br/>your friends</Card.Text>
                                <i class="fal fa-long-arrow-right"></i>
                            </Card.Body>    
                        </Card>
                    </div>
                    <div class="how-to-play">HOW TO PLAY</div>
                    <div class="image"> </div>
                </div>
            </react.Fragment>
        )
    }
} export default Body;


