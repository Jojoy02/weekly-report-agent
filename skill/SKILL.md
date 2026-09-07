# weekly-report-transformer

## 1. Metadata

**Name:** weekly-report-transformer

**Description:**  
将来源团队周报中的业务信息转换为目标团队既有周报结构。

适用于：
- 根据来源周报生成目标团队本期周报；
- 修改已有周报草稿；
- 根据用户修改提取候选转换规则；
- 对生成结果执行结构、事实和规则校验。

不适用于：
- 通用文本总结；
- 无来源依据的信息补充；
- 自动创建来源材料不存在的业务事项；
- 未获得明确确认时写入正式目标文档。

## 2. Core Workflow

执行顺序：

1. READ TARGET
2. CONFIRM SCOPE
3. READ SOURCE
4. PARSE ITEMS
5. BUILD CONTEXT
6. LOAD REFERENCES
7. TRANSFORM
8. VALIDATE
9. PREVIEW
10. COMMIT
11. READ BACK

### READ TARGET
优先读取目标周报，识别既有章节、目标周期、上一期内容和允许更新范围。

### CONFIRM SCOPE
确认本期更新周期和修改范围。未命中的非目标章节按 carry-forward 规则处理。

### READ SOURCE
读取来源周报。不得直接进入最终生成。

### PARSE ITEMS
将来源拆成结构化业务事项，包括项目、类别、当前状态、历史状态、日期、事实和来源定位。

### BUILD CONTEXT
补充上一期状态、历史时间线、目标章节和当前 active rules。

### LOAD REFERENCES
只加载当前任务真正需要的 Reference。禁止默认加载全部附件。

### TRANSFORM
仅基于来源事实、目标结构、active rules、相关 Reference 和历史上下文生成。

### VALIDATE
必须执行事实一致性、覆盖率、项目映射、结构、时间状态和规则符合性检查。

### PREVIEW
向用户展示草稿和依据。允许修改、重新生成或明确确认写入。

### COMMIT
只有用户表达明确写入意图时执行。  
“可以 / 好的 / 继续 / OK”均不得视为写入授权。

### READ BACK
写入后重新读取目标文档，并与最终确认稿做一致性比对。

## 3. Fallback

完整策略见：

`fallback/fallback-policy.md`

核心原则：
- 信息不足时不推断；
- 冲突存在时不自动覆盖；
- 外部依赖失败时进入显式降级；
- Validation 未通过时不得 Commit；
- 写入结果必须回读验证。

## 4. References

按需加载：

- `references/target-structure.md`
- `references/source-parsing.md`
- `references/section-mapping.md`
- `references/status-rules.md`
- `references/writing-rules.md`
- `references/carry-forward-rules.md`
- `references/examples.md`

不要把 Reference 全文复制进本文件。
