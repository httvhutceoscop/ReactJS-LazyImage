import React, { Component } from 'react';
import LazyImage from './lazy-image';
import FolkMe from './Folkme';
import './App.css';
import placeHolder from '../images/place-holder.png';

const numImages = 1356
const imgData = []

const LazyImageWrapper = props => (
  <div className="cell">
    <LazyImage
      placeHolder={placeHolder}
      src={props.src}
      width={`100%`}
      height={`auto`}
      effect={"opacity"}
      alt={props.alt}
    />
    <div className="caption">{props.alt}</div>
  </div>
)

const createImgData = () => {
  
  for (let i = 1; i <= numImages; i++) {
    let id = ("00000" + i).slice(-5)
    imgData.push({
      id: id,
      uri: `/img/sexycos_${id}.jpg`
    })
  }

  return imgData
}

class App extends Component {

  imgData = createImgData()

  render() {
    return (
      <div className="app">
        <h2 className="title">Where is your girls? Scroll down down down ...</h2>

        <div className="grid">
        { imgData.map( (img) => {
            return (
              <LazyImageWrapper src={`${img.uri}`} alt={`${img.id}`} />
            )
          })
        }
        </div>

        <FolkMe
          targetURL={this.props.url}
          color="#fff"
          backgroundColor="#000"
          position="right"
          size="100px"
          ariaLabel="View source on Github"
        />
      </div>
    );
  }
}

export default App;
