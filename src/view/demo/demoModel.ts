import { action, makeObservable, observable } from 'mobx';

export default class DemoModel {
    @observable public num: number = 1;

    constructor() {
        makeObservable(this);
    }

    @action
    public setNum(val: number): void {
        this.num = val;
    }

    public getNum(): number {
        return this.num;
    }
}
