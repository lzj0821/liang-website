export interface FeaturedCase {
  id: string;
  brand: string;
  category: string;
  period: string;
  title: string;
  summary: string;
  outcome: string;
  scene: string;
  action: string;
  result: string;
  audience: string;
  role: string;
  comparison?: { before: string; after: string };
  flows: { title: string; steps: string[] }[];
  metrics?: { value: string; label: string }[];
}

// Preserve project scope, anonymous brands and historical result qualifiers.
export const featuredCases: FeaturedCase[] = [
  {
    id: 'crm', brand: '某家居企业', category: '客户管理', period: '2026',
    title: '招商客户管理系统',
    summary: '谁在跟进、进展如何、下一步做什么，一处看清。',
    outcome: '先看清谁在跟、跟到哪，再考虑更多功能',
    result: '集中客户档案与沟通记录，方便团队接手和跟进。',
    audience: '招商、销售及多人协作的客户团队',
    role: '业务流程梳理与系统搭建',
    comparison: { before: '翻表格、找聊天，才能知道客户进展', after: '打开客户档案，看负责人、进展与下一步' },
    flows: [{ title: '团队协作', steps: ['分配客户', '记录跟进', '查看与交接'] }],
    scene: '资料散在表格和聊天里，容易重复联系或遗漏跟进。',
    action: '按岗位设置查看与处理范围，集中维护客户档案和沟通记录。',
  },
  {
    id: 'automation', brand: '两个业务场景', category: '自动化工作流', period: '2026',
    title: '活动报表与网页录入',
    summary: '减少反复整理与复制填表，让关键结果方便核对。',
    outcome: '重复整理交给工具，不确定的结果留给人确认',
    result: '活动项目已用于实际批次核对与周榜整理；网页录入项目支持信息整理、查重和任务记录。',
    audience: '经常汇总报表、跨系统搬运资料的运营团队',
    role: '工作流设计与工具搭建',
    comparison: { before: '反复汇总、查重，再复制到目标表单', after: '按规则整理，集中核对缺项与不确定内容' },
    flows: [
      { title: '活动报表', steps: ['收集上报', '核对缺项', '整理周榜'] },
      { title: '网页录入', steps: ['整理信息', '匹配与查重', '记录处理结果'] },
    ],
    scene: '活动汇总与网页录入是两个独立场景，都有重复整理和核对。',
    action: '分别梳理处理规则，对缺项、重复和不确定内容保留人工确认。',
  },
  {
    id: 'jutu', brand: '个人产品', category: '家居设计', period: '2026',
    title: '居图 AI · 家居效果图助手',
    summary: '上传空间或家具照片，生成方案沟通与商品展示用图。',
    outcome: '出图要方便沟通，也要核对外观与空间结构',
    result: '已上线微信小程序。支持空间效果图，以及家具白底图、场景图、模特体验图和海报。',
    audience: '家居门店、经销商与家居内容团队',
    role: '产品设计与小程序开发',
    comparison: { before: '只有空房或家具原图，摆放效果需要解释', after: '生成空间效果图与多种商品展示图' },
    flows: [{ title: '使用过程', steps: ['上传原图', '选择效果', '生成展示图'] }],
    scene: '仅靠产品照片和文字，不容易向客户解释摆进家里的效果。',
    action: '将空间设计与家具展示做成小程序，图中为实际出图结果。',
  },
  {
    id: 'workbench', brand: '个人自用', category: '内容工作流', period: '2026',
    title: '个人内容创作工作台',
    summary: '脚本、素材与样片集中管理，修改和比较更方便。',
    outcome: '同一条内容，在一个工作台里整理与修改',
    result: '把选题、脚本、素材、字幕和样片放在一起，保留版本，方便对照和选择。',
    audience: '口播创作者、小型内容团队',
    role: '内容工作流与自用工具搭建',
    comparison: { before: '脚本、素材和样片分开找，版本难比较', after: '同条内容集中管理，两版样片并排查看' },
    flows: [{ title: '创作过程', steps: ['脚本与素材', '字幕校对', '样片比较'] }],
    scene: '制作视频时，需要反复找文件、校对字幕和辨认最新版本。',
    action: '按日常创作流程搭建自用工具，加入草稿保存、备份和样片对比。',
  },
  {
    id: 'youtube', brand: '个人内容实践', category: '内容增长', period: '2026.04',
    title: '用 AI 制作系列短视频',
    summary: '个人独立制作与发布，15 天累计 500 万+ 播放。',
    outcome: '用 AI 支持一个人的持续内容生产',
    result: '2026 年 4 月的 YouTube Shorts 项目记录；播放量不代表销售收入。',
    audience: '需要持续测试内容方向的创作者与内容团队',
    role: '系列选题、视频制作与发布复盘',
    metrics: [{ value: '15 天', label: '统计周期' }, { value: '500 万+', label: '累计播放' }],
    flows: [{ title: '制作过程', steps: ['系列选题', 'AI 辅助制作', '发布与复盘'] }],
    scene: '独立创作时间有限，需要找到可持续制作的内容形式。',
    action: '围绕游戏主题生成视频，人工筛选和整理后发布，持续观察观众反馈。',
  },
  {
    id: 'growth', brand: '某智能家居品牌', category: '获客运营', period: '历史项目',
    title: '获客投放与数据整理',
    summary: '优化投放与数据整理，历史项目获客成本最高降 80%。',
    outcome: '更快看清投放效果，把时间留给分析与跟进',
    result: '为具体历史项目结果；获客成本改善来自投放优化，AI 辅助数据整理。',
    audience: '正在投放获客、需要定期复盘的传统企业',
    role: '获客投放优化与数据整理',
    metrics: [{ value: '最高约 80%', label: '获客成本降幅' }, { value: '约 90%', label: '数据整理耗时减少' }],
    flows: [{ title: '运营过程', steps: ['整理投放数据', '分析线索质量', '调整与复盘'] }],
    scene: '人工整理数据耗时，影响团队及时判断投放效果。',
    action: '结合线索质量调整投放，并用 AI 辅助汇总数据。其他业务需按自身情况评估。',
  },
];
