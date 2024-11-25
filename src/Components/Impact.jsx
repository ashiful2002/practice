import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Divider } from 'antd';
import { IMPACT } from '../constants/index'
import { div } from 'framer-motion/client';
import { ImParagraphCenter } from 'react-icons/im';

const About = () => {
  return (


<>
<div>
  <div>
    <div>
      {
        IMPACT.map((item)=>(
          <div key={item.id}>
            <div>
              <h2>{item.icon}</h2>

            </div>
          </div>
        ))
      }
    </div>
  </div>
</div>
</>
  )
}

export default About
