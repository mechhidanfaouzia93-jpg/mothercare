import { atom } from "jotai";

export const tokenAtom = atom(null);

export const IsConnectedAtom = atom((get)=> {
    const token = get(tokenAtom);
    return token !== null;
})

// import { atom } from "jotai";

// export const tokenAtom = atom(null);

// export const isConnectedAtom = atom((get) => {
//   const token = get(tokenAtom);
//   return !!token;
// });