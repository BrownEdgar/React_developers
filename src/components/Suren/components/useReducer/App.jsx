import React, { useReducer } from 'react';
import axios from 'axios';
import reducer, { initialState, notificationHide, notificationShow } from './reducer';
import './App.scss'
import Alert from './Alert';

export default function App () {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
      dispatch({ type: 'FETCH_POSTS', payload: response.data });
			dispatch(notificationShow("post added!"))
			setTimeout(() => {
				dispatch(notificationHide())
			}, 2000)
    } catch (err) {
      console.error('Error fetching posts:', err);
    }
  };

  const addDeveloper = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
		console.log(name)
    dispatch({ type: 'ADD_DEVELOPER', payload: name });
    e.target.name.value = '';
		dispatch(notificationShow("user Added!"))
	
		setTimeout(() => {
			dispatch(notificationHide())
		}, 2000)
  };

  const sortArray = () => {
    dispatch({ type: 'SORT_ARRAY' });
  };

  const deletePost = (index) => {
    dispatch({ type: 'DELETE_POST', payload: index });
  };

  return (
    <div className='App'>
			{state.notification && <Alert message={state.notifyMessage} notification={state.notification} />}
      <h1>Actions: {state.actions}</h1>
      <button onClick={getPosts}>Fetch Posts</button>
      <form onSubmit={addDeveloper}>
        <input type="text" name="name" placeholder="Developer Name" />
        <button type="submit">Add Developer</button>
      </form>

      <button onClick={sortArray}>Sort Array</button>

      <div>
        <h2>Developers</h2>
        <ul>
          {state.developers.map((developer, index) => (
            <li key={index}>{developer}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2> Array to be Sorted</h2>
        <ul>
          {state.arr.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>

      <ul>
        {state.posts.map((post, index) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => deletePost(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};





