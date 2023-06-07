import style from './index.module.scss';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
			
const IconButton = ({
    src,
    className,
    svgClass,
}) => 
	(<div className = {className}>
        <ReactSVG 
            src = {src}
            beforeInjection = {(svg) => {
                if (!svgClass) return;
                svg.childNodes.forEach((item) => {
                    if (item && item.classList) {
                        item.classList.add(svgClass);
                    }
                })
            }} 
                 />
     </div>
);

IconButton.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    svgClass: PropTypes.string.isRequired,
}
			
export default IconButton;