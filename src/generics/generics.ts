interface IFooBar {
  foo: string;
  bar: string;
  hello?: string;
}

const fooBars: Array<IFooBar> = [
  { foo: "foo1", bar: "bar1" },
  { foo: "i am foo two", bar: "i am bar two" },
  { foo: "foo three", bar: "bar three" },
];

function sortByFoo(fooBars: Array<IFooBar>) {
  return fooBars.sort((a, b) => {
    if (a.foo > b.foo) {
      return 1;
    }
    if (a.foo < b.foo) {
      return -1;
    }
    return 0;
  });
}

function sortByBar(fooBars: Array<IFooBar>) {
  return fooBars.sort((a, b) => {
    if (a.bar > b.bar) {
      return 1;
    }
    if (a.bar < b.bar) {
      return -1;
    }
    return 0;
  });
}

function sortByKey<T>(data: Array<T>, key: keyof T) {
  return data.sort((a, b) => {
    if (a[key] > b[key]) {
      return 1;
    }
    if (a[key] < b[key]) {
      return -1;
    }
    return 0;
  });
}

const sort1 = sortByKey<IFooBar>(fooBars, "bar");
console.log(sort1);
