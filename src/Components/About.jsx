import React from 'react'
import about1 from '../../src/assets/about1.png'
import about2 from '../../src/assets/about2.png'

function about() {
  return (
    <>
    <div>
    <div className="diff aspect-[16/9]">
  <div className="diff-item-1">
    <img alt="daisy" src={about2} />
  </div>
  <div className="diff-item-2">
    <img
      alt="daisy"
      src={about1} />
  </div>
  <div className="diff-resizer"></div>
</div>
    </div>
    </>
  )
}

export default about