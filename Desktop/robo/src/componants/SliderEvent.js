import './SliderEvent.css';
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

function SliderEvent(){
 
  return (
    <div className='parent' >
       <img src={image1} alt='image1' className="image"/> 
       <img src={image2} alt='image2' className="image"/> 
       <img src={image3} alt='image3' className="image"/> 
       <img src={image4} alt='image4' className="image"/> 
    
    </div>
  );
};

export default SliderEvent;


