"use client";
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BreakfastMenu from './breakfast/breakfastMenu';
import LunchMenu from './lunch/lunchMenu';
import DinnerMenu from './dinner/dinnerMenu';
import Banner from '@/app/banner';
import 'bootstrap/dist/css/bootstrap.css';
import "./tabs.css"
const TabsMenu = (props) => {
  const [key, setKey] = useState('breakfast');

  return (
    <div className='menu_tabs'>

  <Banner/>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-1 tabs bg-[#a264ea] mt-2 text-sm " style={{ fontSize: "20px" }}
      >
        <Tab eventKey="breakfast" title="Breakfast" className='tab border-2 border-dotted ' >
          <BreakfastMenu />
        </Tab>
        <Tab eventKey="lunch" title="Lunch" className='tab border-2 border-dotted '>
          <LunchMenu />
        </Tab>
        <Tab eventKey="dinner" title="Dinner" className='tab border-2 border-dotted ' >
          <DinnerMenu />
        </Tab>
      </Tabs>
     
    </div>
  );
}

export default TabsMenu;