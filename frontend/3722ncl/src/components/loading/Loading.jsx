import React, { useState, useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

const Loading = () => {

    return (
        <div >
            <Spin indicator={<LoadingOutlined spin />} size="large" />
            <div style={{ fontSize: 30, marginTop: 20 }}>Loading...</div>
        </div>
    );
};

export default Loading;