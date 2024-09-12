import React, { useState, useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

const Loading = () => {

    return (
        <div >
            <Spin indicator={<LoadingOutlined spin />} size="large" />
        </div>
    );
};

export default Loading;