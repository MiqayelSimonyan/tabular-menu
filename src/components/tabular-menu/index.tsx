import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getMessages as getMessagesAction } from '../../ducks/messages';
import Tabs from '../tabs';
import Search from '../search';
import SetColorSelectbox from '../set-color-selectbox';
import Messages from '../messages';
import { loadingSelector, messagesSelector } from '../../selectors/messages';
import Loader from '../common/loader';
import { IMessage } from '../../types/message';

const TabularMenu = () => {
    const dispatch = useDispatch();
    const loading: boolean = useSelector(loadingSelector);
    const messages: Array<IMessage> = useSelector(messagesSelector);
    const [messagesCopy, setMessagesCopy] = useState<Array<IMessage> | null>(null);
    const [messagesBackgroundColor, setMessagesBackgroundColor] = useState<string | null>(null);

    useEffect(() => {
        dispatch(getMessagesAction());
    }, []);

    useEffect(() => {
        setMessagesCopy(messages);
    }, [messages]);

    return (
        <div className='container'>
            {loading ? <Loader /> :
                <>
                    <Tabs
                        tabs={
                            [
                                { id: 1, tabValue: 'Search Messages' },
                                { id: 2, tabValue: 'Add Messages Color' }
                            ]
                        }
                        components={
                            [
                                <Search
                                    messages={messages}
                                    setMessagesCopy={setMessagesCopy}
                                    setMessagesBackgroundColor={setMessagesBackgroundColor}
                                />,
                                <SetColorSelectbox
                                    messages={messages}
                                    setMessagesCopy={setMessagesCopy}
                                    setMessagesBackgroundColor={setMessagesBackgroundColor}
                                />
                            ]
                        }
                    />
                    <Messages
                        messages={messagesCopy}
                        bgColor={messagesBackgroundColor}
                    />
                </>
            }
        </div>
    );
};

export default TabularMenu;