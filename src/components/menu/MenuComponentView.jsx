import React from 'react';
import DefaultCard from "../../generic/DefaultCard";

const MenuComponentView = (props) => {

    const {response} = props

    return (
        <DefaultCard>
            menu: {response}
        </DefaultCard>
    );
};

MenuComponentView.propTypes = {};

export default MenuComponentView;
