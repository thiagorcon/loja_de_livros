import { Filters } from "./Filters"
import { BookList } from "./BookList"
import { useState } from "react"
import books from '../../../src/Data/books';
import styles from '../BookSection/style.module.scss'
import '../../styles/index.scss';




export const BookSection = () => {
     //console.log(books);


     const [search, setSearch] = useState('')
     const [category, setCategory] = useState('')
     const [min, setMin] = useState('');
     const [max, setMax] = useState('');







     const booksResult = books.filter((book) => {

          const searchFilter =
               search === ' ' ? true : book.name.toLowerCase().includes(search.toLowerCase()) || book.category.toLowerCase().includes(search.toLowerCase());

          const categoryFilter = category === '' ? true : book.category === category;

          const minPriceFilter = min == '' ? true : book.price > Number(min);
          const maxPriceFilter = max == '' ? true : book.price > Number(max);

          return searchFilter && categoryFilter && minPriceFilter && maxPriceFilter;
     });

     console.log(booksResult);



     const cleanFilters = () => {
          setSearch('');
          setCategory('')
          setMin('')
          setMax('')
     }




     return (
          <>
               <section >
                    <div className="container">


                         <div className={styles.flexbox}>
                              <Filters cleanFilters={cleanFilters} setSearch={setSearch} setCategory={setCategory} min={min} setMin={setMin} max={max} setMax={setMax} />
                              <BookList search={search} bookList={booksResult} />
                         </div>

                    </div>

               

          </section >
          </>
     )
}