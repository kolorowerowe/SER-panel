import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useTranslation} from "react-i18next";
import {Divider} from "@material-ui/core";


type Props = {
    dialogOpen: boolean;
    setDialogOpen: (isOpen: boolean) => void;
    onSubmit: () => void;
    title: string;
    children: React.ReactNode | React.ReactNodeArray;
    submitLabel?: string;
}

const DialogComponent: React.FC<Props> = (props: Props) => {

    const {t} = useTranslation();

    const {
        dialogOpen,
        setDialogOpen,
        onSubmit,
        title = '',
        submitLabel = t('general:add'),
        children,
    } = props;




    return (
        <Dialog open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                fullWidth
                maxWidth={'md'}>

            <DialogTitle>
                {title}
            </DialogTitle>

            <Divider/>

            <DialogContent>
                {children}
            </DialogContent>

            <DialogActions>
                <Button onClick={() => setDialogOpen(false)}
                        color="primary"
                        variant="outlined"
                >
                    {t('general:cancel')}
                </Button>
                <Button onClick={onSubmit}
                        color="primary"
                        variant="contained"
                >
                    {submitLabel}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DialogComponent;

