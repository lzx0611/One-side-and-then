import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button, Textarea, Picker } from '@tarojs/components'

import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '添加面试'
  }
  constructor(props){
      super(props)
      this.state={
        timeSel: '12:01',
        dateSel: '2018-04-22',
        isShow:true
      }
     
  }
  componentWillMount() { }

  componentDidMount() {

  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  onTimeChange = (e) => {
    this.setState({
      timeSel: e.detail.value
    })
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }
  sure(){
    console.log(456)
    this.setState({
      isShow:!this.state.isShow
    })
  }
  render() {
    return (
      <View className='index'>
        <Text>面试信息</Text>
        <View className="content">
            <View className="conts">
                <Text>公司名称</Text>
                <Input placeholder="请输入公司名称"></Input>
            </View>
            <View className="conts">
                <Text>公司电话</Text>
                <Input placeholder="请输入公司电话"></Input>
            </View>
            <View className='conts'>
            <Text>面试时间</Text>
            <View>
                <Picker mode='date' onChange={this.onDateChange}>
                    <View className='picker'>
                    {this.state.dateSel}
                    </View>
                </Picker>
                <Picker mode='time' onChange={this.onTimeChange}>
                    <View className='picker'>
                    {this.state.timeSel}
                    </View>
                </Picker>
            </View>
          </View>
          
            <View className="conts">
                <Text>面试地址</Text>
                <Input placeholder="请输入面试地址"></Input>
            </View>
            <View className="message">
                <Text>备注信息</Text>
                <Textarea></Textarea>
            </View>
            <Button onClick={this.sure.bind(this)}>确认</Button>
        </View>
        <View className="dialog" hidden={this.state.isShow}>
          <View className="menu">
            <View className="top">
              <Text>温馨提示</Text>
              <Text>添加面试成功</Text>
            </View>
            <View className="bottom" onClick={()=>{
                this.setState({
                  isShow:true
                })
                Taro.navigateTo({
                  url: '/pages/lnterList/index'
                })
              
            }}>确定</View>
          </View>
        </View>
      </View>
    )
  }
}
