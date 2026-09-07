"use client";

import { useMemo, useState } from "react";
import { scenarios } from "../data/scenarios";

export default function DemoInspector() {
  const [activeId, setActiveId] = useState("normal");
  const scenario = useMemo(
    () => scenarios.find((item) => item.id === activeId) || scenarios[0],
    [activeId]
  );

  return (
    <section className="demo-shell" id="demo">
      <div className="demo-topbar">
        <div>
          <p className="eyebrow">INTERACTIVE DEMO</p>
          <h2>Agent Inspector</h2>
        </div>
        <div className="scenario-tabs" role="tablist" aria-label="Demo scenarios">
          {scenarios.map((item) => (
            <button
              key={item.id}
              className={activeId === item.id ? "tab active" : "tab"}
              onClick={() => setActiveId(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="demo-grid">
        <article className="panel">
          <div className="panel-head">
            <span>01</span>
            <strong>Source</strong>
          </div>
          <p className="panel-kicker">{scenario.sourceTitle}</p>
          <div className="source-card">{scenario.source}</div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <span>02</span>
            <strong>Agent Trace</strong>
          </div>
          <div className="trace-list">
            {scenario.trace.map((step, idx) => (
              <div className={`trace-row ${step.type}`} key={`${step.title}-${idx}`}>
                <div className="trace-dot" />
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <span>03</span>
            <strong>Result</strong>
          </div>
          <div className="status-line">
            <span className={`status-badge ${scenario.badge.toLowerCase()}`}>
              {scenario.badge}
            </span>
            <span>{scenario.status}</span>
          </div>
          <h3 className="result-title">{scenario.resultTitle}</h3>
          <div className="result-card">{scenario.result}</div>

          <div className="evidence">
            <p className="panel-kicker">Evidence</p>
            {scenario.evidence.map((item) => (
              <div className="evidence-item" key={item}>
                <span>↳</span>{item}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
