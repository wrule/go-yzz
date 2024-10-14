import { useState } from 'react';

export default function() {
  const [a, setA] = useState<number>(160);

  return <div>
    <div>
      <input
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
        type="number"
        placeholder="请输入你的血压"
        style={{ fontSize: '32px' }}
      />
    </div>
    <div>
      <span style={{ fontSize: '32px' }}>{a}</span>
    </div>
  </div>;
}
