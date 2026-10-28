export const scenarioQuestions = [
  { title: '先选一个想改善的业务环节', short: '选方向', groups: [
    { name: 'task', label: '业务环节', options: [['reports', '报表与业务运营'], ['customer', '客户管理与跟进'], ['content', '内容制作与营销'], ['research', '资料与专业知识'], ['images', '商品与空间展示'], ['unsure', '还没想清楚']] },
  ] },
  { title: '它有多占用你的时间？', short: '看投入', groups: [
    { name: 'workload', label: '投入程度', options: [['high', '经常做，而且很耗时'], ['medium', '定期做，想再快一点'], ['low', '偶尔做，不太费时间'], ['unsure', '还没有算过']] },
  ] },
  { title: '资料和做法，准备好了吗？', short: '看准备', groups: [
    { name: 'readiness', label: '准备情况', options: [['ready', '资料齐全，步骤清楚'], ['scattered', '步骤清楚，资料分散'], ['changing', '每次不同，主要靠经验'], ['unsure', '还没整理清楚']] },
  ] },
  { title: 'AI 做完，你能检查对不对吗？', short: '看核对', groups: [
    { name: 'review', label: '核对方式', options: [['easy', '能，容易对照检查'], ['expert', '能，但需要专业判断'], ['hard', '很难，出错影响也大'], ['unsure', '还不确定怎么检查']] },
  ] },
];

export type ScenarioAnswers = Record<string, string>;
export type ScenarioResult = {
  kind: 'explore' | 'assist' | 'tools' | 'organize' | 'observe' | 'pilot';
  title: string;
  reason: string;
  next: string;
  human: string;
  flow: [string, string, string];
  signals: { label: string; value: string; state: 'ready' | 'attention' }[];
  caseIds: string[];
};

const tasks: Record<string, { title: string; flow: [string, string, string]; next: string; human: string; sample: string; cases: string[] }> = {
  reports: { title: '报表整理与录入', flow: ['原始表格', '汇总与查重', '核对后使用'], next: '拿一份旧报表，试一次汇总与查重。', human: '核对数字、缺项和最终填入的内容。', sample: '一份原始表格和一份完成后的报表', cases: ['automation'] },
  customer: { title: '客户跟进记录', flow: ['沟通记录', '整理要点与待办', '确认后跟进'], next: '拿一段历史沟通，试着整理要点与待办。', human: '确认客户意向、承诺和下一步动作。', sample: '一段匿名沟通记录和一份跟进记录', cases: ['crm'] },
  content: { title: '内容草稿与修改', flow: ['选题与素材', '起草与整理', '审阅后发布'], next: '选一个熟悉的选题，试一版初稿再修改。', human: '核对事实、表达与素材使用范围。', sample: '一个选题、相关素材和一份成稿', cases: ['workbench', 'youtube'] },
  research: { title: '资料查找与归纳', flow: ['原始文档', '查找与归纳', '对照原文'], next: '拿三份常用资料，试着查一个具体问题。', human: '对照原文检查答案与引用。', sample: '几份常用资料和一个实际问题', cases: [] },
  images: { title: '商品与空间展示图', flow: ['产品或空间照片', '生成展示图', '确认后选用'], next: '用一张产品或空间照片，试一版展示图。', human: '核对外观、结构和展示是否准确。', sample: '一张原图和一种想要的展示效果', cases: ['jutu'] },
  unsure: { title: '找出重复工作', flow: ['记录日常任务', '挑出重复步骤', '选一件先试'], next: '记下今天反复做的三件事，挑最费时的一件。', human: '先说清楚这件事怎样才算做完。', sample: '一件真实任务', cases: [] },
};

export function assessScenario(answers: ScenarioAnswers): ScenarioResult | null {
  if (scenarioQuestions.some(q => q.groups.some(g => answers[g.name] !== undefined && !g.options.some(([v]) => v === answers[g.name])))) return null;
  if (answers.task === 'unsure') return {kind:'explore',title:'先找到一件具体的事',reason:'场景还没确定，先从日常重复工作里找起。',next:tasks.unsure.next,human:tasks.unsure.human,flow:tasks.unsure.flow,signals:[],caseIds:[]};
  if (scenarioQuestions.some(q => q.groups.some(g => !g.options.some(([v]) => v === answers[g.name])))) return null;
  const task = tasks[answers.task];
  const workload = {high:'经常耗时',medium:'定期重复',low:'偶尔少量',unsure:'待观察'}[answers.workload]!;
  const readiness = {ready:'资料与步骤清楚',scattered:'资料待集中',changing:'依赖经验',unsure:'待梳理'}[answers.readiness]!;
  const review = {easy:'容易核对',expert:'需专业判断',hard:'核对难度高',unsure:'待明确'}[answers.review]!;
  const common = {
    human: task.human, flow: task.flow, caseIds: task.cases,
    signals: [
      {label:'投入',value:workload,state:(['high','medium'].includes(answers.workload)?'ready':'attention') as 'ready'|'attention'},
      {label:'准备',value:readiness,state:(answers.readiness==='ready'?'ready':'attention') as 'ready'|'attention'},
      {label:'核对',value:review,state:(answers.review==='easy'?'ready':'attention') as 'ready'|'attention'},
    ],
  };
  if (answers.review !== 'easy') return {...common,kind:'assist',title:'先让 AI 帮你准备',reason:answers.review==='unsure'?'先明确怎样检查结果，再决定交给 AI 的范围。':'结果需要谨慎核对，先从资料和草稿开始。',next:'用历史样本试做，暂不直接用于实际业务。',flow:[task.flow[0],'生成待审草稿','负责人逐项确认']};
  if (answers.workload === 'low') return {...common,kind:'tools',title:'先用现成工具试一次',reason:'目前投入不多，先验证方便程度，再考虑定制。',next:task.next};
  if (answers.readiness !== 'ready') return {...common,kind:'organize',title:answers.readiness==='changing'?'先拆出固定的一步':'先整理一份可用样本',reason:answers.readiness==='scattered'?'资料分散会增加核对成本，先集中一份完整样本。':answers.readiness==='changing'?'经验判断保留给人，把重复的准备步骤单独拆出来。':'先明确输入和完成标准，才容易判断是否有帮助。',next:answers.readiness==='changing'?'把准备资料、判断、执行分开，先试准备资料。':'准备'+task.sample+'。'};
  if (answers.workload === 'unsure') return {...common,kind:'observe',title:'先记录一次实际耗时',reason:'资料和核对条件已具备，再看投入是否值得优化。',next:task.next+'同时记录前后耗时。'};
  return {...common,kind:'pilot',title:'从「'+task.title+'」试起',reason:'经常重复、资料明确、结果可检查，适合做一次小范围试用。',next:task.next};
}

export function scenarioSummary(answers: ScenarioAnswers, result: ScenarioResult): string {
  const lines = scenarioQuestions.flatMap(q=>q.groups.filter(g=>answers[g.name]!==undefined).map(g=>g.label+'：'+g.options.find(([v])=>v===answers[g.name])?.[1]));
  return ['我的 AI 场景自测',...lines,'起点建议：'+result.title,'先做一件事：'+result.next,'人工确认：'+result.human,'想聊聊这个场景怎么开始。'].join('\n');
}

