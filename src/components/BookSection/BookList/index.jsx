//import { BookCard } from "./BookCard"
//import books from '../../../Data/books'
import { BookCard } from './BookCard'


export const BookList = ({search, bookList }) => {

     return (
          <div>
               <span>Livros listados : {bookList.length }</span>
               {search ?  <p>resultados de busca por: {search}  </p> : null  }
               
               {bookList.length > 0 ? (
                    <ul>
                         {bookList.map(book => (
                              <BookCard key={book.id} book={book} />
                         ))}
                    </ul>
               ) : <p>nenhum livro encontrado</p>}


          </div>
     )
}