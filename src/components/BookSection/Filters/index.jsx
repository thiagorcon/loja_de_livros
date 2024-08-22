import { CategoryFilters } from "./CategoryFilters";
import { PriceFilters } from "./PriceFilters";
import { SearchForm } from "./SearchForm/index";
import styles from './style.module.scss'


export const Filters =({cleanFilters , setSearch, setCategory, min, max, setMin, setMax}) => {

     return(
          <section>
               <div className={styles.filterBox}>
                    <SearchForm setSearch={setSearch}/>
                    <CategoryFilters setCategory={setCategory} />
                    <PriceFilters min={min} setMin={setMin} max={max} setMax={setMax}/>
                    <button className="btn" onClick={cleanFilters}>Limpar Filtros</button>
               </div>
          </section>
     )
}