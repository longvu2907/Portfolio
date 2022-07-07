import React from "react";
import { motion } from "framer-motion";

export default function Logo(props) {
  return (
    <motion.svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='89.6025'
      height='103.4641'
      viewBox='0 0 89.6025 103.4641'
    >
      <defs>
        <style>
          {
            ".aef748c1-906c-41b4-ae74-b8e0f2d40fd1{fill:#231f20;}.f25e3329-aedb-4e45-9f9d-b9283877cc86{fill:none;stroke:#231f20;stroke-miterlimit:10;stroke-width:5px;}"
          }
        </style>
      </defs>
      <g id='bccf0f55-1ac4-48d9-9220-bee9ae76a450' data-name='Layer 2'>
        <g id='ee29cd07-26b1-4c39-966e-d29647b8f3fc' data-name='Layer 1'>
          <motion.path
            className='aef748c1-906c-41b4-ae74-b8e0f2d40fd1'
            d='M32.463,32.7816,45.9186,67.3988,59.4151,32.535q1.0533-2.7474,1.5806-3.8213a5.258,5.258,0,0,1,1.7427-1.9365,5.6521,5.6521,0,0,1,3.3237-.8628,6.2237,6.2237,0,0,1,2.8574.6689,5.3791,5.3791,0,0,1,2.0669,1.7784,3.9664,3.9664,0,0,1,.75,2.2363,6.4231,6.4231,0,0,1-.2432,1.6728,13.7471,13.7471,0,0,1-.6079,1.7608q-.3648.8636-.73,1.7783L55.7677,69.5467q-.7706,1.9372-1.54,3.68a14.8984,14.8984,0,0,1-1.7832,3.0639,7.6678,7.6678,0,0,1-2.6954,2.1656,9.091,9.091,0,0,1-4.1137.8452,9.2637,9.2637,0,0,1-4.1138-.8276,7.51,7.51,0,0,1-2.7153-2.1832,15.4177,15.4177,0,0,1-1.8037-3.0815q-.77-1.7249-1.54-3.6626L21.317,36.0916q-.3648-.9155-.75-1.7959a12.4619,12.4619,0,0,1-.6484-1.9018,7.0839,7.0839,0,0,1-.2637-1.7256,4.336,4.336,0,0,1,1.6616-3.2749,6.045,6.045,0,0,1,4.1748-1.479q3.08,0,4.3569,1.6372A20.48,20.48,0,0,1,32.463,32.7816Z'
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.75, delay: 2 }}
          />
          <motion.polygon
            className='f25e3329-aedb-4e45-9f9d-b9283877cc86'
            points='88.103 76.732 88.103 26.732 44.801 1.732 1.5 26.732 1.5 76.732 44.801 101.732 88.103 76.732'
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
        </g>
      </g>
    </motion.svg>
  );
}
