import React from 'react';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {NavLinkProps} from "./SimpleNavLink";
import {Typography} from "@material-ui/core";


type Props = NavLinkProps &{
    handleRedirect: (path: string) => void;
};


const useStyles = makeStyles((theme) => ({
    nestedItem: {
        paddingLeft: theme.spacing(4),
        color: 'secondary'
    }
}));

const NestedNavLink: React.FC<Props> = (props: Props) => {

    const {
        index,
        text,
        icon,
        path,
        handleRedirect
    } = props;

    const styles = useStyles();

    return (
        <ListItem key={index}
                  button
                  onClick={(): void => handleRedirect(path)}
                  className={styles.nestedItem}>
            <ListItemIcon color="textSecondary">
                {icon}
            </ListItemIcon>
            <ListItemText>
                <Typography color="textSecondary">
                    {text}
                </Typography>
            </ListItemText>
        </ListItem>
    );
};


export default NestedNavLink;
