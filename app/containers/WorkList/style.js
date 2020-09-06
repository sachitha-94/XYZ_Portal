import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    button: {
        margin: theme.spacing(1),

    },
    formRowCell: {
        padding: theme.spacing(1),
    },
}));

export default useStyles;
