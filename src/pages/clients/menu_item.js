import '../../styles/menuItem.css'

function menu_item({id, title, plats, description , dessert , boissons}){
return(
 <li key ={id} class='menuItem'>
    <h2>{title}</h2>
    <h3 class ='title'>Plats</h3>
    <p>{plats}</p>
    <h3 class ='title'>Description</h3>
    <p>{description}</p>
    <h3 class ='title'>Dessert</h3>
    <p>{dessert}</p>
    <h3 class ='title'>Boissons</h3>
    <p>{boissons}</p>
 </li>
)

}

export default menu_item;