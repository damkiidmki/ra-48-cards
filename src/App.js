import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import CardImage from './components/CardImage';
import CardButton from './components/CardButton';
import CardBody from './components/CardBody';
import { card } from './data/data';

function App() {
    return (
        <div className="App">
            <Card key={card.key}>
                <CardImage img={card.img} alt = {card.alt}/>
                <CardBody title={card.title} body={card.body} />
                <CardButton button={card.button}/>
            </Card> 
        </div>
    );
}

export default App;
