
import {createStore} from 'redux';
import reducer from './Reducer';
import { useState } from 'react';
import { IncrementLike,DecrementLike } from './Actions';
import './LikesMeter.css';

const LikeStore = createStore(reducer)

const LikesMeter = () => {

    const [likes, setLikes] = useState(LikeStore.getState().likes);

    const increaseLikes = () => {
        LikeStore.dispatch(IncrementLike());
        setLikes(LikeStore.getState().likes);
      };
      
      const decreaseLikes = () => {
        LikeStore.dispatch(DecrementLike());
        setLikes(LikeStore.getState().likes);
      };

    return(
        <div>
            <h1>{likes}</h1>
            <button onClick={increaseLikes}>Increment</button>
            <button onClick={decreaseLikes}>Decrement</button>
        </div>
    )
}

export default LikesMeter;