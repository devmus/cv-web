import { Arbete } from "./Arbete/Arbete"
import { Erfarenhet } from "./Erfarenhet/Erfarenhet"
import { Ovrigt } from "./Ovrigt/Ovrigt"
import { Utbildning } from "./Utbildning/Utbildning"

export const PageTwo = ({}) => {

  return (
  <>
        <div className="page-two-container">
          <div className="page-two">
            <Arbete/>
            <div className="diverse">
              <Utbildning />
              <Erfarenhet/>
            </div>
            <Ovrigt />
          </div>
        </div>
  </>
  )
}
