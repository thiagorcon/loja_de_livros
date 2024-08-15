import { CategoryFilters } from "./CategoryFilters"
import { PriceFilters } from "./PriceFilters"
import { SearchForm } from "./SearchForm/index"




export const Filters =({cleanFilters , setSearch, setCategory, min, max, setMin, setMax}) => {

     return(
          <section>
               <div>
                    <SearchForm setSearch={setSearch}/>
                    <CategoryFilters setCategory={setCategory} />
                    <PriceFilters min={min} setMin={setMin} max={max} setMax={setMax}/>
                    <button onClick={cleanFilters}>Limprar Filtros</button>
               </div>
          </section>
     )
}