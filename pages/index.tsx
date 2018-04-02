import Link from 'next/link';
import React from 'react';

export default () => (
  <div>
    <h5>Home</h5>
    <Link href='/builder' as='/builder'><a>Create a Poll</a></Link>
  </div>
);
