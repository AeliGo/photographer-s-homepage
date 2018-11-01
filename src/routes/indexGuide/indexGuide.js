import React,{Component} from 'react';
import styles from "./indexGuide.module.less";
import {config} from '../../config/config';
import 'animate.css/animate.min.css'

export default class IndexGuide extends Component {
    constructor(props){
        super(props);
        this.state = {
            curImgIndex:1,
        };
    }

    // UNSAFE_componentWillMount() {
    //     this.props.changeColorFun(true);
    // }


   

    render() {
    
    let titlesArr = config.data.map((item)=>{
        return {
            id:item.id,
            name:item.name
        }
    });
    let photoList=config.data.map((item)=>{
        return {...item.children[0],
                id:item.children[0].parentId+"_"+item.children[0].name,
            }
    })

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
                                >
                            {item.name + ' / '}
                        </p>
                    })
                }
            </div>
            <div className={styles.photos}>
                {
                    photoList.map((item,index)=>{
                        return <div key={item.id} 
                        className={(this.state.curImgIndex===index)?styles.fadein:''}><img src={item.url} alt="" key={item.id} /></div>
                    })
                }
            </div>
        </div> 
        )
    }
}