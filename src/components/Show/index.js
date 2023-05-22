import PropTypes from 'prop-types';


//Use for showing/hiding other elements
export const Show = ({
    visible,
    children,
}) => (
    <div style = {{display: visible ? 'block': 'none'}}>
        {children}
    </div>

);

Show.propTypes = {
    visible: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}

export default Show;