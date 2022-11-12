import { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0)
  return (
      <>
          <button className="outline" onClick={() => setCount(count + 1)}>
              {count === 0 ? 'Click to support' : `Supported ${count} times`}
          </button>
          <button className="outline" onClick={() => setCount(count + 1)}>
              {count % 3 ? 'Click to Donate' : `Donated ${count} times`}
          </button>
      </>
  );
}