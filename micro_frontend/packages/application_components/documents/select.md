## Introduction
This is a Select Component.
## API
### Select props
| **参数** | **说明** | **类型** | **默认值** | **版本** |
| --- | --- | --- | --- | --- |
| **allowClear** | 支持清除 | boolean | false |  |
| **autoClearSearchValue** | 是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效 | boolean | true |  |
| **autoFocus** | 默认获取焦点 | boolean | false |  |
| **bordered** | 是否有边框 | boolean | true |  |
| **clearIcon** | 自定义的多选框清空图标 | ReactNode | - |  |
| **defaultActiveFirstOption** | 是否默认高亮第一个选项 | boolean | true |  |
| **defaultOpen** | 是否默认展开下拉菜单 | boolean | - |  |
| **defaultValue** | 指定默认选中的条目 | string &#124; string[] &#124;
number &#124; number[] &#124;
LabeledValue &#124; LabeledValue[] | - |  |
| **disabled** | 是否禁用 | boolean | false |  |
| **popupClassName** | 下拉菜单的 className 属性 | string | - | 4.23.0 |
| **popupMatchSelectWidth** | 下拉菜单和选择器同宽。默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动 | boolean &#124; number | true | 5.5.0 |
| **dropdownRender** | 自定义下拉框内容 | (originNode: ReactNode) => ReactNode | - |  |
| **dropdownStyle** | 下拉菜单的 style 属性 | CSSProperties | - |  |
| **fieldNames** | 自定义节点 label、value、options、groupLabel 的字段 | object | { label: label, value: value, options: options, groupLabel: label } | 4.17.0（groupLabel 在 5.6.0 新增） |
| **filterOption** | 是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false | boolean &#124; function(inputValue, option) | true |  |
| **filterSort** | 搜索时对筛选结果项的排序函数, 类似[Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
里的 compareFunction | (optionA: Option, optionB: Option) => number | - | 4.9.0 |
| **getPopupContainer** | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codesandbox.io/s/4j168r7jw0) | function(triggerNode) | () => document.body |  |
| **labelInValue** | 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式 | boolean | false |  |
| **listHeight** | 设置弹窗滚动高度 | number | 256 |  |
| **loading** | 加载中状态 | boolean | false |  |
| **maxTagCount** | 最多显示多少个 tag，响应式模式会对性能产生损耗 | number &#124; responsive | - | responsive: 4.10 |
| **maxTagPlaceholder** | 隐藏 tag 时显示的内容 | ReactNode &#124; function(omittedValues) | - |  |
| **maxTagTextLength** | 最大显示的 tag 文本长度 | number | - |  |
| **menuItemSelectedIcon** | 自定义多选时当前选中的条目图标 | ReactNode | - |  |
| **mode** | 设置 Select 的模式为多选或标签 | multiple &#124; tags | - |  |
| **notFoundContent** | 当下拉列表为空时显示的内容 | ReactNode | Not Found |  |
| **open** | 是否展开下拉菜单 | boolean | - |  |
| **optionFilterProp** | 搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索。若通过 options 属性配置选项内容，建议设置 optionFilterProp="label" 来对内容进行搜索。 | string | value |  |
| **optionLabelProp** | 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。[示例](https://codesandbox.io/s/antd-reproduction-template-tk678) | string | children |  |
| **options** | 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能 | { label, value }[] | - |  |
| **placeholder** | 选择框默认文本 | string | - |  |
| **placement** | 选择框弹出的位置 | bottomLeft bottomRight topLeft topRight | bottomLeft |  |
| **removeIcon** | 自定义的多选框清除图标 | ReactNode | - |  |
| **searchValue** | 控制搜索文本 | string | - |  |
| **showArrow** | 是否显示下拉小箭头 | boolean | true |  |
| **showSearch** | 配置是否可搜索 | boolean | 单选为 false，多选为 true |  |
| **size** | 选择框大小 | large &#124; middle &#124; small | middle |  |
| **status** | 设置校验状态 | 'error' &#124; 'warning' | - | 4.19.0 |
| **suffixIcon** | 自定义的选择框后缀图标。以防止图标被用于其他交互，替换的图标默认不会响应展开、收缩事件，可以通过添加 pointer-events: none 样式透传。 | ReactNode | - |  |
| **tagRender** | 自定义 tag 内容 render，仅在 mode 为 multiple 或 tags 时生效 | (props) => ReactNode | - |  |
| **tokenSeparators** | 自动分词的分隔符，仅在 mode="tags" 时生效 | string[] | - |  |
| **value** | 指定当前选中的条目，多选时为一个数组。（value 数组引用未变化时，Select 不会更新） | string &#124; string[] &#124;
number &#124; number[] &#124;
LabeledValue &#124; LabeledValue[] | - |  |
| **virtual** | 设置 false 时关闭虚拟滚动 | boolean | true | 4.1.0 |
| **onBlur** | 失去焦点时回调 | function | - |  |
| **onChange** | 选中 option，或 input 的 value 变化时，调用此函数 | function(value, option:Option &#124; Array<Option>) | - |  |
| **onClear** | 清除内容时回调 | function | - | 4.6.0 |
| **onDeselect** | 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效 | function(value: string &#124; number &#124; LabeledValue) | - |  |
| **onDropdownVisibleChange** | 展开下拉菜单的回调 | function(open) | - |  |
| **onFocus** | 获得焦点时回调 | function | - |  |
| **onInputKeyDown** | 按键按下时回调 | function | - |  |
| **onMouseEnter** | 鼠标移入时回调 | function | - |  |
| **onMouseLeave** | 鼠标移出时回调 | function | - |  |
| **onPopupScroll** | 下拉列表滚动时的回调 | function | - |  |
| **onSearch** | 文本框值变化时回调 | function(value: string) | - |  |
| **onSelect** | 被选中时调用，参数为选中项的 value (或 key) 值 | function(value: string &#124; number &#124; LabeledValue, option: Option) | - |  |