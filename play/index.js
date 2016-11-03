import {play} from 'vue-play'
import Blink from '../src'

play('Blink', module)
  .add('text', {
    example: '<Blink>ga hahahahah</Blink>',
    render: h => h(Blink, 'ga hahahahah')
  })
  .add('image', {
    example: `<Blink>
  <img src="http://ww4.sinaimg.cn/large/a15b4afegw1f9ew74qyc8j206103ea9v" />
</Blink>`,
    render: h => <Blink>
    <img src="http://ww4.sinaimg.cn/large/a15b4afegw1f9ew74qyc8j206103ea9v" />
  </Blink>
  })
