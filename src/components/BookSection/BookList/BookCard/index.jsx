

export const BookCard = ({book}) => {

     return (

          
               <li key={book.id} >
                    <div>
                    <h3>{book.name}</h3>
                    <h4>{book.category}</h4>
                    </div>
                    
                    <span>R$ {book.price}</span>
               </li>
          
     )
}