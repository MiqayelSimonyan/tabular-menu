import React, { useState, memo } from 'react';

import './style.scss';

type TabsProps = {
    tabs: Array<{ id: number, tabValue: string }>,
    components: Array<JSX.Element>
};

const Tabs = ({ tabs, components }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(0);

    const onClick = (index: number) => {
        setActiveTab(index);
    };

    return <div className='tabs col-md-12'>
        <ul className='nav nav-pills'>
            {
                tabs.map((tab, index) => {
                    const { id, tabValue } = tab;

                    return <li className='nav-item col-md-6' key={id}>
                        <span
                            onClick={onClick.bind(null, index)}
                            className={`${activeTab === index ? 'nav-link active' : 'nav-link'}`}
                        >
                            {tabValue}
                        </span>
                    </li>
                })
            }
        </ul>
        {components[activeTab]}
    </div>
};

export default memo(Tabs);