import React from 'react'

function RestaurantCard(props) {
let {restaurant}=props;
// {
//     name:"Burger King",
//     cuisine:["Burgers","Americans"],
//     rating:4.2,
//     image:'https://pricemenu.in/wp-content/uploads/2023/02/Burger-King-Menu-1536x908.jpg'
// }

  return (
    <div className='card'>
         <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurant.info.cloudinaryImageId } alt="No Data" />
         <h2>{restaurant.info.name}</h2>
         <h4>{restaurant.info.cuisines[0]}</h4>
         <h4>{restaurant.info.cuisines.avgRating} Stars</h4>
         

    </div>
  )
}

export default RestaurantCard