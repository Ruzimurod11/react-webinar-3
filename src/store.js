<<<<<<< HEAD
=======
import { generateCode } from './utils';

>>>>>>> upstream/lecture-2
/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
<<<<<<< HEAD
    this.codeCounter = 1;
    if (initState.list) {
      this.codeCounter = Math.max(...initState.list.map(item => item.code)) + 1;
    }
=======
>>>>>>> upstream/lecture-2
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    };
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление новой записи
   */
  addItem() {
<<<<<<< HEAD
    const newCode = this.codeCounter++;
    this.setState({
      ...this.state,
      list: [...this.state.list, { code: newCode, title: 'Новая запись' }],
=======
    this.setState({
      ...this.state,
      list: [...this.state.list, { code: generateCode(), title: 'Новая запись' }],
>>>>>>> upstream/lecture-2
    });
  }

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
<<<<<<< HEAD
=======
      // Новый список, в котором не будет удаляемой записи
>>>>>>> upstream/lecture-2
      list: this.state.list.filter(item => item.code !== code),
    });
  }

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        if (item.code === code) {
<<<<<<< HEAD
          if (!item.selected) {
            item.selectionTotal = item.selectionTotal ? item.selectionTotal + 1 : 1;
          }
          item.selected = !item.selected;
        } else if (item.selected) {
          item.selected = false;
        }
        return item;
=======
          // Смена выделения и подсчёт
          return {
            ...item,
            selected: !item.selected,
            count: item.selected ? item.count : item.count + 1 || 1,
          };
        }
        // Сброс выделения если выделена
        return item.selected ? { ...item, selected: false } : item;
>>>>>>> upstream/lecture-2
      }),
    });
  }
}

export default Store;
