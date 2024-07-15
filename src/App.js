
import './App.css';
import CollapsiblePanel from './components/CollapsiblePanel';

function App() {
  return (
    <div >
      <CollapsiblePanel title="Title 1" discription="This is content of the panel 1"
       collapsibleState={true}
      />
      <CollapsiblePanel title="Title 2" discription="This is content of the panel 2"
      collapsibleState={false}
      />
    </div>
  );
}

export default App;
