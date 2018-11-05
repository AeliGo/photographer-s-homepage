import React,{Component} from 'react';
import styles from './detail.module.less';
import {config} from '../../config/config';


export default class DetailPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            urlList:[],
            count:null,
            isShowed:true
        };
    }

    init=()=>{
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
        this.setState({
            urlList,//图片List
            count,//图片总个数
        });
    }

    jumpToDetail=(str)=>{
        
        let numNow=this.getCurPicIndex();
        let numToMove;
        if(str==='left'){
            numToMove=(numNow===1)?this.state.count:(numNow-1);
        }else if(str==='right'){
            numToMove=(numNow===this.state.count)?1:(numNow+1); 
        }
        this.setState({isShowed:false});
        setTimeout(()=>{
            this.props.history.push(`/detail/${numToMove}`);
        },500);
    }

    keyUpFun=(e)=>{
        const t=this;
        switch(e.keyCode){
            case 37: t.jumpToDetail('left')
            break
            case 39: t.jumpToDetail('right')
            break
            default:
            break
        }
    }
    getCurPicIndex=()=>{
        const routePathname=this.props.history.location.pathname;//获取路由上第几张图片
        let infoStr=routePathname.substring(0,8)==='/detail/'?routePathname.substring(8):'';
        return Number(infoStr);
    }

    UNSAFE_componentWillMount() {
        this.props.changeColorFun(true);
        this.init()
    }

    componentDidMount(){
        document.addEventListener('keyup',this.keyUpFun); //绑定键盘事件
    }

    componentWillUnmount(){
        document.removeEventListener('keyup',this.keyUpFun);
    }

  render(){ //循环所有图片的配置 和添加需要用的字段，获取url中路由参数(第几张图片) 筛选出需要显示的图片的参数obj 
        const t=this;
        let numNow=t.getCurPicIndex();
        const infoItemObj=t.state.urlList[numNow-1];

    return (
        <div className={styles.wrapper}>
            <div className={styles.imgBox}>
                <img 
                className={t.state.isShowed?styles.imgFadeIn:''}
                src={infoItemObj?infoItemObj.url:''} alt=""
                onLoad={()=>{
                    t.setState({isShowed:true})
                }}
                />
            </div>
                <span 
                className={styles.prev} 
                onClick={()=>{
                    t.jumpToDetail('left');
                }}></span>
                <span 
                className={styles.next}
                onClick={()=>{
                    t.jumpToDetail('right');
                }}></span>
            <span className={styles.albumName}>{infoItemObj?infoItemObj.parentName:''}</span>
            <span className={styles.leftBottom}>{infoItemObj?infoItemObj.picName:''}</span>
            <span className={styles.rightBottom}>{infoItemObj?infoItemObj.numInAllStr:''}</span>
        <div style={{display:'none'}}>
            {
               t.state.urlList.map((item,index)=>{
                   return <img key={index} src={item.url} alt=""/>
               }) 
            }
        </div>
        </div> 
    )
  }
}

DetailPage.propTypes = {
};

