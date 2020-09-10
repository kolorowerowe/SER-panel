import React from 'react';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import {Typography} from "@material-ui/core";


export type NavLinkProps = {
    index: string;
    text: string;
    icon: object;
    path: string;
}

type Props = NavLinkProps & {
    handleRedirect: (path: string) => void;
};

const SimpleNavLink: React.FC<Props> = (props: Props) => {

    const {
        index,
        text,
        icon,
        path,
        handleRedirect
    } = props;

    return (
        <ListItem key={index}
                  button
                  onClick={(): void => handleRedirect(path)}
        >
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText>
                <Typography>
                    {text}
                </Typography>
            </ListItemText>
        </ListItem>
    );
};


export default SimpleNavLink;
