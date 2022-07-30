import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/curent-weather/current-weather';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log('handleOnSearchChange', searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather /> 
    </div>
  );
}

export default App;
