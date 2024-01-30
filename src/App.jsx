import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import Wrapper from './components/RenderProps/Wrapper';


function App() {
  return (
    <div>
      <h3>Higher Order Component</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>

      </div>
      <h3>RenderOnes</h3>
        <Wrapper renderData={(counter,handleIncrement)=>{
          return <LikePost likePost={counter} handleInc={handleIncrement} />
        }} />

      <Wrapper renderData={(counter,handleIncrement)=>{
          return <LikeImage likePost={counter} handleInc={handleIncrement} />
        }} />
    </div>
  );
}

export default App;
