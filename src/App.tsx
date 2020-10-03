import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { swapHorizontal, settings, arrowDown, arrowUp, settingsSharp, add } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import { IonSegment, IonSegmentButton,  IonFab, IonFabButton,  IonFabList, IonItem, IonList, IonNote, IonContent, IonChip } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/transactions" component={Tab1} exact={true} />
          <Route path="/receive" component={Tab2} exact={true} />
          <Route path="/send" component={Tab3} />
          <Route path="/settings" component={Tab4} />
          <Route path="/" render={() => <Redirect to="/transactions" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/transactions">
            <IonIcon icon={swapHorizontal} />
            <IonLabel>Transactions</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/receive">
            <IonIcon icon={arrowDown} />
            <IonLabel>Receive</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/send">
            <IonIcon icon={arrowUp} />
            <IonLabel>Send</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/settings">
            <IonIcon icon={settingsSharp} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    <IonFab vertical="top" horizontal="end"  slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList side="bottom">
            <IonFabButton><IonIcon icon={arrowDown} /></IonFabButton>
            <IonFabButton><IonIcon icon={arrowUp} /></IonFabButton>
          </IonFabList>
        </IonFab>
  </IonApp>
);

export default App;
