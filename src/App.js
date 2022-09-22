import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <style jsx>{`
    
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap');
     
      body {
        padding: 0;
        margin: 0;
      }
        .App{
          background: #F8E9DD;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items : center;
          flex-direction: column;
        }
        * {
          box-sizing: border-box;
        }
      `}
      </style>
    <div className="App">
    <Header/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
