import "./App.css";
import Button from "./components/Button/Button";

import Header from "./components/Header/Header";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import InputBox from "./components/InputBox/InputBox";
import PageHeader from "./components/PageHeader/PageHeader";

function App() {
  return (
    <div className="container">
      <Header label={"Create Event"} />
      <div className="body-container">
        <PageHeader
          title={"Event Details"}
          description={"Enter event information below"}
        />
        <ImageUpload />
        <InputBox label={"Event Title"} placeholder={"Enter event title"} />
        <InputBox
          label="Event Description"
          placeholder={"Enter event description"}
          size="large"
        />
        <InputBox
          label={"Date and Time"}
          placeholder={"Select date and time"}
          icon={"cal"}
        />
        <Button label={"Create Event"} />
      </div>
    </div>
  );
}

export default App;
