import Cards from "../Cards/Cards";
import "./MainDash.css";
import { PushToTalkButton } from "@speechly/react-ui";

function Test1() {
  return (
    <div className="MainDash">
      <h1>order page</h1>
      <Cards />
      {/* <Table /> */}

      <PushToTalkButton
    placement="bottom"
    // hide="false"
    captureKey=" "
    intro="Push to talk"
    size="80px" >
  </PushToTalkButton>
    </div>
  )
}

export default Test1