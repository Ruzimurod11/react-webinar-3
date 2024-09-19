<<<<<<< HEAD
import React from 'react';
import './styles.css';
import { getCompletion } from './utils';

/**
 * Приложение
 * @param store {Store} Состояние приложения
=======
import React, { useCallback } from 'react';
import List from './components/list';
import Controls from './components/controls';
import Head from './components/head';
import PageLayout from './components/page-layout';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
>>>>>>> upstream/lecture-2
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list;

<<<<<<< HEAD
  return (
    <div className="App">
      <div className="App-head">
        <h1>Приложение на чистом JS</h1>
      </div>
      <div className="App-controls">
        <button onClick={() => store.addItem()}>Добавить</button>
      </div>
      <div className="App-center">
        <div className="List">
          {list.map(item => (
            <div key={item.code} className="List-item">
              <div
                className={'Item' + (item.selected ? ' Item_selected' : '')}
                onClick={() => store.selectItem(item.code)}
              >
                <div className="Item-code">{item.code}</div>
                <div className="Item-title">
                  {item.title}
                  {item.selectionTotal &&
                    ` | Выделяли ${item.selectionTotal} ${getCompletion(item.selectionTotal)}`}
                </div>
                <div className="Item-actions">
                  <button onClick={() => store.deleteItem(item.code)}>Удалить</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
=======
  const callbacks = {
    onDeleteItem: useCallback(
      code => {
        store.deleteItem(code);
      },
      [store],
    ),

    onSelectItem: useCallback(
      code => {
        store.selectItem(code);
      },
      [store],
    ),

    onAddItem: useCallback(() => {
      store.addItem();
    }, [store]),
  };

  return (
    <PageLayout>
      <Head title="Приложение на чистом JS" />
      <Controls onAdd={callbacks.onAddItem} />
      <List
        list={list}
        onDeleteItem={callbacks.onDeleteItem}
        onSelectItem={callbacks.onSelectItem}
      />
    </PageLayout>
>>>>>>> upstream/lecture-2
  );
}

export default App;
