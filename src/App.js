import logo from "./logo.svg";
import "./App.css";
import picture from "./images/img3.png";

function App() {
  return (
    <div>
      <section>
        <div className="imgBx">
          <img src={picture} alt="logo" />
        </div>
        <div className="contentBx">
          <div className="formBx">
            <h2>Add To-Do</h2>
            <form>
              <div className="inputBx">
                <span>Name</span>
                <input type="text" name=""></input>
              </div>
              <div className="inputBx">
                <span>Email</span>
                <input type="email" name=""></input>
              </div>
              <div className="inputBx">
                <span>Todo</span>
                <textarea type="text" name="" rows="4"></textarea>
              </div>
              <div className="inputBx">
                <input type="submit" value="Submit" name=""></input>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
