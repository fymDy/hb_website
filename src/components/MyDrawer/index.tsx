

import clsx from "clsx";
import { useState, useEffect } from "react";
import { Popup, Space, Button } from 'antd-mobile'
interface DrawerProps {
  visible: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

// 一个从右边出现的抽屉
function MyDrawer({ visible,onClose, children }: DrawerProps) {
  return(
    <div>
            <Popup
              visible={visible}
              onMaskClick={onClose}
              position='left'
              bodyStyle={{ width: '60vw' }}
            >
             <div style={{ padding: 20 }}></div>
            </Popup>
    </div>
  )
}


export default MyDrawer;
