import React, { useEffect } from 'react';
import useDocumentVisibility from '../../../common/hooks/useDocumentVisibility';

export default function UseDocumentVisibility() {
  const documentVisibility = useDocumentVisibility();

  useEffect(() => {
    if (documentVisibility === 'visible') {
      console.log(`Current document visibility state: ${documentVisibility}`);
    } else {
      console.log(`Current document visibility state: ${documentVisibility}`);
    }
  }, [documentVisibility]);

  return <div>Current document visibility state: {documentVisibility}</div>;
};