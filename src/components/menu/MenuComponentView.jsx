import React from 'react';
import DefaultCard from "../../generic/DefaultCard";

const MenuComponentView = (props) => {

    const {
        response: {
            uuid,
            email,
            fullName,
            phoneNumber,
            lastSeen,
            isEnabled,
            shouldChangePassword
        } = {}
    } = props

    return (
        <DefaultCard>
            Hello, {fullName}!
        </DefaultCard>
    );
};

MenuComponentView.propTypes = {};

export default MenuComponentView;
