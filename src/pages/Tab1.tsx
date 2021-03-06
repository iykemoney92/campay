import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import TransactionsContainer from '../components/TransactionsContainer';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Transactions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Transactions</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TransactionsContainer  />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
