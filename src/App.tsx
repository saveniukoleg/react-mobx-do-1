import React, { createContext, useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useLocalStore, useObserver } from 'mobx-react'

const StoreContext = createContext({
  bugs: ['Centipede'],
  addBug: (bug: string) => {},
  get bugsCount(): number {return 0}
});

const StoreProvider = ({children}: any) => {
  const store = useLocalStore(() => ({
    bugs: ['Centipede'],
    addBug: (bug: string) => {
      store.bugs.push(bug);
    },
    get bugsCount() {
      return store.bugs.length;
    }
  }));

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
};

const BugsHeader = () => {
  const store = useContext(StoreContext)

  return useObserver(() => (
    <h1>
      {store.bugsCount} {store.bugsCount > 1 ? "Bugs!" : "Bug!"}
    </h1>
  ))
}

const BugsList = () => {
  const store = useContext(StoreContext)

  return useObserver(() => (
    <ul>
      {store.bugs.map(bug => (
        <li key={bug}>{bug}</li>
      ))}
    </ul>
  ))
}

const BugsForm = () => {
  const store = useContext(StoreContext);
  const [bug, setBug] = useState('');

  return (
    <form
      onSubmit={e => {
        store.addBug(bug);
        setBug('')
        e.preventDefault();
      }}
    >
      <input type="text" value={bug} onChange={e => {
        setBug(e.target.value)
      }}></input>
      <button type={'submit'}>Add</button>
    </form>
  )
}

function App() {

  return (
    <StoreProvider>
      <div className="App">
        <main>
          <BugsHeader />
          <BugsList />
          <BugsForm />
        </main>
      </div>
    </StoreProvider>
  );
}

export default App;
