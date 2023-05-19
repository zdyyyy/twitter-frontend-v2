import { DatePicker } from 'antd-mobile';
import style from './index.module.scss';
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
            title='Time Selection'
            visible={visible}
            onClose={() => {
            setVisible(false);
            }}
            
            onConfirm={(val) => {
             onChange(moment(val).format('YYYYMMDD'));
            }}
        />
    
        <div className={style.birthdayInput} onClick = {onClickDatePicker}>
            <div className={style.birthdayTitleItem}>birthday</div>
            <div>
                <span className={style.birthdayPlaceholder}>{value ? moment(value).format('YYYY/MM/DD'): 'YYYY/MM/DD' }</span>
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
