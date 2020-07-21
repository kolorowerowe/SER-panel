import React from 'react';
import DefaultCard from "../../generic/DefaultCard";

const MenuComponentView = (props) => {

    const {
        user: {
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
        <DefaultCard title={`Hello, ${fullName}!`}>
        </DefaultCard>
    );
};

MenuComponentView.propTypes = {};

export default MenuComponentView;
