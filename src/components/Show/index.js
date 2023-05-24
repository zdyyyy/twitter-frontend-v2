import PropTypes from 'prop-types';


//Use for showing/hiding other elements
//-css: control showing or not, element cache
//- way of uninstalling elements, no need to cache
//
export const Show = ({
    visible,
    isMount,
    children,
}) => (
    <div style = {{display: visible ? 'block': 'none'}}>
        {isMount || visible && children}
    </div>

);

Show.propTypes = {
    visible: PropTypes.bool.isRequired,
    isMount: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}

export default Show;