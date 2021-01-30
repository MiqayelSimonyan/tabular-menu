import React, { memo } from 'react';
import moment from 'moment';

import { IMessage } from '../../types/message';
import './style.scss';

type MessageProps = {
    messages: Array<IMessage> | null,
    bgColor: string | null
};

const Messages = ({ messages, bgColor }: MessageProps): JSX.Element => {
    return <div className='messages-wrapper'>
        {
            messages?.length ?
                messages.map((message, index) => {
                    const { senderName, body, date } = message;

                    return <div className='message-wrapper' key={index} style={{ backgroundColor: bgColor ? bgColor : 'transparent' }}>
                        <div className='sender-name' style={{ color: bgColor ? '#fff' : '#676262' }}>{senderName}</div>
                        <div className='message' style={{ color: bgColor ? '#fff' : '#000' }}>{body}</div>
                        <div className='date' style={{ color: bgColor ? '#fff' : '#000' }}>{moment(date).format('YYYY-MM-DD HH:mm')}</div>
                    </div>
                })
                : null
        }
    </div>
};

export default memo(Messages);