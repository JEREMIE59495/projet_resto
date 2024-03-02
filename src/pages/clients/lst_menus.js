import {menu} from '../../data/menu'
import MenuItem from './menu_item'
import '../../styles/lstMenu.css'

function lst_menu(){
    console.log(menu)
return(
   
    <ul class='lstMenu'>
        {menu.map(({id , title , plats , description , dessert, boissons})=>(
        <div key ={id} class='card'>
    
       <MenuItem
        
            title={title}
            plats={plats}
            description ={description}
            boissons={boissons}
            dessert={dessert}
           /> 
           </div>
            ) 
        )}
    </ul>
   
)
}

export default lst_menu;
