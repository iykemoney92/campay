import { IonSegment, IonSegmentButton, IonLabel, IonFab, IonFabButton, IonIcon, IonFabList, IonItem, IonList, IonNote, IonContent, IonChip } from '@ionic/react';
import { add, arrowDown, arrowUp} from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import './TransactionsContainer.css';
import dummy_transactions from '../data/transactions';

interface ContainerProps {
  name: string;
  txns: Transactions
}

interface Transactions {
    id: string,
    amount: number,
    type: txn_type,
    status: status,
    createdAt: Date
}

type txn_type = 'receive' | 'send';

type status = 'cancelled' | 'paid';

const TransactionsContainer: React.FC<any> = () => {
    
    useEffect(() => {
       
    });

    const [transactions, setTransactions] = useState(dummy_transactions);
  return (
    <div className="container">
        <>
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} value="receive">
          <IonSegmentButton value="receive">
            <IonLabel>Received</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="send">
            <IonLabel>Sent</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        </>
        <>
        <IonList>
            {
                transactions && transactions.map( transaction => (
                    <IonItem>
                        <IonIcon slot="start" icon={transaction.type === 'receive' ? arrowDown : arrowUp} />
                        <IonLabel>₦{transaction.amount}
                        <IonChip color={transaction.type === 'receive' ? 'success' : 'danger'} slot="end">
                            {transaction.status}
                        </IonChip>
                        </IonLabel>
                        <IonNote slot="end">{transaction.createdAt.toString().substr(0,10)}</IonNote> 
                    </IonItem>
                ))
            }        
        </IonList>
        </>
        <>
        
        </>
    </div>
  );
};

export default TransactionsContainer;
