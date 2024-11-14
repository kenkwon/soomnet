import React from 'react';
import { FaUserAstronaut } from 'react-icons/fa6';

export default function MemberIcon() {
  return (
    <div
      style={{
        borderRadius: 40,
        backgroundColor: 'var(--soom-secondary-bg)',
        padding: 10,
      }}
    >
      <FaUserAstronaut size={20} />
    </div>
  );
}
