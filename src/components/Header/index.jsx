import Logo from '../../assets/Vector_blue.svg'
import styles from './style.module.scss'
import '../../styles/index.scss'

export const Header = () => {

     return (

          <header  >
               {/* <div className='container'> */}
                    <header className={styles.header}>
                         <div className={styles.flexbox}>
                              <img src={Logo} alt="logo Books" />
                         </div>
                    </header>
               {/* </div> */}
          </header>
     )
}


