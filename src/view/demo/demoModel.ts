import { action, makeObservable, observable } from 'mobx';

export default class DemoModel {
    @observable public num: number = 1;
    @observable public list: Array<{
        id: number;
        name: string;
    }> = [
        {id: 0, name: '0'},
        {id: 1, name: '1'},
        {id: 2, name: '2'},
    ];

    constructor() {
        makeObservable(this);
    }

    @action
    public setNum(val: number): void {
        this.num = val;
    }
    @action
    public push(item: any){
        this.list.unshift(item);
    }
    @action
    public shift(){
        this.list.shift();
    }

    public getNum(): number {
        return this.num;
    }
}
