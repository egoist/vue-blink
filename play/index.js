import {play} from 'vue-play'
import Blink from '../src'

play('Button', module)
  .add('text', h => h(Blink, 'ga hahahahah'))
  .add('image', h => <Blink>
    <img src="http://ww4.sinaimg.cn/large/a15b4afegw1f9ew74qyc8j206103ea9v" />
  </Blink>)
