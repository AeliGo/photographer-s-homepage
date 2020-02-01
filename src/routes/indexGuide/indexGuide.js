import React, { Component } from "react";
import styles from "./indexGuide.module.less";
// import {config} from '../../config/config';
import "animate.css/animate.min.css";

export default class IndexGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curImgIndex: 1,
      titlesArr: []
    };
    this.imgContainerRef = ref => {
      this.refDom = ref;
    }; //获取dom
  }

  UNSAFE_componentWillMount() {
    // this.props.changeColorFun(true);
    this.init();
  }

  init = () => {
    let count = 1,
      added = 0;
    let titlesArr = config.data.map((item, index) => {
      count = count + added;
      added = item.children.length;

      return {
        id: item.id,
        name: item.name,
        count: count,
        childPicUrl: item.children.length > 0 ? item.children[0].url : ""
      };
    });

    this.setState({
      titlesArr
    });
  };

  render() {
    const { titlesArr } = this.state;
    let containerW = this.refDom && this.refDom.offsetWidth;
    let containerH = this.refDom && this.refDom.offsetHeight;
    let randomW = containerW ? containerW * (1 - 0.45) : 800;
    let randomH = containerH ? containerH * (1 - 0.75) : 100;

    return (
      <div className={styles.container} ref={this.imgContainerRef}>
        <div className={styles.titles}>
          {titlesArr.map((item, index) => {
            return (
              <p
                key={index}
                onMouseEnter={() => {
                  this.setState({ curImgIndex: index });
                }}
                onClick={() => {
                  this.props.history.push(`/detail/${item.count}`);
                }}
              >
                {item.name + " / "}
              </p>
            );
          })}
        </div>
        <div
          className={styles.showPhotoRandom}
          style={{ left: Math.random() * randomW, top: Math.random() * randomH }}
          key={this.state.curImgIndex}
        >
          <img src={titlesArr[this.state.curImgIndex].childPicUrl} alt="" />
        </div>
      </div>
    );
  }
}
