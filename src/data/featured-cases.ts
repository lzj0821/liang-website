export interface FeaturedCase {
  id: string;
  category: string;
  period: string;
  title: string;
  summary: string;
  result: string;
  metrics?: { value: string; label: string }[];
}

// Public case copy: what was built and its outcome. No implementation diary.
export const featuredCases: FeaturedCase[] = [
  {
    id: 'crm', category: '客户管理', period: '2026',
    title: '招商客户管理系统',
    summary: '汇集小红书、抖音等平台线索，沉淀到企业自己的 CRM。',
    result: '客户资料集中管理，分配、跟进与权限按自身业务定制。',
  },
  {
    id: 'automation', category: '自动化工作流', period: '2026',
    title: '活动报表与网页录入',
    summary: '为报表汇总与网页录入，分别搭建处理工具。',
    result: '减少重复整理与复制填表，缺项和重复信息集中核对。',
  },
  {
    id: 'jutu', category: '小程序开发', period: '精选作品',
    title: '精选小程序案例',
    summary: '家居出图、模型动态、图文转播客。',
    result: '把不同场景的需求做成微信里的工具。',
  },
  {
    id: 'workbench', category: '内容工作台', period: '个人自用',
    title: '创作间 · 内容工作台',
    summary: '把口播稿、视频、字幕与封面，放进一个工作台。',
    result: '集中修改、比较版本，整理成可发布的素材包。',
  },
  {
    id: 'youtube', category: 'AI 短视频', period: '2026.04',
    title: 'AI 系列短视频',
    summary: '独立制作并发布游戏主题的 YouTube Shorts。',
    result: '',
    metrics: [{ value: '15 天', label: '统计周期' }, { value: '500 万+', label: '累计播放' }],
  },
  {
    id: 'growth', category: '数据整理', period: '企业项目',
    title: '运营数据整理提效',
    summary: '用 AI 辅助汇总与整理运营数据。',
    result: '单项整理任务的实际耗时对比。',
    metrics: [{ value: '2 小时', label: '原来' }, { value: '10 分钟', label: '现在' }],
  },
];
