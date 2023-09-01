import { CountButton } from "~features/count-button"
import { LocationButton } from "~features/location-button"


import "~style.css"

function IndexPopup() {
  return (
    <div className="plasmo-flex plasmo-items-center plasmo-justify-center plasmo-h-[500px] plasmo-w-[500px]">
      {/* <CountButton /> */}
      <LocationButton/>
    </div>
  )
}

export default IndexPopup
