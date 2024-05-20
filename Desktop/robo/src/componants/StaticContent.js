import "./StaticContent.css"
import artist1 from "../assets/artist1.png";
import artist2 from "../assets/artist2.png";
import artist3 from "../assets/artist3.png";
function StaticContent(){

    return (
        <div>
            <h1 className="top"> Explore Your First <br></br>Event</h1>
            <h1 className="EventName">Event Name</h1>
            <h1 className="icons"> 📍 Venue  ⏰ 22-05-2024  @19:00</h1>
            <p className="description"> A music festival is not just an event; it's a journey, a celebration of life, and a reminder of the power of music to bring people together, transcending boundaries and fostering a sense of unity and belonging.</p>
            <h3 className="artist">Artist Line-up</h3>
            <div className="images">
                <img src={artist1} alt="artist1" className="artistImage"/>
                <img src={artist2} alt="artist2" className="artistImage"/>
                <img src={artist3} alt="artist3" className="artistImage"/>
            </div>
        </div>
    )
}
export default StaticContent;