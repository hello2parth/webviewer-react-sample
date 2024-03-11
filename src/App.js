import React, { useRef, useEffect, useState } from 'react';
import WebViewer from '@pdftron/webviewer';
import './App.css';
import SmartSpec from './SmartSpec';



const myCustomPanel = {
  tab:{
    dataElement: 'customPanelTab',
    title: 'customPanelTab',
    img: 'https://www.pdftron.com/favicon-32x32.png',
  },
  panel: {
    dataElement: 'customPanel',
    render: function() {
      return <SmartSpec />;
    }
  }
};

const App = () => {
  const viewer = useRef(null);
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    if(!instance) {
      WebViewer(
        {
          path: '/webviewer/lib',
          initialDoc: '/files/PDFTRON_about.pdf',
          licenseKey: 'Egnyte, Inc.:OEM:Egnyte, Inc.::B+:AMS(20240307):585756431F077AD0D33353183F51C9262292ECEAAB4CBE3B54F518D86AC2B6F5C7'
        },
        viewer.current,
      ).then((_instance) => {
        // _instance.UI.setCustomPanel(myCustomPanel);
        // _instance.UI.openElements([ 'leftPanel' ]);
        // _instance.UI.setActiveLeftPanel('customPanel');
        // _instance.Core.documentViewer.displayPageLocation(3, 40, 20, false)
        setInstance(_instance);

      });

    }
  }, [instance]);

  useEffect(() => {

    if(instance) {
      instance.Core.documentViewer.addEventListener('documentLoaded', () => {
        const tool = new instance.Core.Tools.TextStrikeoutCreateTool(instance.Core.documentViewer);
        const annotation = new instance.Core.Annotations.TextHighlightAnnotation();
        annotation.PageNumber = 2;
        tool.annotation = annotation;

        const topLeft = { x: 0, y: 0, pageNumber: 2 };
        const bottomRight = { x: 800, y: 800, pageNumber: 2 };
        tool.pageCoordinates[0] = topLeft;

        tool.select(topLeft, bottomRight);

        // instance.Core.annotationManager.addAnnotation(annotation);
        // instance.Core.annotationManager.redrawAnnotation(annotation);
      });
    }
  }, [instance])

  return (
    <div className="App">
      <SmartSpec />
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};

export default App;
