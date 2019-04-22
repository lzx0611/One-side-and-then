import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import 'taro-ui/dist/style/index.scss'
import { AtSegmentedControl }  from 'taro-ui'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '面试列表'
  }
  constructor(props){
    super(props)
    this.state={
        current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  componentWillMount() { }

  componentDidMount() {

  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
 
  render() {
    return (
        
      <View className='index'>
      <AtSegmentedControl
        values={['未开始', '已打卡', '已放弃','全部']}
        onClick={this.handleClick.bind(this)}
        current={this.state.current}
        fontSize='30'
        style='height:100rpx'
      />
      {
        this.state.current === 0
        ? <View className='tab-content'>
            <View className="small-cont">
              <View className="top">
                  <Text>八维</Text>
                  <p>未开始</p>
              </View>
              <View className="middle">
                  <Text>DSDSDK</Text>
              </View>
              <View className="bottom">
                  <Text>面试时间：2018-2-15</Text>
                  <p>未提醒</p>
              </View>
          </View>
          <View className="small-cont">
              <View className="top">
                  <Text>八维</Text>
                  <p>未开始</p>
              </View>
              <View className="middle">
                  <Text>DSDSDK</Text>
              </View>
              <View className="bottom">
                  <Text>面试时间：2018-2-15</Text>
                  <p>未提醒</p>
              </View>
          </View>
        </View>
        : null
      }
      {
        this.state.current === 1
        ? <View className='tab-content'>标签2的内容</View>
        : null
      }
      {
        this.state.current === 2
        ? <View className='tab-content'>标签3的内容</View>
        : null
      }
 
       {/* <View className="nav">
        <Text>未开始</Text>
        <Text>已打卡</Text>
        <Text>已放弃</Text>
        <Text>全部</Text>
       </View>
       <View className="content">
        <View className="small-cont">
            <View className="top">
                <Text>八维</Text>
                <p>未开始</p>
            </View>
            <View className="middle">
                <Text>DSDSDK</Text>
            </View>
            <View className="bottom">
                <Text>面试时间：2018-2-15</Text>
                <p>未提醒</p>
            </View>
        </View>
       </View> */}
      </View>
    )
  }
}
