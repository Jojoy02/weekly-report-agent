import DemoInspector from "../components/DemoInspector";

const metrics = [
  ["01", "Task Quality", "Coverage · Fact Consistency · Project Matching · Structural Compliance"],
  ["02", "Agent Behavior", "Fallback Accuracy · Hallucination · Unauthorized Action · Commit Safety"],
  ["03", "System Quality", "Regression Pass · Human Modification · Write-back Consistency · Rule Promotion"],
];

const fallbacks = [
  ["Missing Source", "不进入生成流程"],
  ["Missing Key Field", "禁止根据上下文补全"],
  ["Ambiguous Mapping", "转人工确认"],
  ["Status Conflict", "阻断自动覆盖"],
  ["Reference Failure", "关闭对应自动判断"],
  ["Write Failure", "保留确认稿，不重新生成"],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top">WR / AGENT</a>
        <nav>
          <a href="#problem">Problem</a>
          <a href="#architecture">Architecture</a>
          <a href="#demo">Demo</a>
          <a href="#evaluation">Evaluation</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-left">
          <p className="eyebrow">ENTERPRISE AI · PRODUCT CASE STUDY</p>
          <h1>Weekly Report<br/>Transformation Skill</h1>
          <p className="hero-cn">企业业务周报智能转化 Agent</p>
          <p className="hero-copy">
            将跨团队业务信息转化为符合目标团队口径的周报，
            并通过 Skill、Reference、Fallback 与 Evaluation
            把 Agent 的不确定行为限制在可控范围内。
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#demo">Try Demo</a>
            <a className="ghost-btn" href="#architecture">View Architecture</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="system-card">
            <div className="system-card-head">
              <span>Agent status</span>
              <span className="live-dot">● Ready</span>
            </div>
            <div className="mini-flow">
              {["READ TARGET","PARSE SOURCE","LOAD REFERENCES","TRANSFORM","VALIDATE","PREVIEW","COMMIT","READ BACK"].map((x, i) => (
                <div key={x} className="mini-step"><span>{String(i+1).padStart(2,"0")}</span>{x}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="problem">
        <div className="section-heading">
          <p className="eyebrow">01 / PROBLEM</p>
          <h2>Generation was not the hardest problem.<br/>Controllability was.</h2>
        </div>

        <div className="problem-grid">
          <div className="problem-copy">
            <p>
              业务团队之间的关注重点、信息结构和表达口径不同。
              人工需要重复阅读来源周报、识别相关项目、回溯历史状态，再重新组织目标团队内容。
            </p>
            <p>
              第一版验证发现，大模型并不缺少“写周报”的能力。
              真正的问题是：信息不足时它会不会推测，状态冲突时会不会覆盖，
              规则失效时会不会继续执行。
            </p>
          </div>
          <div className="evolution">
            <div><span>V1</span><strong>Prompt</strong><small>能生成，但行为不稳定</small></div>
            <div><span>V2</span><strong>Workflow + Rules</strong><small>流程可控，Context 逐渐膨胀</small></div>
            <div><span>V3</span><strong>Skill + Reference</strong><small>规则与知识分层</small></div>
            <div className="accent"><span>V4</span><strong>Fallback + Evaluation</strong><small>异常行为可预期、可验证</small></div>
          </div>
        </div>
      </section>

      <section className="section" id="architecture">
        <div className="section-heading">
          <p className="eyebrow">02 / ARCHITECTURE</p>
          <h2>把 Skill 从“提示词”变成一套行为系统。</h2>
        </div>

        <div className="arch-grid">
          <div className="arch-card"><span className="arch-index">01</span><h3>Trigger</h3><p>什么时候应该调用；什么时候不应该调用。</p></div>
          <div className="arch-card"><span className="arch-index">02</span><h3>Instruction</h3><p>READ TARGET → BUILD CONTEXT → TRANSFORM → VALIDATE。</p></div>
          <div className="arch-card"><span className="arch-index">03</span><h3>Fallback</h3><p>关键参数缺失、状态冲突、外部依赖失败时如何降级。</p></div>
          <div className="arch-card"><span className="arch-index">04</span><h3>Reference</h3><p>详细业务知识不常驻 Context，只在命中场景时加载。</p></div>
          <div className="arch-card"><span className="arch-index">05</span><h3>Evaluation</h3><p>不只评估生成质量，还评估 Agent 是否做了不该做的事。</p></div>
          <div className="arch-card inverse"><span className="arch-index">RUN</span><h3>Runtime</h3><p>Dify / LLM / MCP 只是执行层，而不是产品架构本身。</p></div>
        </div>

        <div className="flow-strip">
          {["READ TARGET","CONFIRM SCOPE","READ SOURCE","PARSE ITEMS","BUILD CONTEXT","LOAD REFERENCES","TRANSFORM","VALIDATE","PREVIEW","COMMIT","READ BACK"].map((step, i) => (
            <div key={step} className="flow-node"><span>{String(i+1).padStart(2,"0")}</span><strong>{step}</strong></div>
          ))}
        </div>
      </section>

      <DemoInspector />

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">04 / FALLBACK</p>
          <h2>Designing the lower bound of Agent behavior.</h2>
        </div>
        <div className="fallback-grid">
          {fallbacks.map(([condition, action]) => (
            <div className="fallback-card" key={condition}>
              <span>IF</span><strong>{condition}</strong><div className="arrow">↓</div><p>{action}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="evaluation">
        <div className="section-heading">
          <p className="eyebrow">05 / EVALUATION</p>
          <h2>不再用一个“准确率”概括整个 Agent。</h2>
        </div>
        <div className="metric-list">
          {metrics.map(([index, title, desc]) => (
            <div className="metric-row" key={title}><span>{index}</span><h3>{title}</h3><p>{desc}</p></div>
          ))}
        </div>
      </section>

      <section className="section governance">
        <div className="section-heading">
          <p className="eyebrow">06 / GOVERNANCE</p>
          <h2>一次用户修改，不应该直接改写生产规则。</h2>
        </div>
        <div className="governance-flow">
          {["User Edit","Candidate Rule","Historical Validation","Holdout Eval","Regression","Human Approval","Active Rule"].map((step, i) => (
            <div key={step} className="gov-step"><span>{String(i+1).padStart(2,"0")}</span><strong>{step}</strong></div>
          ))}
        </div>
      </section>

      <section className="ownership">
        <p className="eyebrow">07 / MY OWNERSHIP</p>
        <div className="ownership-grid">
          <div><h3>Product</h3><p>业务问题定义 · 工作流 · Agent 行为边界 · 人工介入节点 · Fallback</p></div>
          <div><h3>AI</h3><p>Skill 架构 · Context Strategy · Reference · Evaluation · Rule Governance</p></div>
          <div><h3>Engineering Collaboration</h3><p>Dify Workflow · MCP · API Spec · Test Cases · AI Coding · Demo Deployment</p></div>
        </div>
      </section>

      <footer>
        <span>Weekly Report Transformation Skill</span>
        <span>Enterprise AI Product Case Study</span>
      </footer>
    </main>
  );
}
