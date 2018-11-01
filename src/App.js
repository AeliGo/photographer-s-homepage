import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'

import IndexGuide from './routes/indexGuide/indexGuide';
import Infomation from './routes/infomation/infomation';
import Thumbnails from './routes/thumbnails/thumbnails';
import DetailPage from './routes/detail/detail';
import './resource/css/base.css'
import styles from'./App.module.less'


import classNames from 'classnames';
import 'animate.css/animate.min.css'


export default class Router4Transition extends Component {
    constructor(props){
        super(props)
        this.state={
            darkFontColor:(window.location.pathname==='/')?false:true
        }
    }

    changeFontColor=(bool)=>{
        this.setState({darkFontColor:bool})
    }
    
    render() {

        const {darkFontColor}= this.state
        
    return (
      <Router>

        <div className={styles.wrapper}>
            <div className={styles.navContainer}>
                <div
                    className={classNames(styles.navLeft, {
                    [styles.darkColor]: darkFontColor,
                })} >
                    <p className={styles.indexName}>Yingda Xu</p>
                    <ul className={styles.navLeftDropdown}>
                        <li><NavLink to="/enterIndex" exact>Index</NavLink></li>
                        <li><NavLink to="/thunmnails">Thumbnails</NavLink></li>
                    </ul>
                </div>
            
                <div
                    className={classNames(styles.navRight, {
                        [styles.darkColor]: darkFontColor
                })}>
                    <NavLink to="/infomation">Info</NavLink>
                </div>
            </div>

          <div className={styles.pages}>
            <Route
              path="/"
              exact
              children={props => {
                return <Entry {...props} changeColorFun={this.changeFontColor}/>
              }}
            />
            <Route
              path="/enterIndex"
              exact
              children={props => {
                return <Index {...props} changeColorFun={this.changeFontColor}/>
              }}
            />
            <Route
              path="/infomation"
              exact
              children={props => {
                return <Info {...props} changeColorFun={this.changeFontColor}/>
              }}
            />
            <Route
              path="/thunmnails"
              exact
              children={props => {
                return <Thumb {...props} changeColorFun={this.changeFontColor}/>
              }}
            />

            <Route
              path="/detail/:album"
              children={props => {
                return <Detail {...props} changeColorFun={this.changeFontColor}/>
              }}
            />
          </div>
        </div>
      </Router>
    )
  }
}

const Entry = wrapAnimation(
    class Entry extends Component { 

    UNSAFE_componentWillMount() {
        this.props.changeColorFun(false);
    }
    componentWillUnmount() {
        this.props.changeColorFun(true);
    }
    render() {
        return   <div className={styles.enterContainer}></div>
      }
    }
)
const Index = wrapAnimation(IndexGuide)

const Info = wrapAnimation(Infomation)

const Thumb = wrapAnimation(Thumbnails)

const Detail = wrapAnimation(DetailPage)


function wrapAnimation(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <CSSTransition
          in={this.props.match !== null}
          classNames={{
            enter: 'animated',
            enterActive: 'fadeIn',
            exit: 'animated',
            exitActive: 'fadeOut'
          }}
          // timeout={{
          //   enter: 454,
          //   exit: 255,
          // }}
          timeout={{
            enter: 1500,
            exit: 0,
          }}

          mountOnEnter={true}
          unmountOnExit={true}
        >
          <WrappedComponent {...this.props} />
        </CSSTransition>
      )
    }
  }
}

