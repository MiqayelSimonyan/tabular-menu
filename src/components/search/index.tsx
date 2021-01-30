import React, { useEffect, memo, ChangeEvent, Dispatch, SetStateAction } from 'react';

import { IMessage } from '../../types/message';
import './style.scss';

type SearchProps = {
    messages: Array<IMessage>,
    setMessagesCopy: Dispatch<SetStateAction<IMessage[] | null>>,
    setMessagesBackgroundColor: Dispatch<SetStateAction<string | null>>
};

const Search = ({ messages, setMessagesCopy, setMessagesBackgroundColor }: SearchProps): JSX.Element => {
    useEffect(() => {
        setMessagesCopy(messages);
        setMessagesBackgroundColor(null);
    }, []);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        let searchedData = messages.filter(item => item.body.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);

        setMessagesCopy(searchedData);
    };

    return <div className='search-wrapper col-md-6'>
        <input onChange={onChange} className='form-control' type='text' placeholder='search message' />
    </div>
};

export default memo(Search);