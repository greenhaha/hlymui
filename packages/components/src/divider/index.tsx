import React from "react";
import cx from 'classnames';

export type DividerTypes = 'horizontal' | 'vertical'
export type DividerOrientation = 'left' | 'center' | 'right'

export interface DividerProps {
    type?: DividerTypes;
    className?: string;
    style?: React.CSSProperties;
    dashed?: boolean;
    prefixCls?: string;
    children?: React.ReactNode;
    orientation?: DividerOrientation;
    plain?: boolean;
}

const Divider: React.FC<DividerProps> = props => {
    const {
        prefixCls = 'hlym-divider',
        type = 'horizontal',
        className,
        style,
        orientation= 'center',
        dashed = false,
        plain = false,
        children
    } = props
    return (
        <div 
            className={
                cx(prefixCls, {
                    [`${prefixCls}-${type}`]: type,
                    [`${prefixCls}-text-${orientation}`]: orientation,
                    [`${prefixCls}-dashed`]: dashed,
                    [`${prefixCls}-plain`]: plain,
                    [className]: className,
                })
            }
            style={style}
        >
            {children&&<span
                className={`${prefixCls}-inner-text`}
            >{children}</span>}
        </div>
    )
}

export default Divider;