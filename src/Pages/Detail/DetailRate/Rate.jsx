import React, { useState } from 'react';
import { Rate } from 'antd';

const App = (props) => {
  const [value, setValue] = useState(props.rate);
 
  return (
    <span>
      <Rate  onChange={setValue} value={props.rate} />
     
    </span>
  );
};
export default App;