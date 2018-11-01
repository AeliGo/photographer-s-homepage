import React,{Component} from 'react';
import styles from './detail.module.less';
import {config} from '../../config/config';


export default class DetailPage extends Component{


  UNSAFE_componentWillMount() {
    this.props.changeColorFun(true);
  }

  render(){ //循环所有图片的配置 和添加需要用的字段，获取url中路由参数(第几张图片) 筛选出需要显示的图片的参数obj 
        let urlList=[];
        let count=0;
        config.data.forEach((parent)=>{
        if(parent&&parent.children){
            parent.children.forEach((child,cindex)=>{
                count++;
                urlList.push({
                    parentId:parent.id,
                    parentName:parent.name,
                    url:child.url,
                    picName:child.name,
                    numInAlbum:cindex,
                    numInAll:count
                });
            });
        }
        });
        urlList=urlList.map((item)=>({...item,numInAllStr:`${item.numInAll} / ${count}`}));

        const routePathname=this.props.history.location.pathname;
        let infoStr=routePathname.substring(0,8)==='/detail/'?routePathname.substring(8):'';

        let infoItemObj=urlList.filter((item)=>{
            return item.numInAll.toString()===infoStr;
        });
        infoItemObj=infoItemObj[0];

    return (
        <div className={styles.wrapper}>
            <div className={styles.imgBox}>
                <img src={infoItemObj?infoItemObj.url:''} alt=""/>
            </div>
            <span className={styles.albumName}>{infoItemObj?infoItemObj.parentName:''}</span>
            <span className={styles.leftBottom}>{infoItemObj?infoItemObj.picName:''}</span>
            <span className={styles.rightBottom}>{infoItemObj?infoItemObj.numInAllStr:''}</span>
        
        </div> 
    )
  }
}

DetailPage.propTypes = {
};

