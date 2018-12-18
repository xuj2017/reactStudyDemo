import React,{Component} from 'react'
import Button from 'antd/lib/botton'
import 'antd/dist/antd.css'

class TodoLists extends Component{

    

    render(){
        return (
            <div>
                <div>
                    {/* <Input placeholder="请输入内容" style={{width:'300px'}}/> */}
                    <Button type="primary">提交</Button>
                </div>
            </div>
            
        )
    }
}

export default TodoLists;