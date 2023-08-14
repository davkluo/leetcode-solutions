// DFS Approach
function accountsMerge(accounts: string[][]): string[][] {
  const emailToOwnerMap: Record<string, number[]> = {};

  // Record all owners of each email
  for (let i = 0; i < accounts.length; i++) {
    const [_, ...emails] = accounts[i];
    for (let email of emails) {
      if (email in emailToOwnerMap) {
        emailToOwnerMap[email].push(i);
      } else {
        emailToOwnerMap[email] = [i];
      }
    }
  }
  console.log(emailToOwnerMap);

  const seenAccounts = new Set<number>();
  function dfs(i: number, emailSet: Set<string>) {
    if (seenAccounts.has(i)) {
      return;
    }

    seenAccounts.add(i);

    const [_, ...emails] = accounts[i];
    for (let email of emails) {
      emailSet.add(email);
      const owners = emailToOwnerMap[email];
      for (let owner of owners) {
        dfs(owner, emailSet);
      }
    }
  }

  const mergedAccounts: string[][] = [];
  for (let i = 0; i < accounts.length; i++) {
    if (seenAccounts.has(i)) {
      continue;
    }

    const name = accounts[i][0];
    const emailSet = new Set<string>();
    dfs(i, emailSet);
    const sortedEmails = Array.from(emailSet).sort();
    mergedAccounts.push([name, ...sortedEmails]);
  }

  return mergedAccounts;
}
