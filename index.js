import * as React from 'react';
import { registerRootComponent } from "expo";
import App from "./app/App"

const Root = () => {
    return <App />;
};
  
registerRootComponent(Root);