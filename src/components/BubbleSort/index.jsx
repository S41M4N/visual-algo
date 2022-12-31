import React from 'react';
import ItemContainer from './ItemContainer';

const sleep = ms => new Promise(r => setTimeout(r, ms));

class BubbleSort extends React.Component {
  state = {
    items: [10, 50, 70, 80, 30, 20, 56],
    position: [0, 1, 2, 3, 4, 5, 6],
    original: [10, 50, 70, 80, 30, 20, 56],
    x: 0,
    y: 1,
    iterator: 999,
  };

  componentDidMount() {
    this.algo();
  }

  algo = async () => {
    const arr = [10, 50, 70, 80, 30, 20, 56];
    const n = arr.length;

    await sleep(10000);

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        await this.setState(prev => ({...prev, x: j, y: j + 1}));
        await sleep(1000);

        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;

          const {position: pos} = this.state;
          const temp2 = pos[j];
          pos[j] = pos[j + 1];
          pos[j + 1] = temp2;

          await this.setState(prev => ({...prev, position: pos}));

          await this.setState(prev => ({...prev, items: arr}));
          await sleep(1000);
          // console.log('Updated', this.state.items);
        }
      }
      await this.setState(prev => ({...prev, iterator: n - i - 1}));
    }
  };

  render() {
    const {original, position, x, y, iterator} = this.state;

    return (
      <ItemContainer
        items={original}
        position={position}
        x={x}
        y={y}
        iterator={iterator}
      />
    );
  }
}

export default BubbleSort;
