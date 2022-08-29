import { useState } from 'react';
import ExtractTableModal from './extractTableModal';

import ExtractRosterTable from './extactRosterTable';

export default function ExtractRoster() {
  const [isOpen, setModals] = useState(false);

  const closeModal = () => {
    setModals(false);
  };
  const openModal = () => {
    setModals(!isOpen);
  };
  return (
    <div>
      <ExtractRosterTable openModal={openModal} />
      <ExtractTableModal isOpen={isOpen} closeModal={closeModal}></ExtractTableModal>
    </div>
  );
}
