## Introduction
This is a Input Component.
## API
### Input
| **参数** | **说明** | **类型** | **默认值** | **版本** |
| --- | --- | --- | --- | --- |
| **addonAfter** | 带标签的 input，设置后置标签 | ReactNode | - |  |
| **addonBefore** | 带标签的 input，设置前置标签 | ReactNode | - |  |
| **allowClear** | 可以点击清除图标删除内容 | boolean &#124; { clearIcon: ReactNode } | - |  |
| **bordered** | 是否有边框 | boolean | true | 4.5.0 |
| **classNames** | 语义化结构 class | Record<[SemanticDOM](https://ant.design/components/input-cn#input-1)
, string> | - | 5.4.0 |
| **defaultValue** | 输入框默认内容 | string | - |  |
| **disabled** | 是否禁用状态，默认为 false | boolean | false |  |
| **id** | 输入框的 id | string | - |  |
| **maxLength** | 最大长度 | number | - |  |
| **showCount** | 是否展示字数 | boolean &#124; { formatter: (info: { value: string, count: number, maxLength?: number }) => ReactNode } | false | 4.18.0 info.value: 4.23.0 |
| **status** | 设置校验状态 | 'error' &#124; 'warning' | - | 4.19.0 |
| **styles** | 语义化结构 style | Record<[SemanticDOM](https://ant.design/components/input-cn#input-1)
, CSSProperties> | - | 5.4.0 |
| **prefix** | 带有前缀图标的 input | ReactNode | - |  |
| **size** | 控件大小。注：标准表单内的输入框大小限制为 middle | large &#124; middle &#124; small | - |  |
| **suffix** | 带有后缀图标的 input | ReactNode | - |  |
| **type** | 声明 input 类型，同原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#%E5%B1%9E%E6%80%A7)
(请直接使用 Input.TextArea 代替 type="textarea") | string | text |  |
| **value** | 输入框内容 | string | - |  |
| **onChange** | 输入框内容变化时的回调 | function(e) | - |  |
| **onPressEnter** | 按下回车的回调 | function(e) | - |  |