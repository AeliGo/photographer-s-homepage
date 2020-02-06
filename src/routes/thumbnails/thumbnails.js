import React, { Component } from "react";
import styles from "./thumbnails.module.less";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { NavLink } from "react-router-dom";
// import {config} from '../../config/config';

const STEP = 35;

export default class Thumbnails extends Component {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
  }

  UNSAFE_componentWillMount() {
    this.props.changeColorFun(true);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyUpFun); //绑定键盘事件
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyUpFun);
  }

  //键盘事件
  keyUpFun = e => {
    switch (e.keyCode) {
      //UP
      case 38:
        this.handleScrollUp();
        break;
      //DOWN
      case 40:
        this.handleScrollDown();
        break;
      default:
        break;
    }
  };

  handleScrollUp() {
    this.wrapperRef.current.scrollTop = -80;
  }

  handleScrollDown() {
    this.wrapperRef.current.scrollTop = 80;
  }

  render() {
    let urlList = [];
    let count = 0;
    config.data.forEach(parent => {
      if (parent && parent.children) {
        parent.children.forEach(child => {
          count++;
          urlList.push({
            parentId: parent.id,
            url: child.url,
            numInAll: count
          });
        });
      }
    });

    return (
      <div className={styles.wrapper}>
        <PerfectScrollbar ref={this.wrapperRef} speed={0.8} className={styles.wrapper_inside}>
          <div className={styles.container}>
            {urlList.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  className={styles.item}
                  // style={{backgroundImage:'url('+item.url+')'}}
                  to={{
                    pathname: `/detail/${item.numInAll}`
                  }}
                >
                  <img src={item.url} alt="" />
                </NavLink>
              );
            })}
          </div>
        </PerfectScrollbar>
      </div>
    );
  }
}
