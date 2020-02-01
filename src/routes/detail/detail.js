import React, { Component } from "react";
import styles from "./detail.module.less";
import classNames from "classnames";
// import {config} from '/config.js';

export default class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlList: [],
      count: null,
      statementListObj: undefined,
      isShowed: true,
      isFolded: "init",
      throttle: true //statement点击节流
    };
    this.imgBoxRef = ref => {
      this.refDom = ref;
    }; //获取dom
  }

  init = () => {
    let urlList = [],
      statementListObj = {};
    let count = 0;
    config.data.forEach(parent => {
      if (!!parent && !!parent.name && parent.statement.length > 0 && !statementListObj[parent.name]) {
        statementListObj[parent.name] = parent.statement;
      }
      if (parent && parent.children) {
        parent.children.forEach((child, cindex) => {
          count++;
          urlList.push({
            parentId: parent.id,
            parentName: parent.name,
            url: child.url,
            picName: child.name,
            numInAlbum: cindex,
            numInAll: count
          });
        });
      }
    });
    urlList = urlList.map(item => ({ ...item, numInAllStr: `${item.numInAll} / ${count}` }));
    this.setState({
      urlList, //图片List
      count, //图片总个数
      statementListObj //相册statement
    });
  };

  jumpToDetail = str => {
    let numNow = this.getCurPicIndex();
    let numToMove;
    if (str === "left") {
      numToMove = numNow === 1 ? this.state.count : numNow - 1;
    } else if (str === "right") {
      numToMove = numNow === this.state.count ? 1 : numNow + 1;
    }
    this.setState({ isShowed: false });
    setTimeout(() => {
      this.props.history.push(`/detail/${numToMove}`);
    }, 500);
  };
  //键盘事件
  keyUpFun = e => {
    const t = this;
    switch (e.keyCode) {
      case 37:
        t.state.isFolded !== "false" && t.jumpToDetail("left"); //只有statement未打开的时候才能换图片
        break;
      case 39:
        t.state.isFolded !== "false" && t.jumpToDetail("right");
        break;
      default:
        break;
    }
  };

  getCurPicIndex = () => {
    const routePathname = this.props.history.location.pathname; //获取路由上第几张图片
    let infoStr = routePathname.substring(0, 8) === "/detail/" ? routePathname.substring(8) : "";
    return Number(infoStr);
  };

  UNSAFE_componentWillMount() {
    this.props.changeColorFun(true);
    this.init();
  }

  componentDidMount() {
    document.addEventListener("keyup", this.keyUpFun); //绑定键盘事件
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", this.keyUpFun);
  }

  render() {
    //循环所有图片的配置 和添加需要用的字段，获取url中路由参数(第几张图片) 筛选出需要显示的图片的参数obj
    const t = this;
    let numNow = t.getCurPicIndex();
    const infoItemObj = t.state.urlList[numNow - 1];
    let leftPosition = 250; //默认居中的位置  绝对定位的left属性
    if (this.refDom) {
      //计算出居中的位置，文字固定宽度600
      const { clientWidth } = this.refDom;
      leftPosition = (clientWidth - 600) / 2;
    }

    return (
      <div className={styles.wrapper}>
        <div ref={this.imgBoxRef} className={styles.imgBox}>
          <img
            className={t.state.isShowed ? styles.imgFadeIn : ""}
            src={infoItemObj ? infoItemObj.url : ""}
            alt=""
            onLoad={() => {
              t.setState({ isShowed: true });
            }}
          />
          <div
            className={classNames(styles.statements, {
              [styles.statementUnfold]: t.state.isFolded === "false",
              [styles.statementFold]: t.state.isFolded === "true"
            })}
          >
            <div
              style={{ left: leftPosition + "px" }} //动态改变 绝对定位的left属性的值
              className={styles.stateWrapper}
            >
              {infoItemObj &&
                Array.isArray(t.state.statementListObj[infoItemObj.parentName]) &&
                t.state.statementListObj[infoItemObj.parentName].map((item, index) => {
                  return (
                    <p className={styles.stateParah} key={index}>
                      {item}
                    </p>
                  ); //渲染statement的多个段落
                })}
            </div>
          </div>
        </div>
        <span
          className={styles.prev}
          onClick={() => {
            t.state.isFolded !== "false" && t.jumpToDetail("left"); //只有statement未打开的时候才能点击
          }}
        ></span>
        <span
          className={styles.next}
          onClick={() => {
            t.state.isFolded !== "false" && t.jumpToDetail("right");
          }}
        ></span>
        {/* <span className={styles.albumName}>{
                infoItemObj&&<span>
                    <span>{infoItemObj.parentName}</span>
                    <span>
                        {
                            (t.state.isFolded==='init'|| t.state.isFolded==='true')?<span 
                                                className={styles.iconfont + ' ' + styles.iconPlus}
                                                onClick={()=>{
                                                    if(t.state.throttle){
                                                        t.setState({isFolded:'false',throttle:false})
                                                        setTimeout(()=>{
                                                            t.setState({throttle:true})
                                                        },800)
                                                    }
                                                }}
                                            >&#xe603;</span>
                                            :<span 
                                                className={styles.iconfont + ' ' + styles.iconMinus}
                                                onClick={()=>{
                                                    if(t.state.throttle){
                                                        t.setState({isFolded:'true',throttle:false})
                                                        setTimeout(()=>{
                                                            t.setState({throttle:true})
                                                        },800)
                                                    }
                                                }}
                                            >&#xe606;</span>
                        }
                    </span>
                </span>
            }
            </span> */}
        {/* <span className={styles.leftBottom}>{infoItemObj?infoItemObj.picName:''}</span> */}
        <span className={styles.leftBottom}>
          {infoItemObj && (
            <span>
              <span>{infoItemObj.parentName}</span>
              <span>
                {t.state.isFolded === "init" || t.state.isFolded === "true" ? (
                  <span
                    className={styles.iconfont + " " + styles.iconPlus}
                    onClick={() => {
                      if (t.state.throttle) {
                        t.setState({ isFolded: "false", throttle: false });
                        setTimeout(() => {
                          t.setState({ throttle: true });
                        }, 1000);
                      }
                    }}
                  >
                    &#xe604;
                  </span>
                ) : (
                  <span
                    className={styles.iconfont + " " + styles.iconMinus}
                    onClick={() => {
                      if (t.state.throttle) {
                        t.setState({ isFolded: "true", throttle: false });
                        setTimeout(() => {
                          t.setState({ throttle: true });
                        }, 1000);
                      }
                    }}
                  >
                    &#xe605;
                  </span>
                )}
              </span>
            </span>
          )}
        </span>
        <span className={styles.rightBottom}>{infoItemObj ? infoItemObj.numInAllStr : ""}</span>
        <div style={{ display: "none" }}>
          {t.state.urlList.map((item, index) => {
            return <img key={index} src={item.url} alt="" />;
          })}
        </div>
      </div>
    );
  }
}
