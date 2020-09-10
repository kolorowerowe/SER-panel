import React, {useState} from 'react';
import {Collapse, List} from "@material-ui/core";
import NestedNavLink from "./NestedNavLink";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import {NavLinkProps} from "./SimpleNavLink";


type ChildrenNavItem = NavLinkProps &{
    visible: boolean;
}

type Props = NavLinkProps &{
    visible: boolean;
    collapsible: boolean;
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

    const [open, setOpen] = useState(false);

    return (
        <div>
            <ListItem key={index}
                      button
                      onClick={(): void => setOpen(prevState => !prevState)}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text}/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={open}>
                <List disablePadding>
                    {childrenItems
                        .filter(({visible}) => visible)
                        .map((item, index) => <NestedNavLink key={index}
                                                             {...item}
                                                             handleRedirect={handleRedirect}
                        />)}
                </List>
            </Collapse>
        </div>

    );
};


export default CollapsibleNavLink;
