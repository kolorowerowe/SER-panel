import React from 'react';
import PropTypes from 'prop-types';

const MenuComponentView = (props) => {

    const {response} = props

    return (
        <div>
            menu: {response}
        </div>
    );
};

MenuComponentView.propTypes = {

};

export default MenuComponentView;
