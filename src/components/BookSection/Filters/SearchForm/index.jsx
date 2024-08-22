import { useState } from "react";
import { MdSearch } from "react-icons/md";
import styles from './style.module.scss'


export const SearchForm = ({ setSearch }) => {

     const [value, setValue] = useState('');

     const submit = (e) => {
          e.preventDefault();
          setSearch(value)
          setValue('')
     }

     return (

          
               <form className={styles.containerSearchForm} onSubmit={submit}>
                    <input className="input-medium" type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="pesquisar" required />
                    <button className="btn" type="submit" >
                         <MdSearch size={21} />
                    </button>
               </form>
          

     )
}