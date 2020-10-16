import React, {useMemo} from 'react';
import {Menu, MenuItem} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {NavLinkProps} from "./SimpleNavLink";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

type ChildrenNavItem = NavLinkProps & {
    visible: boolean;
}

type Props = NavLinkProps & {
    childrenItems?: ChildrenNavItem[];
    handleRedirect: (path: string) => void;
}


const CollapsibleNavLink: React.FC<Props> = (props: Props) => {

    const {
        index,
        text,
        icon,
        childrenItems = [],
        handleRedirect
    } = props;

    const [menuAnchorEl, setMenuAnchorEl] = React.useState<HTMLDivElement | null>(null);


    const onOpen = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setMenuAnchorEl(event.currentTarget)
    }

    const onClose = () => {
        setMenuAnchorEl(null);
    }

    const isOpen = useMemo(() => menuAnchorEl !== null, [menuAnchorEl]);


    return (
        <div>
            <ListItem key={index}
                      button
                      onClick={onOpen}
            >
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text}/>
                <KeyboardArrowRightIcon/>
            </ListItem>
            <Menu
                anchorEl={menuAnchorEl}
                keepMounted
                open={isOpen}
                onClose={onClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {childrenItems.filter(({visible}) => visible).map(item => <MenuItem key={item.text}
                                                                                    onClick={() => {
                                                                                        onClose();
                                                                                        handleRedirect(item.path);
                                                                                    }}>
                    {item.text}
                </MenuItem>)}

            </Menu>

        </div>

    );
};


export default CollapsibleNavLink;
