import styles from './style.module.scss'

export const BookCard = ({book}) => {

     return (

          <div className={styles.filterBox}>
               <li className={styles.bookCard} key={book.id} >
                    <div>
                    <h2 className="title2">{book.name}</h2>
                    <p>{book.category}</p>
                    </div>                    
                    <span className="paragraph bold">R$ {book.price.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}</span>
               </li>
          </div>
               
          
     )
}