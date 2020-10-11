import React from "react";

type Props = {
    children: React.ReactNode | React.ReactNodeArray;
    maxWidth?: number;
}

const CenteredColumnComponent: React.FC<Props> = ({children, maxWidth = 800}: Props) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <div style={{maxWidth: maxWidth, flex: 1, flexDirection: 'column'}}>
                {children}
            </div>
        </div>
    );
};

export default CenteredColumnComponent;