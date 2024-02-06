function HelloWorld() {             // Notice that if we are returning a single line of code, the parenthesis
    return <h1>Hello World!</h1>;   // in the return statement are optional. If HelloWorld would have been a
};                                  // more complex component, we could have implemented it in 
export default HelloWorld;          // HelloWorld/index.tsx giving us a whole directory to implement it.