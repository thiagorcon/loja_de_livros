//import { BookCard } from "./BookCard"
//import books from '../../../Data/books'
import { BookCard } from './BookCard';
import styles from './style.module.scss'


export const BookList = ({search, bookList }) => {

     return (
          <div className={styles.bookListBox}>
               <span className='paragraph bold'>Livros listados : {bookList.length }</span>
               {search ?  <p className='paragraph'>resultados de busca por: {search}  </p> : null  }
               
               {bookList.length > 0 ? (
                    <ul className={styles.bookList}>
                         {bookList.map(book => (
                              <BookCard key={book.id} book={book} />
                         ))}
                    </ul>
               ) : <p className='paragraph bold'>nenhum livro encontrado</p>}


          </div>
     )
}