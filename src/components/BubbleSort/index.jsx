import React from 'react';
import ItemContainer from './ItemContainer';

const sleep = ms => new Promise(r => setTimeout(r, ms));

const arr = [10, 50, 80, 30, 20, 56, 99, 34, 75];

class BubbleSort extends React.Component {
  state = {
    items: [...arr],
    position: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    original: [...arr],
    first: 0,
    second: 1,
    iterator: 999,
  };

  componentDidMount() {
    this.algo();
  }

  algo = async () => {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        this.setState(prev => ({...prev, first: j, second: j + 1}));
        await sleep(1000);

        const first = arr[j];
        const second = arr[j + 1];

        if (first > second) {
          arr[j] = second;
          arr[j + 1] = first;

          const pos = [...this.state.position];
          const temp = pos[j];
          pos[j] = pos[j + 1];
          pos[j + 1] = temp;
          this.setState(prev => ({...prev, position: pos}));

          await sleep(1000);

          // console.log('Updated', this.state.items);
        }
      }
      await this.setState(prev => ({...prev, iterator: n - i - 1}));
    }
  };

  render() {
    const {original, position, first, second, iterator} = this.state;

    return (
      <ItemContainer
        items={original}
        position={position}
        x={first}
        y={second}
        iterator={iterator}
      />
    );
  }
}

export default BubbleSort;
