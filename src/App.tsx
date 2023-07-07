import Modal from 'react-modal';
import { Dashboard } from "./components/dashboard/Dashboard";
import { Header } from "./components/header/Header";
import { GlobalStyles } from "./styles/global";
import { useState } from 'react';
import { NewTransactionModal } from './components/modal/Modal';
import { TransactionsProvider } from './TransactionsContext';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleOpenCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleOpenCloseTransactionModal}
      />

      <GlobalStyles />
    </TransactionsProvider>
  );
}


