
import React from 'react'
export interface IAPagePage<M> {
    model: M
}
const MY_OBJECT: any = {};
export default class APage<P, M> extends React.Component<P & IAPagePage<M>, any>{
    public model: M = MY_OBJECT as M;
    public constructor(props: IAPagePage<M> & P) {
        super(props);
        this.model = this.props.model;
    }
    public componentDidUpdate( prevProps: Readonly<IAPagePage<M> & P>, prevState: Readonly<{}>, snapshot?: any ) {
        if (this.props.model !== prevProps.model ) {
            this.model = this.props.model
        }
    }
}
