import React,{Component} from 'react';
import styles from './infomation.module.less'



export default class Infomation extends Component{


  // UNSAFE_componentWillMount() {
  //   this.props.changeColorFun(true);
  // }

  render(){
    return (
        <div className={styles.wrapper}>
        
          <div>
            <div>infomation</div>
            <div>infomation</div>
            <div>infomation</div>
            <div>infomation</div>
            <div>infomation</div>
            <div>infomation</div>
            <div>infomation</div>
          </div>
          <img src="http://images.xhbtr.com/v2/uploads/images/236812/xhbtr_23f2c9b2-1474-4da7-a22c-9345dc623c00_w1000.jpg" alt="" />
          
      </div> 
    )
  }
}

Infomation.propTypes = {
};

