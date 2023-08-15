function wordBreak(s: string, wordDict: string[]): boolean {
  const wordDictSet = new Set(wordDict);

  const queue: number[] = [0];
  const seen = new Set<number>(queue);

  while (queue.length > 0) {
    const start: number = queue.shift()!;

    if (start === s.length) {
      return true;
    }

    for (let end = start + 1; end <= s.length; end++) {
      if (seen.has(end)) {
        continue;
      }

      if (wordDictSet.has(s.slice(start, end))) {
        seen.add(end);
        queue.push(end);
      }
    }
  }

  return false;
}

// TODO: Dynamic programming approaches
