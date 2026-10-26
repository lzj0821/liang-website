// 2026-10-23 confirmed copy: keep artwork and responsive text in one visual.
export const abilityCopy = [
  { title: '找准问题', line: '先看哪一步值得做', image: 'ability-problem', link: '看客户管理案例', caseId: 'crm' },
  { title: '选对工具', line: '先验证，再决定定制', image: 'ability-tools', link: '看内容工作台', caseId: 'workbench' },
  { title: '交付能用', line: '工具、培训与支持', image: 'ability-delivery', link: '了解交付内容', caseId: '' },
] as const;

export const serviceCopy = {
  enterprise: { audience: '面向企业', title: '企业 AI 落地', points: ['业务梳理', '流程与工具', '团队内训'] },
  individual: { audience: '面向个人与小团队', title: '智能体与工作流', points: ['专属智能体', '自动化流程', '工具接入'] },
} as const;

export const processCopy = [
  { title: '需求沟通', output: '需求清单', kind: 'input', time: '约 30 分钟', cost: '免费', detail: '梳理现有做法，选出值得先做的一项任务。' },
  { title: '方案定制', output: '实施方案', kind: 'plan', time: '1–3 个工作日', cost: '确认后付定金', detail: '明确交付内容、验收方式、周期与报价。' },
  { title: '开发交付', output: '工具与培训', kind: 'tool', time: '1–4 周', cost: '按方案报价', detail: '按节点演示与试用，用真实任务核对结果。' },
  { title: '售后支持', output: '使用支持', kind: 'support', time: '30 天免费', cost: '后续可续', detail: '提供答疑与约定范围内的小调整，新增功能另行评估。' },
] as const;

export const resultFlowLabels = ['你提供', 'AI 处理', '你核对'] as const;
