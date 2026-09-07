export const scenarios = [
  {
    id: "normal",
    label: "正常生成",
    badge: "NORMAL",
    sourceTitle: "线下业务周报 · 第 32 周",
    source: "北京国补：OCR、IMEI 识别与图片重传能力已完成上线。本周完成线上观察，未发现阻断问题。",
    trace: [
      { type: "ok", title: "Skill Called", detail: "weekly-report-transformer" },
      { type: "ok", title: "Project Matched", detail: "北京国补 → 监管类项目" },
      { type: "ok", title: "Reference Loaded", detail: "status-rules.md · writing-rules.md" },
      { type: "ok", title: "Historical Context", detail: "上期状态：提测" },
      { type: "ok", title: "Validation", detail: "事实一致性 / 状态连续性 / 结构检查通过" }
    ],
    resultTitle: "支付团队周报",
    result: "北京国补：OCR、IMEI 识别及图片重传能力已上线，本周完成线上观察，暂未发现阻断问题。",
    evidence: ["来源：第 32 周线下业务周报", "当前状态：已上线", "历史状态：提测", "规则：监管类项目状态表达规则"],
    status: "READY TO PREVIEW"
  },
  {
    id: "missing",
    label: "关键字段缺失",
    badge: "FALLBACK",
    sourceTitle: "线下业务周报 · 第 33 周",
    source: "扫码分期能力已完成上线准备，计划近期正式上线。",
    trace: [
      { type: "ok", title: "Skill Called", detail: "weekly-report-transformer" },
      { type: "ok", title: "Project Matched", detail: "扫码分期 → 支付能力" },
      { type: "warn", title: "Missing Field", detail: "未找到明确上线日期" },
      { type: "warn", title: "Fallback F05", detail: "禁止根据上下文推测日期" },
      { type: "ok", title: "Safe Output", detail: "保留状态，不生成具体日期" }
    ],
    resultTitle: "支付团队周报 · 待确认",
    result: "扫码分期：已完成上线准备，计划近期上线。具体上线时间待确认。",
    evidence: ["来源中未出现明确日期", "Fallback：禁止推测关键日期", "人工确认项：正式上线时间"],
    status: "HUMAN REVIEW REQUIRED"
  },
  {
    id: "conflict",
    label: "状态冲突",
    badge: "BLOCKED",
    sourceTitle: "线下业务周报 · 第 34 周",
    source: "门店融资：本周计划进入提测阶段。",
    trace: [
      { type: "ok", title: "Skill Called", detail: "weekly-report-transformer" },
      { type: "ok", title: "Project Matched", detail: "门店融资 → 商户业务" },
      { type: "warn", title: "Historical Conflict", detail: "历史记录显示：已上线" },
      { type: "error", title: "Fallback F06", detail: "阻断自动覆盖历史状态" },
      { type: "warn", title: "Human Decision", detail: "使用当前来源 / 保持历史状态 / 暂不处理" }
    ],
    resultTitle: "未生成正式结果",
    result: "检测到状态冲突：历史状态为“已上线”，当前来源为“计划提测”。系统已停止自动更新。",
    evidence: ["历史状态：已上线", "当前来源：计划提测", "Fallback：状态冲突时禁止自动覆盖"],
    status: "AUTO UPDATE BLOCKED"
  },
  {
    id: "reference",
    label: "Reference 失败",
    badge: "DEGRADED",
    sourceTitle: "线下业务周报 · 第 35 周",
    source: "非现场监管：本周完成数据口径调整并进入联调。",
    trace: [
      { type: "ok", title: "Skill Called", detail: "weekly-report-transformer" },
      { type: "ok", title: "Project Matched", detail: "非现场监管 → 监管类项目" },
      { type: "error", title: "Reference Load Failed", detail: "status-rules.md unavailable" },
      { type: "warn", title: "Fallback F07", detail: "关闭依赖该 Reference 的自动状态判断" },
      { type: "warn", title: "Degraded Mode", detail: "仅保留来源事实，结果需人工确认" }
    ],
    resultTitle: "降级结果",
    result: "非现场监管：本周完成数据口径调整并进入联调。状态规则未完成校验，需人工确认。",
    evidence: ["来源事实可用", "状态 Reference 加载失败", "系统已禁用自动状态判断"],
    status: "DEGRADED / REVIEW REQUIRED"
  }
];
