export interface FeaturedCase {
  id: string;
  category: string;
  period: string;
  title: string;
  summary: string;
  value: string;
  result: string;
  audience: 'enterprise' | 'individual';
  kind: string;
  problem: string;
  work: string;
  client?: { industry: string; size?: string };
  measuredResult?: { text: string; period: string; method: string };
  testimonial?: { quote: string; role: string; date: string };
  metrics?: { value: string; label: string }[];
}

// Public case copy: what was built and its outcome. No implementation diary.
export const featuredCases: FeaturedCase[] = [
  {
    id: 'crm', category: '家居制造', period: '公司内部项目',
    title: '多平台客资 CRM',
    audience: 'enterprise', kind: '公司内部项目',
    client: { industry: '家居行业制造企业' },
    problem: '各平台的客资分散在对应的 CRM 中，难以统一管理。',
    work: '独立负责自研 CRM 的方案、开发、上线、培训与维护。',
    summary: '通过自研 CRM 汇总各平台客资，集中管理客户资源。',
    value: '多平台客资，一个系统集中管理',
    result: '将各平台客资汇总到同一套系统，统一查看与跟进。',
  },
  {
    id: 'automation', category: '报表与录入', period: '2026',
    title: '活动报表与网页录入',
    audience: 'enterprise', kind: '项目实践',
    problem: '汇总报表、往网页填数据，要反复整理、复制，再逐条检查。',
    work: '分别做了报表汇总和网页录入工具，把缺项、重复信息单独列出来检查。',
    summary: '报表自动汇总，网页自动填入，缺项和重复信息留给人检查。',
    value: '重复的步骤交给工具，人来检查异常',
    result: '减少重复整理与复制填表，缺项和重复信息集中核对。',
  },
  {
    id: 'jutu', category: '小程序开发', period: '精选作品',
    title: '我做的三个小程序',
    audience: 'individual', kind: '产品作品',
    problem: '家居出图、看模型动态、把文章变成播客，都想有一个方便使用的入口。',
    work: '分别设计和开发小程序，把这些想法做成能在微信里用的工具。',
    summary: '家居出图、模型动态、图文转播客，三种想法，三个微信小程序。',
    value: '从一个想法，做到微信里能用的产品',
    result: '把不同场景的需求做成微信里的工具。',
  },
  {
    id: 'workbench', category: '内容工作台', period: '个人自用',
    title: '创作间 · 内容工作台',
    audience: 'individual', kind: '个人自用',
    problem: '做内容时，稿子、视频、字幕和封面分散在不同步骤里，修改和找版本都麻烦。',
    work: '把内容制作步骤放进同一工作台，集中比较版本、整理素材。',
    summary: '为自己做的创作工具，把稿子、视频、字幕和封面放在一起制作和修改。',
    value: '从写稿到出片，在一个工作台里完成',
    result: '集中修改、比较版本，整理成可发布的素材包。',
  },
  {
    id: 'youtube', category: 'AI 短视频', period: '2026.04',
    title: 'AI 系列短视频',
    audience: 'individual', kind: '个人实践',
    problem: '游戏主题短视频的系列创作与发布。',
    work: '用 AI 制作游戏主题短视频，独立完成并发布到 YouTube。',
    summary: '用 AI 做了一系列游戏短视频，发布在 YouTube。',
    value: '用 AI 制作一整个系列的游戏短视频',
    result: '',
    metrics: [{ value: '15 天', label: '统计周期' }, { value: '500 万+', label: '累计播放' }],
  },
  {
    id: 'growth', category: '数据整理', period: '企业项目',
    title: '运营数据整理提效',
    audience: 'enterprise', kind: '企业项目',
    problem: '运营数据汇总与整理中的重复工作。',
    work: '用 AI 辅助汇总和整理运营数据。',
    summary: '把原本手工汇总、整理的数据交给 AI 辅助处理，减少分析之前的准备工作。',
    value: '数据整理从 2 小时缩短到 10 分钟',
    result: '单项整理任务的实际耗时对比。',
    metrics: [{ value: '2 小时', label: '原来' }, { value: '10 分钟', label: '现在' }],
  },
];
