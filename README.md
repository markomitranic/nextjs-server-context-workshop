# Create Server Context - Next.js 14 - Examples

The premise is that it is possible to recreate `createContext` and `useContext` APIs in RSC environment, with some limitations, but the real question is if it is actually smart to do.

Regardless of if it is "smart to do", we should know these patterns, freely discuss them as a community and try to figure out where the boundaries should be.

This repository was used as a discussion tool as part of internal learning sessions at [NoA Ignite Denmark](https://www.thenorthalliance.com/).

![You think you do, but you don't.](public/blizzard-thumbnail.jpg)
> React Core team members saying "We found it is not useful in practice" gives me the vibes of the "You think you want it, but you don't." by J. Allen Brack.

## Usage

Run the development server:

```bash
# asdf install
npm i
npm run dev
```

Observe the following examples and their code:
- [http://localhost:3000](http://localhost:3000) - Shows a basic example of using an Isomorphic Context that shares data to both server and client.
- [http://localhost:3000/nested](http://localhost:3000/nested) - Same, but with an example of nesting multiple contexts and/or using them separately.
- [http://localhost:3000/layout](http://localhost:3000/layout) - Showcases that layouts are rendered separately from pages, and all contexts must be declared and filled with data twice (if we need them in both scopes ofc).
- [http://localhost:3000/remote-layout](http://localhost:3000/remote-layout) - Employs a "remote hydration" strategy, where a client context is hydrated with the data from the server, but context is on layout whereas data is on page.

## Incomplete limitations list

Some things are simply not possible as things stand:
- A single context spanning layouts and pages
- Rerendering server components based on downstream updates
- Rerendering server components based on client updates
- Automatic API minimization towards clients