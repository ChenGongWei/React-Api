import React from 'react'

class Columns extends React.Component {
    render() {
        return (

            // 直接怎么写会报错：JSX 表达式必须具有一个父元素。
            // <td>Hello</td>
            // <td>World</td>


            // 这样写不会报错，但增加了额外的 div 元素
            // <div>
            //     <td>Hello</td>
            //     <td>World</td>
            // </div>


            // 这样可以正常展示，不会添加额外的dom元素
            // <React.Fragment>
            //     <td>Hello</td>
            //     <td>World</td>
            // </React.Fragment>

            // 简写
            <>
                <td>Hello</td>
                <td>World</td>
            </>
        )
    }
}

class Table extends React.Component {
    render() {
        return (
            <table>
                <tr>
                    <Columns />
                </tr>
                <tr>
                    { ['Hello', 'World'].map(item => <td key={item}> {item} </td>) }
                </tr>
            </table>
        )
    }
}

export default Table