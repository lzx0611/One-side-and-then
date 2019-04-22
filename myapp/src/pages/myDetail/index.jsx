import Taro, { Component } from '@tarojs/taro'
import { View, Text, Map, Button, Image, Icon } from '@tarojs/components'
import my from '../../images/my.png'
import right from '../../images/arrow.svg'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }
  constructor(props) {
    super(props);

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
        <View className="banner">
          <View className="img">
            <Image src={my}></Image>
          </View>

        </View>
        <View className="content">
          <View className="conts">
            <View className="left">
              <Icon type="waiting"></Icon>
              <Text>我的面试</Text>
            </View>
            <View className="right">
              <Image src={right}></Image>
            </View>
          </View>
          <View className="conts">
            <View className="left">
              <Icon type="warn" color="skyblue"></Icon>
              <Text>客服中心</Text>
            </View>
            <View className="right">
              <Image src={right}></Image>
            </View>
          </View>
        </View>

      </View>
    )
  }
}
