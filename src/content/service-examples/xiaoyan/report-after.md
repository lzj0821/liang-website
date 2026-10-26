> 2026-10-14 小研历史报告。由原始文档快照转成 Markdown，已去除内部文档及块标识。展示历史产物，不代表本轮重新核验全部安全建议。

# 用了通行密钥，还要留恢复码吗？Google与GitHub备用方案

## 你的问题

个人Google与GitHub账号启用通行密钥后，是否仍需保存恢复码，怎样准备备用方案并安全验证？

## 答案与建议

要留。通行密钥负责日常安全登录，恢复码负责设备或密钥不可用时兜底。Google新增通行密钥不会删除原恢复方式；GitHub明确建议在保存恢复码之外，再配置多种认证方式。[1][2]

### 两家的差异

Google：备用码用于两步验证的第二步，需已开启两步验证，不是万能密码重置码。高级保护计划不能下载备用码，应另备通行密钥或安全密钥。恢复邮箱、手机号是辅助找回渠道，不保证找回成功。[3][4]

GitHub：通行密钥同时满足密码和2FA；恢复码常规登录仍先用密码。只有邮箱不等于能绕过2FA；所有恢复途径都丢失，客服也不能恢复账号。[5][6]

### 普通人的最小备用方案

① 保留密码。Google在“安全与登录→两步验证→备用码”；GitHub在“Settings→Password and authentication→Recovery codes→View”查看、下载或打印。[3][2]
② 建议将码打印封存于家中安全处，标明账号；别只放手机相册或该账号自己的网盘。密码管理器可存副本，但须确认丢手机后仍能解锁。
③ 再备一个已注册、与主手机分放的通行密钥设备或硬件密钥。同一同步库的两份密钥，不等于该库被锁后仍有独立后路。

### 一次安全演练

以下由你自行选择执行，本次未登录或改账号。
保留原登录会话，不删密钥、不关2FA。把主手机放一旁，用本人可信电脑的未登录浏览器环境，核对官方域名后输入密码：Google选“试试其他方式→备用码”；GitHub选“More options→2FA recovery code”，各用一枚未用码。[3][5]

通过条件：不用主手机也能取到密码和码、进入正确账号；随后标记已用码，确认剩余码能取回，退出测试会话。只找到文件、看到旧登录状态不算通过；备用通行密钥要单独成功登录才算验证。Google新增因素可能需等7天，未生效先不算通过。[4]

小演练记录（虚构示例，非实际测试）：日期：2026-10-14；测试账号（脱敏）：Google个人账号A；备用方式：密码＋纸质备用码；验证结果：不使用主手机成功登录，已标记用过的码并退出测试会话；发现的问题：纸质备份不易找到，需调整存放位置。记录不含密码或恢复码明文。某一种备用方式演练成功，不代表所有账号都已验证；应按“账号＋备用方式”分别记录。

两家的码均一次一用；重新生成会使旧组全部失效，须更新全部备份。码不能发给“客服”。演练成功只证明本次路径可用，不保证将来所有风控场景都放行。[3][2]

## 关键依据

[[1] Google：通行密钥不会删除原有恢复方式｜support.google.com｜日期未核实](https://support.google.com/accounts/answer/13548313?hl=en)

[[2] GitHub：恢复码保存与备用认证建议｜docs.github.com｜日期未核实](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)

[[3] Google：备用码使用与限制｜support.google.com｜日期未核实](https://support.google.com/accounts/answer/1187538?hl=en&co=GENIE.Platform=Desktop)

[[4] Google：恢复资料和新增因素等待期｜support.google.com｜日期未核实](https://support.google.com/accounts/answer/7684753?hl=en)

[[5] GitHub：通行密钥及丢失2FA后的恢复边界｜docs.github.com｜日期未核实](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials)

[[6] GitHub：恢复途径全部丢失的后果｜docs.github.com｜日期未核实](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials)

资料口径：2026-10-14。本报告依据公开资料整理，供本人参考。
