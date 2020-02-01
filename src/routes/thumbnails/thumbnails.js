import React, { Component } from "react";
import styles from "./thumbnails.module.less";
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
    const position = this.wrapperRef.current.scrollTop;
    if (position === 0) return;
    this.wrapperRef.current.scrollTo(0, position - STEP);
  }

  handleScrollDown() {
    const position = this.wrapperRef.current.scrollTop;
    this.wrapperRef.current.scrollTo(0, position + STEP);
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
        <div className={styles.wrapper_inside} ref={this.wrapperRef}>
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
        </div>
      </div>
    );
  }
}

Thumbnails.propTypes = {};
