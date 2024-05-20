import "./StaticContent.css"
import album1 from "../assets/album1.png";
import album2 from "../assets/album2.png";
import album3 from "../assets/album3.png";
function StaticCollection(){

    return (
        <div>
            <h1 className="top"> Explore Your First <br></br>Collectible</h1>
            <h1 className="EventName">Meta Live</h1>
            <h1 className="icons"> Live In Astrix</h1>
            <p className="description"> A music festival is not just an event; it's a journey, a celebration of life, and a reminder of the power of music to bring people together, transcending boundaries and fostering a sense of unity and belonging.</p>
            <h3 className="artist">Collectibles...</h3>
            <div className="CollectionDiv">
                <img src={album1} alt="artist1" className="CollectionImage"/>
                <img src={album2} alt="artist2" className="CollectionImage"/>
                <img src={album3} alt="artist3" className="CollectionImage"/>
            </div>
        </div>
    )
}
export default StaticCollection;