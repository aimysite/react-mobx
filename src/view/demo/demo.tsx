import React from 'react';
import APage, { IAPagePage } from '../../abstract/AbstractPage';
import DemoModel from './demoModel';
import { observer } from 'mobx-react';

interface IProps extends IAPagePage<DemoModel>{

}

@observer
export default class Demo extends APage<IProps, DemoModel> {
    private timer: any;
    private handleAdd = (): void => {
        // this.handleStop();
        // this.timer = setInterval(()=>{
        //     this.model.setNum(this.model.num + 1);
        //     // this.model.num = this.model.num + 1;
        // }, 0);
        const list = this.model.list;
        this.model.push({
            id: list.length,
            name: Math.random().toString(32).substr(0, 8)
        })
    }
    private handleStop = () => {
        this.model.shift();
    }
    public componentDidUpdate(prevProps: IProps, prevState: any) {
        super.componentDidUpdate(prevProps,prevState);
    }

    public render() {
        return (
            <div>
                <ul>
                    {
                        this.model.list.map((item, index)=>{
                            return (
                                <li key={ index }>
                                    {item.name}
                                </li>
                            )
                        })
                    }
                </ul>
                <p>{ this.model.num }</p>
                <button onClick={ this.handleAdd }>START</button>
                <button onClick={ this.handleStop }>STOP</button>
            </div>
        );
    }
}
