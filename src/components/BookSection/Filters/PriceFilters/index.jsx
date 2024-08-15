

export const PriceFilters = ({min, max, setMin, setMax}) => {

     return(
          <div>
               <h3>Filtrar pro preço</h3>
               <div>
                    <label htmlFor="min">Mínimo R$</label>
                    <input type="number" value={min} name="min" id="min" onChange={(e)=>setMin(e.target.value)} min='1'/>
               </div>
               <div>
                    <label htmlFor="minimo">Máximo R$</label>
                    <input type="number" value={max} name="max" id="max" onChange={(e)=>setMax(e.target.value)} min='1'/>
               </div>
          </div>
     )
}