import React from 'react';
import ItemContainer from './ItemContainer';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

class BubbleSort extends React.Component {
  state = {
    items: [10, 50, 70, 80, 30, 20, 56],
    position: [0, 1, 2, 3, 4, 5, 6],
    original: [10, 50, 70, 80, 30, 20, 56],
  };

  algo = async () => {
    const arr = [10, 50, 70, 80, 30, 20, 56];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;

          const pos = this.state.position;
          const temp2 = pos[j];
          pos[j] = pos[j + 1];
          pos[j + 1] = temp2;

          await this.setState((prev) => ({ ...prev, position: pos }));

          await this.setState((prev) => ({ ...prev, items: arr }));
          await sleep(1000);
          console.log('Updated', this.state.items);
        }
      }
    }
  };

  componentDidMount() {
    this.algo();
  }

  render() {
    return (
      <ItemContainer
        items={this.state.original}
        position={this.state.position}
      />
    );
  }
}

export default BubbleSort;
