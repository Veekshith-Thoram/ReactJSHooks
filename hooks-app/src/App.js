// import logo from './logo.svg';
import './App.css';
import React from "react";
import ClassAutoCounter from './components/ClassAutoCounter';
import ClassCountDomUpdate from './components/ClassCountDomUpdate';
import ClassMouseMov from './components/ClassMouseMov';
import ComponentC from './components/ComponentC';
import CounterClass from './components/CounterClass';
import DisplayToggle from './components/DisplayToggle';
import EffectHookOne from './components/EffectHookOne';
import FetchData from './components/FetchData';
import HooksCounter from './components/HooksCounter';
import HooksCounterArray from './components/HooksCounterArray';
import HooksCounterThree from './components/HooksCounterThree';
import HooksCounterTwo from './components/HooksCounterTwo';
import HooksMouse from './components/HooksMouse';
import IntervalHooksCounter from './components/IntervalHooksCounter';
export const UserContext = React.createContext()
export const ChannelContext =React.createContext()
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Veekshith"}>
        <ChannelContext.Provider value={"Pushpa"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      {/* <FetchData /> */}
      {/* <ClassAutoCounter /> */}
      {/* <IntervalHooksCounter /> */}
      {/* <DisplayToggle /> */}
      {/* <HooksMouse /> */}
      {/* <ClassMouseMov /> */}
      {/* <EffectHookOne /> */}
      {/* <ClassCountDomUpdate /> */}
      {/* <HooksCounterArray /> */}
      {/* <HooksCounterThree /> */}
      {/* <HooksCounterTwo /> */}
    {/* <CounterClass /> */}
    {/* <HooksCounter /> */}
    </div>
  );
}

export default App;
