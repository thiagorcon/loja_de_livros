import { categories } from '../../../../Data/category'



export const CategoryFilters = ({setCategory}) => {

     return (
          <div>
               <h3>Filtro por categoria</h3>

               <ul>
                    {categories.map(e =>
                         <li key={e.id} onClick={() => setCategory(e.name)}>
                              <h3>{e.name}</h3>
                         </li>
                    )}
               </ul>
          </div>
     )
}