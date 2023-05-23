import style from './index.module.scss';
import PropTypes from 'prop-types';
import { Input } from 'antd-mobile';
import { useState ,useEffect } from 'react';

//富交互的Input
const TInput = ({
    label,
    value,
    length,
    onChange,
    ...otherProps
}) => {
    const [isFocused,setIsFocused] = useState(false);
    const [hide,setHide] = useState(false);

    useEffect(() => {
        if (value) {
            setIsFocused(true);
            setHide(true);
        }
    },[]);
    
    const onFocus = () => {
        setIsFocused(true);
        setHide(true);
    };

    const onBlur = () => {
        if (!value || value.length === 0){
            setIsFocused(false);
            setHide(false);
        }
        setHide(false);
    };

    const onChangeHandler = (val) => {
        if (val.length > length){
            return;
        }
        onChange(val);

    };

    return (
    <div className = {hide ? style.tInputFocused : style.tInput}>
        <div className={isFocused ? style.tInputFocused : style.label}>
            {label}
            {hide && length && <span className={style.labelRight}>
                {value?.length}
                /
                {length}
            </span>}
            
        </div> 
        <Input
            className={isFocused ? style.inputItemFocused : style.inputItem} 
            onFocus={onFocus} 
            onBlur={onBlur}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
        />
    </div>
    );
};

TInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    onChange: PropTypes.func,
}

TInput.defaultProps = {
    label: '',
    value: undefined,
    length: undefined,
    onChange: () => {},
}

export default TInput;