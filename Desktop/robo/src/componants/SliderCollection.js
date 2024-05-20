import './SliderEvent.css';
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";

function SliderCollection(){
 
  return (
    <div className='parent' >
       <img src={image5} alt='image1' className="image"/> 
       <img src={image6} alt='image2' className="image"/> 
       <img src={image7} alt='image3' className="image"/> 
       <img src={image8} alt='image4' className="image"/> 
    
    </div>
  );
};

export default SliderCollection;


