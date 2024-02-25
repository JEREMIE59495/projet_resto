import '../../styles/menuItem.css'

function menu_item({id, title, plats, description , dessert , boissons}){
return(
 <li key ={id} class='menuItem'>
    <h2>{title}</h2>
    <h3 class ='title'>Plats</h3>
    <p>{plats}</p>
    <h3 class ='title'>description</h3>
    <p>{description}</p>
    <h3 class ='title'>dessert</h3>
    <p>{dessert}</p>
    <h3 class ='title'>boissons</h3>
    <p>{boissons}</p>
 </li>
)

}

export default menu_item;