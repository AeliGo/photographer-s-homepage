import React,{Component} from 'react';
import styles from './thumbnails.module.less';
import {NavLink} from 'react-router-dom'
// import {config} from '../../config/config';



export default class Thumbnails extends Component{
  UNSAFE_componentWillMount() {
    this.props.changeColorFun(true);
  }

  render(){
    let urlList=[];
    let count=0;
    config.data.forEach((parent)=>{
      if(parent&&parent.children){
        parent.children.forEach((child)=>{
          count++;
          urlList.push({
            parentId:parent.id,
            url:child.url,
            numInAll:count
          });
        });
      }
    });

    return (
      
        <div className={styles.wrapper}>
          <div className={styles.container}>
          {
            urlList.map((item,index)=>{
              return <NavLink key={index} 
                        className={styles.item}  
                        // style={{backgroundImage:'url('+item.url+')'}} 
                        to={{
                          pathname:`/detail/${item.numInAll}`,
                        }}   
                      >
                        <img src={item.url} alt="" />
                      </NavLink>
            })
          }
          </div>   
        </div> 
    )
  }
}

Thumbnails.propTypes = {
};