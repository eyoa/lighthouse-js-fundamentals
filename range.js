function range(start, end, step){
  let results = [];
  if (step >= 0 && start < end){
    for (let i = start; i <= end; i += step){
      results.push(i);
    }
  }
  return results;
}