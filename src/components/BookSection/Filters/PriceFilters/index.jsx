import {PriceInput} from './PriceInput/index.jsx'
import styles from './PriceInput/style.module.scss' 
 
export const PriceFilters = ({ min, max, setMin, setMax }) => {

     return (
          
               
               <div className={styles.inputBox}>
                    <h2 className="title2">Filtrar por preço</h2>
                    <PriceInput id='min' label='Minimo (R$)' value={min} setValue={setMin}/>
                    <PriceInput id='max' label='Máximo (R$)' value={max} setValue={setMax}/> 
                                       
               </div>               
          
     )
}

