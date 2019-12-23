(this["webpackJsonp@uiw/react-baidu-map"]=this["webpackJsonp@uiw/react-baidu-map"]||[]).push([[162],{730:function(n,e,o){"use strict";o.r(e),e.default="OverviewMapControl \u7f29\u7565\u5730\u56fe\u63a7\u4ef6\n===\n\n\u7f29\u7565\u5730\u56fe\u63a7\u4ef6\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 `Map` \u7ec4\u4ef6 `widget` \u5c5e\u6027\u6765\u8bbe\u7f6e\u63a7\u4ef6\u66f4\u65b9\u4fbf\u3002\n\n```jsx\nimport { OverviewMapControl, useOverviewMapControl } from '@uiw/react-baidu-map';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite,noScroll--\x3e \n```jsx\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader, OverviewMapControl } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u5173\u95ed' : '\u5f00\u542f'}\n      </button>\n      <Map zoom={13}>\n        {show && (\n          <OverviewMapControl isOpen />\n        )}\n        <OverviewMapControl\n          isOpen\n          visiable={show}\n          offset={new BMap.Size(40, 40)}\n          anchor={BMAP_ANCHOR_TOP_RIGHT}\n          onViewChanged={() => {\n            console.log('onViewChanged ..')\n          }}\n        />\n      </Map>\n    </>\n  );\n}\n\nReactDOM.render((\n  <div style={{ width: '100%', height: '300px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n), _mount_);\n```\n\x3c!--End--\x3e\n\n\n### \u4f7f\u7528 hooks\n\n`overviewMapControl`, `setGeolocationControl`\n\n\x3c!--DemoStart,bgWhite--\x3e \n```jsx\nimport { useRef, useEffect, useState } from 'react';\nimport { Map, APILoader, useMap, useOverviewMapControl } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const divElm = useRef(null);\n  const [show, setShow] = useState(true);\n  const { setContainer, map } = useMap();\n  const { overviewMapControl } = useOverviewMapControl({\n    map, anchor: BMAP_NAVIGATION_CONTROL_LARGE, visiable: show, isOpen: true,\n  });\n\n  useEffect(() => {\n    if (divElm.current && !map) {\n      setContainer(divElm.current);\n    }\n  }, [map]);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u5173\u95ed' : '\u5f00\u542f'}\n      </button>\n      <div ref={divElm} style={{ height: '100%' }} />\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '300px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| visiable | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002 | `boolean` | - |\n| anchor | \u63a7\u4ef6\u7684\u4f4d\u7f6e\u504f\u79fb\u503c\u3002| `ControlAnchor` | `BMAP_ANCHOR_TOP_RIGHT` |\n| offset | \u63a7\u4ef6\u7684\u6c34\u5e73\u504f\u79fb\u503c\u3002 | `BMap.Size` | - |\n| size | \u7f29\u7565\u5730\u56fe\u63a7\u4ef6\u7684\u5927\u5c0f | `BMap.Size` | - |\n| isOpen | \u7f29\u7565\u5730\u56fe\u6dfb\u52a0\u5230\u5730\u56fe\u540e\u7684\u5f00\u5408\u72b6\u6001\uff0c\u9ed8\u8ba4\u4e3a\u5173\u95ed\u3002 | `boolean` | - |\n\n### \u4e8b\u4ef6\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b |\n| ----- | ----- | ----- |\n| onViewChanged | \u7f29\u7565\u5730\u56fe\u5f00\u5408\u72b6\u6001\u53d1\u751f\u53d8\u5316\u540e\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: any, target: any, isOpen: boolean }) => void; |\n| onViewChanging | \u7f29\u7565\u5730\u56fe\u5f00\u5408\u72b6\u6001\u53d1\u751f\u53d8\u5316\u8fc7\u7a0b\u4e2d\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { type: any, target: any }) => void; |\n"}}]);
//# sourceMappingURL=162.a058d232.chunk.js.map