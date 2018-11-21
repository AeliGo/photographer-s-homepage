import React,{Component} from 'react';
import styles from "./indexGuide.module.less";
// import {config} from '../../config/config';
import 'animate.css/animate.min.css';
const config = window.config

export default class IndexGuide extends Component {
    constructor(props){
        super(props);
        this.state = {
            curImgIndex:1,
            titlesArr:[]
        };
    }

    UNSAFE_componentWillMount() {
        // this.props.changeColorFun(true);
        this.init();
    }

    
    init=()=>{
        let count=1,added=0;
        let titlesArr = config.data.map((item,index)=>{

            count=count+added;    
            added=item.children.length;

            return {
                id:item.id,
                name:item.name,
                count:count,
                childPicUrl:item.children.length>0?item.children[0].url:''
            }
        });

        this.setState({
            titlesArr
        });
    }


    render() {
    
    const { titlesArr}=this.state;
    return (
        <div className={styles.container}>
            <div className={styles.titles}>
                {
                    titlesArr.map((item,index)=>{
                        return <p 
                                key={index}
                                onMouseEnter={()=>{
                                    this.setState({curImgIndex:index})
                                }}
                                onClick={()=>{
                                    this.props.history.push(`/detail/${item.count}`);
                                }}
                                >
                            {item.name + ' / '}
                        </p>
                    })
                }
            </div>
            <div className={styles.photos}>
                {
                    titlesArr.map((item,index)=>{
                        return <div key={item.id} 
                        className={(this.state.curImgIndex===index)?styles.fadein:''}><img src={item.childPicUrl} alt="" key={item.id} /></div>
                    })
                }
            </div>
        </div> 
        )
    }
}