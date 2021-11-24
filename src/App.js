import Background from './background.jpg';
import './App.css';

function App() {
  return (
    <div className="App" >
        <div style={{height:1050, width: 2060, background: `url(${Background})`, backgroundSize: '100%'}}>
        <a className="App-link"
          href="https://apk.e-droid.net/apk/app1721939.apk?v=4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download the app
        </a>
      </div>
    </div>
  );
}

export default App;
