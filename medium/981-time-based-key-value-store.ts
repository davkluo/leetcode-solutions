/**
 * A time-based key-value data structure that can store multiple values for the
 * same key at different time stamps and retrieve the key's value at a certain
 * timestamp.
 */

class TimeMap {
  store: Map<string, TimeBasedValue[]>;

  constructor() {
    this.store = new Map<string, TimeBasedValue[]>();
  }

  set(key: string, value: string, timestamp: number): void {
    const newValue: TimeBasedValue = {
      timestamp,
      value,
    };
    const existingEntry = this.store.get(key);

    if (existingEntry) {
      existingEntry.push(newValue);
    } else {
      this.store.set(key, [newValue]);
    }
  }

  get(key: string, timestamp: number): string {
    const retrievedValues = this.store.get(key);

    if (!retrievedValues) return "";

    let l = 0;
    let r = retrievedValues.length - 1;

    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      const { timestamp: prevTimestamp, value } = retrievedValues[mid];

      if (prevTimestamp === timestamp) {
        return value;
      } else if (prevTimestamp < timestamp) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }

    return r < 0 ? "" : retrievedValues[r].value;
  }
}

interface TimeBasedValue {
  timestamp: number;
  value: string;
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
