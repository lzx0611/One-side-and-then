import Taro, { Component } from '@tarojs/taro'
import { View, Text,Map,Button,Image} from '@tarojs/components'
import Location from '../../images/location.png'
import person from '../../images/my.png'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '一面而就'
  }
  constructor(props){
    super(props);
    this.state={
      longitude: 116.302559,
      latitude: 40.042774,
      markers:[{
        id: 0,
        iconPath: "../../images/location_logo.png",
        latitude: 40.042774,
        longitude: 116.302559,
        width: 50,
        height: 50
      }]
    }
  }
  componentWillMount () { }

  componentDidMount () { 
    let that = this;
    
     wx.getLocation({
       type: "gcj02",
       success: function(res){
         console.log(res)
        let latitude = res.latitude;//纬度40.042774
        let longitude = res.longitude;//经度116.302559
        //console.log(res.latitude);
         that.setState({
          latitude: latitude,
          longitude: longitude,
            markers:[{
            latitude: res.latitude,
            longitude: res.longitude
          }]
         })
        //console.log(res.latitude,res.longitude)
       }
     })
  }

  componentWillUnmount () { }

  componentDidShow () { 
    
  }

  componentDidHide () {}
  addlnterview(){
    Taro.navigateTo({
      url: '/pages/addLnterview/index'
      })
  }
  render () {
    console.log(this.state.longitude,this.state.latitude)
    return (
      <View className='index'>
        <Map id="map" subkey={"G5NBZ-HNE6J-FMIFI-KGIOJ-WGZNZ-5DFJ4"}
        longitude={this.state.longitude} latitude={this.state.latitude} markers={markers} scale="13" show-location
        ></Map>
        <View className="imgs">
          <Image src={Location} className="left-img" onClick={(e)=>{
        
            let mpCtx = Taro.createMapContext("map");
            mpCtx.moveToLocation();[]
          }}></Image>
          <Image src={person} className="right-img" onClick={()=>{
            Taro.navigateTo({
              url:'/pages/myDetail/index'
            })
          }}></Image>
        </View>
        <Button onClick={this.addlnterview.bind(this)}>添加面试</Button>
      </View>
    )
  }
}
