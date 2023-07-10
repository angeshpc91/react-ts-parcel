import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const x = Math.random();
    if (x < 0.5) {
      console.log(true);
      setOpen(true);
    }
  }, []);

  return (
    <>
      <div>
        Hello world {open}!
      </div>
    </>
  );
};

export default Home;
