import "./logo.css";

const Logo = () => {
  return (
    <div>
      <h1 className="welcome">Welcome to Preview Pack</h1>
      <div className="introduction">
        <p className="padded desc-title">
          Here you can write and execute your code on the go.
    </p>
        <div>
          <ul>
            <li className="padded">You can import nmp packages and make use of them.</li>
            <li className="padded">You can add, move up and down, or delete code cells.</li>
            <li className="padded">You can execute your code by using show() function:</li>
            <li className="padded inde"> show(123)</li>
            <li className="padded">Or by reffering to root id:</li >
            <li className="padded inde"> document.querySelector("#root").innerHTML = "your string"</li>
            <li>Everything will be displayed on Preview Window.</li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Logo;

