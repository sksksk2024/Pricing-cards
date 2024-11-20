import Pricing from './components/Pricing';
import bottomImage from './images/bg-bottom.svg'
import topImage from './images/bg-top.svg'

function App() {
  return (
    <>
      <header className='z-0 absolute right-0 top-0'>
        <img src={topImage} alt="" />
      </header>
      <main className='relative overflow-hidden z-10'>
        <Pricing />
      </main>
      <footer className='absolute z-0 left-0 bottom-0'>
        <img className='' src={bottomImage} alt="bottomImage" />
      </footer>
    
    </>
  );
}

export default App;
