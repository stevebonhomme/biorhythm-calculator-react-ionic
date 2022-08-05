import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,  
  IonItem,
  IonLabel,
  IonDatetime,
  
} from '@ionic/react';
import React from 'react';
import { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard';
import { formatDate } from './components/BiorhythmCard';
//import { useLocalStorage } from './hooks';


function App() {
 // const [name, setName] = useState('');
 // const [birthDate, setBirthdate] = useLocalStorage('birthDate', '');
 const [birthDate, setBirthdate] = useState('');
  const [targetDate, setTargetdate] = useState('');
  //const targetDate = new Date ().toISOString();
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
       
       <IonItem> 
       <IonLabel position='stacked'>Date of Birth:</IonLabel> 
       <IonDatetime displayFormat="MMM DD, YYYY" value= {formatDate(birthDate)}
       onIonChange={(event) => setBirthdate(event.target.value)}       
        /> 
        </IonItem>
        
       <IonItem>
       <IonLabel position='stacked'>Target Date:</IonLabel> 
       <IonDatetime displayFormat="MMM DD, YYYY" value= {formatDate(targetDate)}
       onIonChange={(event) => setTargetdate(event.target.value)}        
        />      
       </IonItem>     
       
       
        {birthDate && <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />}               
      </IonContent>
    </IonApp>
  );
}

export default App;
