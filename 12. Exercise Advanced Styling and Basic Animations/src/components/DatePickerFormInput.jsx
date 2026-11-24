import DateTimePicker from '@react-native-community/datetimepicker';
import FormInput from './FormInput';
import { useState } from 'react';

export default function DatePickerFormInput(props) {
    const [show, setShow] = useState(false);

    return (
        <>
            <FormInput
                {...props}
                onChangeText={() => null}
                value={props.value.toLocaleDateString('bg-BG')}
                onAction={() => setShow(true)}
            />

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={props.value}
                    mode="date"
                    is24Hour={true}
                    onValueChange={(_, date) => {
                        setShow(false);
                        if (date) {
                            props.onChangeText(date);
                        }
                    }}
                />
            )}
        </>
    )
}
