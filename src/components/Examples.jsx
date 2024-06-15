import {useState} from 'react'
import TabButton from './TagButton';
import { EXAMPLES } from '../data'

import Section from './Section';
import Tabs from './Tabs';



export default function examples(){


    const [selectedTopic, setSelectedTopic]=useState();

    let tabContent = 'please click a button'

    function handleClick(selectedBtn){
    // console.log("hello World ====> "+selectedBtn+" selected");
    setSelectedTopic(selectedBtn)
    tabContent=selectedBtn;
    }

    return (
        <Section title="Example" id="examples">
          <Tabs>

          </Tabs>
        <menu>
          <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick("components")}>Components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick("jsx")}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick("props")}>PROPS</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick("state")}>STATE</TabButton>
        </menu>
        {selectedTopic ? (
                    <div id="tab-content">
                    {selectedTopic === undefined ? <p>please select a topic</p>:null}
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <h3>{EXAMPLES[selectedTopic].description}
                      <pre>
                        <code>{EXAMPLES[selectedTopic].code}</code>
                      </pre>
                    </h3>
                  </div>
        ) : <p>please select a topic</p>}
      </Section>
    )
}