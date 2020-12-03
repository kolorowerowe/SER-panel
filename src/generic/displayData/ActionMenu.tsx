import React, {useCallback, useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useTranslation} from "react-i18next";


export type ActionItem = {
    name: string;
    onClick: () => void;
}

type ActionMenuProps = {
    actions: ActionItem[];
}

const ActionMenu: React.FC<ActionMenuProps> = ({actions = []}: ActionMenuProps) => {

    const {t} = useTranslation();

    const [menuAnchorEl, setMenuAnchorEl] = useState(null);

    const handleOpen = useCallback(event => {
        event.preventDefault();
        setMenuAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback(event => {
        event.preventDefault();
        setMenuAnchorEl(null);
    }, []);


    return (
        <div>
            <IconButton onClick={handleOpen}>
                <MoreVertIcon/>
            </IconButton>

            <Menu
                anchorEl={menuAnchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={!!menuAnchorEl}
                onClose={handleClose}
            >
                {actions.length ?
                    actions.map(({name, onClick}) => (
                        <MenuItem onClick={e => {
                            e.preventDefault();
                            onClick();
                        }} key={`menu-${name}`}>
                            {name}
                        </MenuItem>))
                    :
                    <MenuItem disabled={true}>
                        {t('general:noActionAllowed')}
                    </MenuItem>
                }
            </Menu>
        </div>
    );
};

export default ActionMenu;
