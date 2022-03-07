import React, { memo } from 'react';

interface FormWrapProps {
  children: React.ReactNode;
  className?: string;
}

function FormWrap({ children, className }: FormWrapProps) {
  return (
    <div
      className={className}
      style={{
        width: '300px',
        margin: '80px auto 0',
      }}
    >
      {children}
    </div>
  );
}
// 使用memo高阶组件来提高组件的性能 只有传进来的props发生变化才会重新渲染
export default memo(FormWrap);
