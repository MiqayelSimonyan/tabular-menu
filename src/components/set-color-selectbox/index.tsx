import React, { useEffect, memo, ChangeEvent, Dispatch, SetStateAction } from 'react';

import { IMessage } from '../../types/message';
import './style.scss';

type SetColorSelectboxProps = {
    messages: Array<IMessage>,
    setMessagesCopy: Dispatch<SetStateAction<IMessage[] | null>>,
    setMessagesBackgroundColor: Dispatch<SetStateAction<string | null>>
};

const SetColorSelectbox = ({ messages, setMessagesBackgroundColor, setMessagesCopy }: SetColorSelectboxProps): JSX.Element => {
    useEffect(() => {
        setMessagesCopy(messages);
    }, []);

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setMessagesBackgroundColor(event.target.value);
    };

    return <div className='set-color-selectbox col-md-6'>
        <select onChange={onChange} className='form-select form-control'>
            <option value='default'>Choose color</option>
            <option defaultValue='#ff0000'>Red</option>
            <option defaultValue='#008000'>Green</option>
            <option defaultValue='#0000ff'>Blue</option>
        </select>
    </div>
};

export default memo(SetColorSelectbox);