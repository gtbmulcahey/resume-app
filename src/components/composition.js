import IconButton from '@mui/material/IconButton';

export const ApplicationIconButton = ({ onClick, ...props }) => {
    return (
        <IconButton
            disableRipple={true}
            color='primary'
            size="large"
            onClick={onClick}
        >
            {props.children}
        </IconButton>
    );
}

export const ExpandMoreOrLessButton = ({onClick, children, props}) => {
    return (
        <ApplicationIconButton onClick={onClick} >
            {children}
        </ApplicationIconButton>
    )
}