import '../../styles/menuItem.css'

function menu_item({id, title, plats, description , dessert , boissons}){
return(
 <li key ={id} class='menuItem'>
    <p>
    {title}</p>
    <p>{plats}</p>
    <p>{description}</p>
    <p>{dessert}</p>
    <p>{boissons}</p>
 </li>
)

}

export default menu_item;