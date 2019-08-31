import React, {Component} from 'react';
import './App.css';
import Nav from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import FaceDetector from './components/FaceDetector/FaceDetector'
import ImageLink from './components/ImageLink/ImageLink'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '608015c8b6304a999c727d2419a11bc6'
 });
 

const particleOptions = { 
    particles: {
      number:{
        value:50
      },
      line_linked: {
        shadow: {
          enable: true,
          color: "#3CA9D1",
          blur: 5
        }
      }
    }
  }


class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  } 

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onSubmit = () =>{
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => {console.log(err);})
  }

  render(){
  return (
    <div className="App">
        <Particles className="particles"
          params={particleOptions}
        />
      <Nav/>
      <Logo />
      <ImageLink onInputChange={this.onInputChange} onButtonSubmit={this.onSubmit}/>
      <FaceDetector box={this.state.box} imageUrl={this.state.imageUrl}/>
    </div>
  );
}
}
export default App;
