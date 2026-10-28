interface SelfBuiltProduct {
  id: string;
  name: string;
  shortName: string;
  benefit: string;
  description: string;
  features: string[];
  // Add only an owner-provided, verified release code. Never synthesize a mini-program code.
  experienceCode?: string;
}
export const selfBuiltProducts: SelfBuiltProduct[] = [
  {
    id: 'jutu',
    name: '居图 AI',
    shortName: '居图 AI',
    benefit: '一张原图，多种展示方式',
    description: '上传空间或家具照片，生成方案沟通与商品展示用图。',
    features: ['空间设计', '家具出图', '多种展示图'],
  },
  {
    id: 'reset',
    name: 'AI 重置（Reset）',
    shortName: 'AI 重置',
    benefit: '模型重置动态，一处查看',
    description: '常用 AI 的使用额度什么时候恢复？集中查看重置消息和历史记录。',
    features: ['重置动态', '历史记录', '消息来源'],
  },
  {
    id: 'podcast',
    name: '纸间声语',
    shortName: '纸间声语',
    benefit: '把阅读，变成随时能听的播客',
    description: '图文转播客，支持共读、采访和独白，碎片时间用听的方式学习。',
    features: ['双人共读', '采访作者', '作者独白'],
  },
];
