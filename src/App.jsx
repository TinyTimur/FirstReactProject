import Header from "./components/Header/header";
import IntroSection from "./components/IntroSection";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import TabsSection from "./components/TabsSection";
import FeedBackSection from "./components/FeedbackSection/FeedBackSection";
import { useState } from "react";


export default function App() {
  const [tab, setTab] = useState('feedback')

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection activeButton={tab} active={tab} onChange={setTab}/>

        {tab === 'main' && (
        <> 
          <TeachingSection />
          <DifferencesSection />
        </>
      )}

        {tab === 'feedback' && (
        <>
          <FeedBackSection />
        </>
        )}

        
      </main>
    </>
  );
}