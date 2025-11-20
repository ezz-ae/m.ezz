'use client';

import React, { useEffect } from 'react';
import { Section } from '@/components/ScrollTypography';
import Script from 'next/script';

export default function ProjectionPage() {

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Chart) {
      const Chart = (window as any).Chart;

      // Simulation Charts
      const simData1 = {labels:['Q1','Q2','Q3','Q4'],datasets:[{label:'Progress',data:[20,40,70,90],backgroundColor:'#ff7f50'}]};
      new Chart(document.getElementById('simChart1'),{type:'bar',data:simData1,options:{responsive:true,plugins:{legend:{display:false},title:{display:true,text:'Autothinker Simulation'}}}});

      const simData2 = {labels:['Jan','Feb','Mar','Apr'],datasets:[{label:'Leads',data:[5,15,25,40],backgroundColor:'#ffc107'}]};
      new Chart(document.getElementById('simChart2'),{type:'line',data:simData2,options:{responsive:true,plugins:{legend:{display:false},title:{display:true,text:'Market Simulation'}}}});

      const simData3 = {labels:['Stage1','Stage2','Stage3','Stage4'],datasets:[{label:'Tokens',data:[10,30,60,80],backgroundColor:'#17a2b8'}]};
      new Chart(document.getElementById('simChart3'),{type:'bar',data:simData3,options:{responsive:true,plugins:{legend:{display:false},title:{display:true,text:'Tokenization Simulation'}}}});
    }
  }, []);


  const toggleExpand = (btn) => {
    const card = btn.parentElement;
    const expandable = card.querySelector('.expandable');
    expandable.style.display = expandable.style.display === 'block' ? 'none' : 'block';
  }

  const addNote = (inputId, noteId) => {
    const userInput = (document.getElementById(inputId) as HTMLInputElement).value;
    if(userInput.trim() === '') return;
    const noteEl = document.getElementById(noteId);
    noteEl.innerText += '\n• ' + userInput;
    (document.getElementById(inputId) as HTMLInputElement).value = '';
  }

  const reorganize = (inputId, noteId) => {
    const keywords = (document.getElementById(inputId) as HTMLInputElement).value.split(',').map(k => k.trim()).filter(k => k);
    if(keywords.length === 0) return;
    const noteEl = document.getElementById(noteId);
    noteEl.innerText = '🔹 Reorganized by AI using keywords: ' + keywords.join(', ') + '\n' + noteEl.innerText;
    (document.getElementById(inputId) as HTMLInputElement).value = '';
  }
  
  // Attach functions to window object to be accessible from JSX onClick
  useEffect(() => {
    (window as any).toggleExpand = toggleExpand;
    (window as any).addNote = addNote;
    (window as any).reorganize = reorganize;
  }, []);

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="afterInteractive" />
      <style jsx global>{`
        body, html{margin:0;padding:0;font-family:'Montserrat',sans-serif;background:#0a0a0a;color:#f5f5f5;}
        .projection-header{text-align:center;padding:100px 20px 50px;}
        .projection-header h1{font-family:'Playfair Display',serif;font-size:3rem;color:#ff7f50;text-shadow:2px 2px 12px rgba(0,0,0,0.7);}
        .projection-header p{font-size:1.1rem;color:#ccc;}
        .projection-container{width:90%;max-width:1400px;margin:auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:30px;padding-bottom:50px;}
        .projection-card{background:#111;border-radius:20px;padding:30px;box-shadow:0 0 80px rgba(255,127,80,0.3);transition:transform 0.3s ease;position:relative;}
        .projection-card:hover{transform:scale(1.03);}
        .projection-card h2{font-family:'Playfair Display',serif;color:#ff7f50;margin-bottom:10px;}
        .projection-card p{line-height:1.6;font-size:0.95rem;}
        .status{display:inline-block;padding:5px 12px;border-radius:12px;font-weight:700;font-size:0.85rem;margin-top:10px;}
        .active{background:#28a745;color:#fff;}
        .in-progress{background:#ffc107;color:#000;}
        .upgrade{background:#17a2b8;color:#fff;}
        .expandable{margin-top:15px;border-top:1px solid #333;padding-top:15px;display:none;}
        .projection-card textarea{width:100%;height:60px;margin-top:10px;padding:10px;border-radius:12px;background:#222;border:1px solid #333;color:#fff;}
        .projection-card button{margin-top:10px;padding:8px 16px;border:none;border-radius:12px;background:#ff7f50;color:#fff;font-weight:700;cursor:pointer;transition:0.3s;}
        .projection-card button:hover{background:#e76630;}
        .projection-card canvas{margin-top:20px;border-radius:12px;background:#111;}
        .keyword-input{margin-top:10px;padding:8px;border-radius:12px;background:#222;border:1px solid #333;color:#fff;width:100%;box-sizing: border-box;}
        .keyword-button{margin-top:10px;padding:8px 16px;border:none;border-radius:12px;background:#17a2b8;color:#fff;font-weight:700;cursor:pointer;transition:0.3s;}
        .keyword-button:hover{background:#0f7f99;}
      `}</style>
      
      <header className="projection-header">
        <h1>Projection Page – Mahmoud Ezz</h1>
        <p>Full projection of all projects, simulations, AI insights, and contributions in one living system</p>
      </header>
      
      <div className="projection-container">
      
        <div className="projection-card">
          <h2>Autothinker Notebook</h2>
          <p>Living AI notebook with semantic note analysis, directional word guidance, simulations, and cognitive augmentation.</p>
          <span className="status active">Active</span>
      
          <div className="expandable">
            <h3>AI Suggestions & Notes</h3>
            <p id="ai-note-1">AI suggestions appear here dynamically based on previous notes and user inputs.</p>
      
            <textarea id="user-note-1" placeholder="Add your note or idea here..."></textarea>
            <button onClick={() => (window as any).addNote('user-note-1','ai-note-1')}>Submit Note</button>
      
            <h3>Keyword Reorganization</h3>
            <input type="text" id="keywords-1" className="keyword-input" placeholder="Enter 5 keywords separated by commas" />
            <button className="keyword-button" onClick={() => (window as any).reorganize('keywords-1','ai-note-1')}>Reorganize Content</button>
      
            <h3>Simulation Preview</h3>
            <canvas id="simChart1" width="400" height="200"></canvas>
          </div>
      
          <button onClick={(e) => (window as any).toggleExpand(e.currentTarget)}>Expand / Collapse</button>
        </div>
      
        <div className="projection-card">
          <h2>PropertiesMarket.ae</h2>
          <p>AI-powered real estate assistant delivering market analysis, project recommendations, legal guidance, and lead generation.</p>
          <span className="status in-progress">In Progress</span>
      
          <div className="expandable">
            <p id="ai-note-2">AI analysis and predictions for market trends and lead generation simulations.</p>
            <textarea id="user-note-2" placeholder="Add your note or idea here..."></textarea>
            <button onClick={() => (window as any).addNote('user-note-2','ai-note-2')}>Submit Note</button>
      
            <input type="text" id="keywords-2" className="keyword-input" placeholder="Enter 5 keywords separated by commas" />
            <button className="keyword-button" onClick={() => (window as any).reorganize('keywords-2','ai-note-2')}>Reorganize Content</button>
      
            <canvas id="simChart2" width="400" height="200"></canvas>
          </div>
          <button onClick={(e) => (window as any).toggleExpand(e.currentTarget)}>Expand / Collapse</button>
        </div>
      
        <div className="projection-card">
          <h2>DLDCHAIN & Mashroi</h2>
          <p>Blockchain property management with EBRAM judicial language and unified wallet system.</p>
          <span className="status upgrade">Upgrade</span>
      
          <div className="expandable">
            <p id="ai-note-3">AI simulates tokenization, market flows, and property management outcomes.</p>
            <textarea id="user-note-3" placeholder="Add your note or idea here..."></textarea>
            <button onClick={() => (window as any).addNote('user-note-3','ai-note-3')}>Submit Note</button>
      
            <input type="text" id="keywords-3" className="keyword-input" placeholder="Enter 5 keywords separated by commas" />
            <button className="keyword-button" onClick={() => (window as any).reorganize('keywords-3','ai-note-3')}>Reorganize Content</button>
      
            <canvas id="simChart3" width="400" height="200"></canvas>
          </div>
          <button onClick={(e) => (window as any).toggleExpand(e.currentTarget)}>Expand / Collapse</button>
        </div>
      
      </div>
    </>
  );
}
