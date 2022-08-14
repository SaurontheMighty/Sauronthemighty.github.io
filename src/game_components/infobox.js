import { useState } from 'react';

const InfoBox = ({ title, extended, style }) => {

    const [expanded, setExpand] = useState(false);
    const [body, showBody] = useState(false);
    const [collapsed, setCollapse] = useState(false);

    return (
        <div onClick={() => { 
            setExpand(!expanded);
            setCollapse(expanded);
            if(!body) {
                setTimeout(() => {
                    showBody(!body);
                }, 180);
            }
            else {
                showBody(!body);
            }
            }} style = {expanded? {}: style} className={expanded? "info expand": collapsed? "collapse info": "info"}>
            <p className={expanded? "infoTitle expanded": "infoTitle"}>{title}</p>
            <p className={body? "infoBody": "hidden"}>{extended}</p>
            <p className={body && extended.includes("Studying")? "infoBody": "hidden"}>Building a fast customizable journaling app 👉🏼 <a href='https://www.introspekt.app/'>introspekt.app</a></p>
        </div>
    );
}
 
export default InfoBox;