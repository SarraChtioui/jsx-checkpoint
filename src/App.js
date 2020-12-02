import './style.css'; 
import myImage from "./imageInSrc.jpg"
  function App() {
  return(
  <>
  {/* Hello world */}
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Sarra Chtioui</h1>
    <br/>
    <img src="/imageInPublic.jpg" />
    <br/>
    <img src={myImage} />
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</>
  )
}

export default App;
