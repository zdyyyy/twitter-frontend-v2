import style from '../index.module.scss';
import { Button } from 'antd-mobile';
import PropTypes from 'prop-types'

//底部操作栏
const Footer = ({
    onClickNextStep,
    disabled,
    label,
}) => (
    <div className={style.footer}>
        <Button className={disabled ? style.footerButtonDisabled : style.footerButton} 
        onClick={onClickNextStep}
        >
        {label}
        </Button>
    </div>
);

Footer.PropTypes = {
    onClickNextStep: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
};

export default Footer;

