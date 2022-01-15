import * as React from 'react';

export const CenterBox = () => {
  return (
    <div style={{ display: 'flex', backgroundColor: 'black', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'block', backgroundColor: 'white', height: '60%', width: '60%' }}>
      </div>
    </div>
  );
}

export default CenterBox;
