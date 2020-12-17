import React from 'react';
import Child from './view/Child';
import Demo from './view/demo/demo';
import DemoModel from './view/demo/demoModel';
import { observer } from 'mobx-react'

@observer
export default class Application extends React.Component<any, any>{
    private demoModel = new DemoModel();
    public render() {
        return (
            <div>
                <div>
                    demo数据：{ this.demoModel.num }
                </div>
                <Demo model={ this.demoModel }/>
                <Child num={ this.demoModel.num } />
            </div>
        );
    }
}
