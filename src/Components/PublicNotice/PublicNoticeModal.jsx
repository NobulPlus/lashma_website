import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import policyUpdateLandscape from '../../assets/images/ilera-eko-policy-update-landscape.jpeg';
import policyUpdatePortrait from '../../assets/images/ilera-eko-policy-update-portrait.jpeg';

const noticeImages = [
  {
    src: policyUpdateLandscape,
    alt: 'ILERA EKO policy updates for valued clients',
  },
  {
    src: policyUpdatePortrait,
    alt: 'ILERA EKO policy updates reminder flyer',
  },
];

const dismissStorageKey = 'ileraEkoPolicyUpdateNoticeDismissedCount';

const PublicNoticeModal = () => {
  return null;
};

export default PublicNoticeModal;
