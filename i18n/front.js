const initShipOrder = {}
const suppPay = {}


initShipOrder.seq = 行号
initShipOrder.poNo = PO号
initShipOrder.poSeq = PO行号
initShipOrder.asnNo = ASN单号
initShipOrder.asnSeq = ASN行号
initShipOrder.suCode = SU号
initShipOrder.batno = BATNO
initShipOrder.dcYearWeek = DC年周
initShipOrder.matCode = 物料编码
initShipOrder.piSuppCode = PI供应商编码
initShipOrder.scheduleDate = 排程日期
initShipOrder.scheduleQty = 排程数量
initShipOrder.lotNumber = 批次号
initShipOrder.success = 操作成功
initShipOrder.fabuSuccess = 发布成功.
  initShipOrder.deleteSuccess = 删除成功
initShipOrder.tipMesssage1 = 一次性删除只能删除一个单据一个行项目
initShipOrder.tipMesssage2 = 'DC日期格式错误, 例: 2019 - 10 - 01';
initShipOrder.tipMesssage3 = '排程日期格式错误, 例: 2019 - 10 - 01';
initShipOrder.tipMesssage4 = '交货日期格式错误, 例: 2019 - 10 - 01';
initShipOrder.tipMesssage5 = '送货日期格式错误, 例: 2019 - 10 - 01';
initShipOrder.tipMesssage6 = 无排程;
initShipOrder.tipMesssage7 = 无订单;
initShipOrder.tipMesssage8 = 无ASN明细行;
initShipOrder.tipMesssage9 = 数据不能超过500条
initShipOrder.tipMesssage10 = REF信息不能为空
initShipOrder.tipMesssage11 = 长度必须是19位;
initShipOrder.tipMesssage12 = 重复;
initShipOrder.tipMesssage13 = 已存在;
initShipOrder.tipMesssage14 = 不存在;
initShipOrder.tipMesssage15 = 和ASN明细物料
initShipOrder.tipMesssage16 = 不相同;
initShipOrder.tipMesssage17 = 批次和DC年周不能为空;
initShipOrder.tipMesssage18 = 和ASN明细批次
initShipOrder.tipMesssage19 = 和ASN明细DC年周
initShipOrder.tipMesssage20 = 数据为空
initShipOrder.tipMesssage21 = 状态为发布不存在;
initShipOrder.tipMesssage22 = 批次和DC年周不能为空;
initShipOrder.tipMesssage23 = 上传的批次和ASN单据不一致;
initShipOrder.tipMesssage24 = 上传的DC年周和ASN单据不一致;
initShipOrder.tipMesssage25 = 无发货单信息;
initShipOrder.tipMesssage26 = 无PO数据
initShipOrder.tipMesssage27 = 无需生成批次
initShipOrder.tipMesssage28 = '批次号快到上限，请联系恒润包装工程师'
initShipOrder.tipMesssage29 = ZB00必须上传附加费,
  initShipOrder.tipMesssage30 = 送货数量不能大于排程剩余数量,
  initShipOrder.tipMesssage31 = 送货数量不能大于PO剩余数量,
  initShipOrder.tipMesssage32 = 子项目不允许送货数量大于最小包数量,
  initShipOrder.tipMesssage33 = DC年周必须是4位,
  initShipOrder.tipMesssage34 = 不能大于当前年周
initShipOrder.tipMesssage35 = 批次必须是10位,
  initShipOrder.tipMesssage36 = 批次前4位和供应商BATNO不相同,
  initShipOrder.tipMesssage37 = 和系统已存在的批次DC日期不一致,
  initShipOrder.tipMesssage38 = 剩余寿命不足30天请上传过期试验检测报告和偏离分析报告,
  initShipOrder.tipMesssage39 = '的PI方、入仓号、汇率必须保持一致',
  initShipOrder.tipMesssage41 = 'ASN明细的PI方、入仓号、汇率要么都为空，要么都不为空',
  initShipOrder.tipMesssage40 = 超出委托单数量
initShipOrder.tipMesssage42 = 送货数量之和不能大于
initShipOrder.tipMesssage43 = 的剩余数量,
  initShipOrder.tipMesssage44 = 的计划值或者确认值不一致,
  initShipOrder.tipMesssage45 = 的计划值和确认值与ASN明细不一致,
  initShipOrder.tipMesssage46 = 送货数量不能大于排程日期
initShipOrder.tipMesssage47 = 的排程剩余数量,
  initShipOrder.tipMesssage48 = '状态为空',
  initShipOrder.tipMesssage49 = '状态为定点',
  initShipOrder.tipMesssage50 = '状态为OTS',
  initShipOrder.tipMesssage51 = '状态为取消',
  initShipOrder.tipMesssage52 = PPAP未通过
initShipOrder.tipMesssage53 = 本次发布数量超过受限数量
initShipOrder.tipMesssage54 = '快到上限，请联系恒润包装工程师'
initShipOrder.tipMesssage55 = '回传SAP失败，ASN单保存为初始状态'
initShipOrder.tipMesssage56 = 送货数量不能大于ASN剩余数量,
  initShipOrder.tipMesssage57 = 送货数量之和不能大于ASN剩余数量,
  initShipOrder.tipMesssage58 = 此ASN存在有效的三方单据
initShipOrder.tipMesssage59 = 此ASN明细存在有效的三方单据明细
initShipOrder.tipMesssage60 = 同步数据0条
initShipOrder.tipMesssage61 = 数据已经存在;
initShipOrder.tipMesssage62 = 数据重复;
suppPay.addCodeTime = 增量到料时间
suppPay.addTime = 增量时间
suppPay.projectCode = 项目编号
suppPay.matCode = 物料编码
suppPay.asnNo = ASN单号
suppPay.asnSeq = ASN行号
suppPay.tipMesssage1 = 数据不能超过500条;
suppPay.tipMesssage2 = '增量到料时间格式错误, 例: 2019 - 10 - 01';
suppPay.tipMesssage3 = '日期格式错误, 例: 2019 - 10 - 01';
suppPay.tipMesssage4 = '增量时间格式错误, 例: 2019 - 10 - 01';
suppPay.tipMesssage5 = 表格数据重复;
suppPay.tipMesssage6 = 已存在;
suppPay.tipMesssage7 = 不存在;

const data = {
  suppPay,
  initShipOrder
}

module.exports = data;