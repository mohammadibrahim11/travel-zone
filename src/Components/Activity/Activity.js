
import './Activity.css'



const Activity = ({handleAddToList,activity}) => {
  
    // console.log(props);
    //  const {handleAddToList,activity}=props
    const {img,name,description,age,time}=activity;
   

   
  
    return (
        <div className='card'>
            <img src={img} alt="" />
            
            <p id='name'>{name}</p>
            <p>{description.slice(0,50)}</p>
            <p>For Age :{age}</p>
            <p>Time requirement :{time}s</p>
            <button   onClick={() => handleAddToList(activity) }  className='btn-style' >Add To List</button>
        </div>
    );
};

export default Activity;