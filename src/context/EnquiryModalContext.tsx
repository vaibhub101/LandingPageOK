import React, { createContext, useContext, useState } from 'react';
import EnquiryModal from '../components/EnquiryModal';

interface EnquiryModalContextType {
  openEnquiryModal: () => void;
  closeEnquiryModal: () => void;
}

const EnquiryModalContext = createContext<EnquiryModalContextType | undefined>(undefined);

export const EnquiryModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEnquiryModal = () => setIsModalOpen(true);
  const closeEnquiryModal = () => setIsModalOpen(false);

  return (
    <EnquiryModalContext.Provider value={{ openEnquiryModal, closeEnquiryModal }}>
      {children}
      <EnquiryModal isOpen={isModalOpen} onClose={closeEnquiryModal} />
    </EnquiryModalContext.Provider>
  );
};

export const useEnquiryModal = () => {
  const context = useContext(EnquiryModalContext);
  if (context === undefined) {
    throw new Error('useEnquiryModal must be used within an EnquiryModalProvider');
  }
  return context;
}; 