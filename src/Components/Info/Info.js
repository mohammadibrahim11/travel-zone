import React from 'react';
import './Info.css'

const Info = (props) => {
    // console.log(props)
    const {info} = props
    let time =0;
    for( const activity of info ){
        time =time +activity.time;
    }
    
    return (
        <div>
               <h1>activity summary</h1>
               <h3>Add a Break</h3>
               <div className='break-time'>
                <p>10</p>
                <p>20</p>
                <p>30</p>
                <p>40</p>
                <p>50</p>
               </div>
               <p>time : {time}s</p>
          
        </div>
    );
};

export default Info;