import Foоter from './FooterComponent';
import MainSection from './MainSectionComponent';

function App() {
  return (
    <div className="App">
      <header className="main-header">
        <div className="dream-title">
          <div className="dream-block">
            <span>Dream</span>
            <span>&amp;Do</span>
          </div>
        </div>
        <span>TO</span>
        <span>DO</span>
        <span>LIST</span>
      </header>
      <MainSection />
      <Foоter />
    </div>
  );
}

export default App;
