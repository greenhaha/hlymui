import React from 'react';
import { Button } from '@hlym/components';

export default () => {
  const setStyle = () => {
    console.log('1112');
  };
  return (
    <>
      <Button
        onClick={() => {
          setStyle();
        }}
      >
        默认按钮
      </Button>
      <br />
      <Button type="primary">高亮按钮</Button>
      <br />
      <Button type="primary" disabled>
        我被禁用
      </Button>
    </>
  );
};