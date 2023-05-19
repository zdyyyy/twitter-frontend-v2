import { DatePicker } from 'antd-mobile';
import style from './index.module.css';
import moment from 'moment';
import PropTypes from 'prop-types';
import datepickerIcon from '../../assets/datepicker-icon.svg';
import { useState } from 'react';


const DatePickerInput = ({
    value,
    onChange}) => {
    const [visible,setVisible] = useState(false);
    const onClickDatePicker = () => {
        setVisible(true);
    };
    return (<>
        <DatePicker
            title='时间选择'
            visible={visible}
            onClose={() => {
            setVisible(false);
            }}
            max={now}
            onConfirm={(val) => {
             onChange(val)
            }}
        />
    
        <div className={style.birthdayInput} onClick = {onClickDatePicker}>
            <div className={style.birthdayTitleItem}>birthday</div>
            <div>
                <span className={style.birthdayPlaceholder}>{value ? moment(value).format('YYYY/MM/DD'): 'y/m/d' }</span>
                <img className = {style.datepickerIcon} src = {datepickerIcon} alt = "datepickerIcon"></img>
            </div>
        </div>
    </>
    ); 
};

DatePickerInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default DatePickerInput;
