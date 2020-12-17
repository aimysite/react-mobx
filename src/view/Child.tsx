/**
 * @author mazhihong_v
 * @date
 * @Description:
*/

import React from 'react';

interface IProps {
    num: number;
}
interface IState {

}
export default class Child extends React.Component<IProps, IState> {
    public render() {
        return (
            <div>
                父组件数据： { this.props.num }
            </div>
        );
    }
}
