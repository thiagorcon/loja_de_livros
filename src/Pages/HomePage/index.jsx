import { BookSection } from "../../components/BookSection"
import { TitleSection } from '../../components/TitleSection'
import { DefaultTemplate } from "../../components/DefaultTemplate"


export const HomePage = () => {
     return (
          <DefaultTemplate>
               <TitleSection />
               <BookSection />
          </DefaultTemplate >
     )
}