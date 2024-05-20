import "./LandingPage.css";
import SliderEvent from "./SliderEvent";
import VerticalStrip from "./VerticalStrip";
import StaticContent from "./StaticContent";
import { useState } from "react";
import SliderCollection from "./SliderCollection";
import StaticCollection from "./StaticCollection";
function LandingPage(){
    
    const[event,setEvent] = useState(true);
    const[active,setActive] = useState(true);

    const onEventClick = ()=>{
        setActive(true);
        setEvent(true);
        console.log("event clicked");
    }
    const onCollectionClick = ()=>{
        setActive(false);
        setEvent(false);
        console.log("collection clicked")
    }
    const isEvent = ()=>{
        if(event){
            return <SliderEvent/>
        }else{
           return <SliderCollection/>
        }
    }
    const isStaticEvent = ()=>{
        if(event){
            return <StaticContent/>
        }else{
            return <StaticCollection/>
        }
    }
    
return(<div>
    <div className="background" >
        <div className="content">
        <div className="eventDiv">
        {isEvent()}
        </div>
        <VerticalStrip/>
        {isStaticEvent()}
        </div>
  
  
        <div className="backgroundGraph">
        <h1 className="backgroundContent" > ASTR</h1>
        <h1 className="backgroundContent">IX</h1>
        <h1 className="backgroundContentDown">EVENT</h1>

        </div>
        <div className="buttonDiv" >
            <div className={active?"active":""} >
            <h1 className="EventButton " onClick={onEventClick}>Event</h1>
            </div>
           <div className={active?"":"active"} >
           <h1 className="EventButton" onClick={onCollectionClick}>Collections</h1>
           </div>
            
        </div>
        
        
        
    </div>
   
   
</div>)
}
export default LandingPage;