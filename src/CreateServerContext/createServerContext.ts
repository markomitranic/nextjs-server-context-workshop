import React from 'react';
import { cache } from 'react';

type ServerContext<T> = {
    Provider: ({ children, value }: { children: React.ReactNode; value: T; }) => React.ReactNode;
    Consumer: ({ children }: { children: (context: T | undefined) => React.ReactNode; }) => React.ReactNode;
    _storage: () => { value: T | undefined; };
    _defaultValue: T | undefined;
};

/**
 * Creates a new datastore for a given server context.
 */
export function createServerContext<T>(defaultValue?: T): ServerContext<T> {
    throwInClient();

    const getCache = cache<() => {value: T | undefined}>(() => ({ value: undefined }));
    return {
        Provider: ({ children, value }) => {
            getCache().value = value;
            return children;
        },
        Consumer: ({ children }) => {
            const store = getCache();
            return children(store ? store.value : defaultValue);
        },
        _storage: getCache,
        _defaultValue: defaultValue,
    }
}

/**
 * Fetches a value present in a given server context.
 */
export function getServerContext<T>({ _storage, _defaultValue }: ServerContext<T>) {
    throwInClient();
    const store = _storage();
    if (!store) return _defaultValue;
    return store.value;
}

/**
 * Throws if called within a client component environment.
 * Useful to help prevent mistakes.
 */
export function throwInClient(): void | never {
    // If useState is defined we're in a client component
    if (Boolean(React.useState)) {
      throw new Error(`createServerContext only works in Server Components`);
    }
  }