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
  { title: '先聊一聊', output: '把事情说清楚', kind: 'input', time: '约 30 分钟', cost: '免费', detail: '了解你在做什么、卡在哪里，一起判断适合怎么做。' },
  { title: '确定方案', output: '范围与报价', kind: 'plan', time: '1–3 个工作日', cost: '确认后付定金', detail: '做哪些功能、花多少钱、什么时候能用，提前说清楚。' },
  { title: '开发与试用', output: '做出来，试着用', kind: 'tool', time: '1–4 周', cost: '按方案报价', detail: '开发中给你看进展，用你的业务试用，按约定检查结果。' },
  { title: '后续支持', output: '有问题继续聊', kind: 'support', time: '30 天免费', cost: '后续可续', detail: '使用答疑和约定的小调整都在内；要加新功能，再商量。' },
] as const;

export const resultFlowLabels = ['你提供', 'AI 处理', '你核对'] as const;
