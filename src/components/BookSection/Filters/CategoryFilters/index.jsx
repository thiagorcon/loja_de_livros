import { categories } from '../../../../Data/category'
import styles from './style.module.scss'



export const CategoryFilters = ({setCategory}) => {

     return (
          <div className={styles.containerCategoryFilters}>
               <h2 className='title2'>Filtro por categoria</h2>

               <ul>
                    {categories.map(e =>
                         <li  key={e.id} onClick={() => setCategory(e.name)}>
                              <h3>{e.name}</h3>
                         </li>
                    )}
               </ul>
          </div>
     )
}