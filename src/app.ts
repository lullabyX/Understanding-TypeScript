class DataStorage<T extends string | number | boolean>{
  private data: T[] = []

  addItem(this: DataStorage<T>, item: T) {
    this.data.push(item)
  }

  removeItem(this: DataStorage<T>, item: T) {
    // this.data = this.data.filter(d => d != item)
    this.data.splice(this.data.indexOf(item), 1);
  }

  getLength(this: DataStorage<T>) {
    return this.data.length;
  }

  printItems(this: DataStorage<T>) {
    console.log(this.data);
  }
}

const stringStorage = new DataStorage<string>();

stringStorage.addItem('hello');
stringStorage.addItem("there");
stringStorage.addItem("general");
stringStorage.addItem("kenobi");
stringStorage.removeItem("kenobi")
stringStorage.addItem("Kenobi")
stringStorage.printItems()

const numberStorage = new DataStorage<number>()
numberStorage.addItem(54);
numberStorage.addItem(34);
numberStorage.printItems();



