import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import './App.css';

const BasicReactComponent = () => {
  return (
    <div onClick={() => console.log('hello there')}>
      Hi, My name is Parth.
      We can add our customised outlines here.
    </div>
  );
};

const App = () => {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: '/files/PDFTRON_about.pdf',
      },
      viewer.current,
    ).then((instance) => {

      const myCustomPanel = {
        tab:{
          dataElement: 'customPanelTab',
          title: 'customPanelTab',
          img: 'https://www.pdftron.com/favicon-32x32.png',
        },
        panel: {
          dataElement: 'customPanel',
          render: function() {
            return <BasicReactComponent />;
          }
        }
      };

      instance.UI.setCustomPanel(myCustomPanel);
      instance.UI.openElements([ 'leftPanel' ]);
      instance.UI.setActiveLeftPanel('customPanel');
      instance.Core.documentViewer.displayPageLocation(3, 40, 20, false)
    });
  }, []);

  return (
    <div className="App">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};

export default App;
