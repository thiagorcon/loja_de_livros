import Logo from '../../assets/Vector_white.svg';
import styles from './style.module.scss';
import '../../styles/index.scss';


export const Footer = () => {

     return (
          <>
               <div class={styles.container}>
                    <footer className='container'>
                         <div class={styles.container}>
                              <img src={Logo} alt="logo Books" />
                              <p className='paragraph white'>criado por @thiago - 2024.</p>
                         </div>
                    </footer >
               </div>
          </>

     )
}