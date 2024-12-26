const map = (array, mapper) =>
  array.reduce((result, element) => {
    result.push(mapper(element));
    return result;
  }, []);

const filter = (array, predicate) =>
  array.reduce((result, element) => {
    if (predicate(element)) result.push(element);
    return result;
  }, []);
