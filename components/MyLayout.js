// components/MyLayout.js
import { Button } from 'antd';
import Header from './Header';

import styles from './MyLayout.less';

const withLayout = Page => {
  return () => (
    <div className={styles.test}>
      <Header />
      <Page />
      <Button type="primary">wo ai ni</Button>
    </div>
  )
}

export default withLayout