const getHappyString = f = (n, k, list = ['']) =>
    n ? f(n - 1, k, list.flatMap(v => [...'abc'].map(c => !v.endsWith(c) ? v + c : '').filter($ => $))) : list[k - 1] || '';