import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    item: {
        padding: theme.spacing(1),
    },
    itemButton: {
        textAlign: 'center',
    }
}));

export default useStyles;
