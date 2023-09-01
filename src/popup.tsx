import { CountButton } from "~features/count-button"
import LocationButton from "~features/location-button"

import "~style.css"

function IndexPopup() {
  return (
    <div className="plasmo-flex plasmo-bg-black plasmo-items-center plasmo-justify-center plasmo-h-16 plasmo-w-40">
      {/* <CountButton /> */}
      <LocationButton/>
    </div>
  )
}

export default IndexPopup
