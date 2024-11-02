import Header from './app/header';
import Body from './app/body';
import { useState } from 'react';
import { chatgptPrompt } from './app/chatgpt';

function App() {
  const [search, setSearch] = useState('');
  const [text, setText] = useState('');
  const [imagePrompt, setImagePrompt] = useState('');
  const [image, setImage] = useState('');

  return (
    <>
      <Header {...{ setSearch, onSearch: queryChatGpt }} />
      <Body {...{ text, image, imageDesc: imagePrompt }} />
    </>
  );
}

export default App;
