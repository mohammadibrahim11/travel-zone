import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Info from '../Info/Info';
import './Home.css'

const Home = () => {
    const [activities,setActivities] = useState([]);
    const [info,setInfo] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setActivities(data))
    },[]);

    const handleAddToList=(activity)=>{
        console.log(activity);
        const newInfo = [...info,activity];
        // console.log(newInfo)
        setInfo(newInfo)
     }
    return (
        <div className='workout-container'>
            <div className="workout">
                {
                    activities.map((activity)=> <Activity 
                    key={activity._id}
                    activity={activity}
                    handleAddToList={handleAddToList}>

                    </Activity>)
                }
                   
            </div>
            <div className="info-container">
              
               <Info info={info}></Info>
            </div>
        </div>
    );
};

export default Home;