import React from 'react';
import List from "@material-ui/core/List";
import SimpleNavLink, {NavLinkProps} from "./navLinks/SimpleNavLink";
import CollapsibleNavLink from "./navLinks/CollapsibleNavLink";


type ChildrenNavItem = NavLinkProps & {
    visible: boolean;
}

type NavItem = NavLinkProps & {
    visible: boolean;
    collapsible: boolean;
    childrenItems?: ChildrenNavItem[];
}

type Props = {
    navItems: NavItem[];
    handleRedirect: (path: string) => void;
}

const NavigationList: React.FC<Props> = ({navItems, handleRedirect}: Props) => {


    return (
        <List>
            {navItems
                .filter(x => !!x.visible)
                .map(item =>
                    (item.collapsible ?
                        <CollapsibleNavLink {...item}
                                            handleRedirect={handleRedirect}
                        />
                        :
                        <SimpleNavLink {...item}
                                       handleRedirect={handleRedirect}
                        />)
                )}
        </List>
    );
};


export default NavigationList;
