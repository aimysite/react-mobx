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
        this.handleStop();
        this.timer = setInterval(()=>{
            this.model.setNum(this.model.num + 1);
            // this.model.num = this.model.num + 1;
        }, 0);
    }
    private handleStop = () => {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    public componentDidUpdate(prevProps: IProps, prevState: any) {
        super.componentDidUpdate(prevProps,prevState);
    }

    public render() {
        return (
            <div>
                <p>{ this.model.num }</p>
                <button onClick={ this.handleAdd }>START</button>
                <button onClick={ this.handleStop }>STOP</button>
            </div>
        );
    }
}
