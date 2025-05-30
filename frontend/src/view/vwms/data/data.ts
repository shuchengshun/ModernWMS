import { factoryInfoType, productInfoType, shelfItemInfoType, warehouseInfoType } from '@/view/vwms/types/types'

const factoryData: factoryInfoType[] = [
  {
    id: 573,
    warehouse_id: 1688,
    warehouse_name: '',
    area_name: 'bjzxn-xx仓存货区',
    parent_id: 0,
    create_time: '2023-10-07 09:05:15',
    last_update_time: '2023-10-07 09:05:15',
    is_valid: true,
    tenant_id: 2757,
    area_property: 6
  },
  {
    id: 574,
    warehouse_id: 1688,
    warehouse_name: '',
    area_name: 'bjzxn-xx仓拣货区',
    parent_id: 0,
    create_time: '2023-10-07 09:05:29',
    last_update_time: '2023-10-07 09:05:29',
    is_valid: true,
    tenant_id: 2757,
    area_property: 1
  },
  {
    id: 575,
    warehouse_id: 1688,
    warehouse_name: '',
    area_name: 'bjzxn-xx仓备货区',
    parent_id: 0,
    create_time: '2023-10-07 09:05:44',
    last_update_time: '2023-10-07 09:05:44',
    is_valid: true,
    tenant_id: 2757,
    area_property: 2
  },
  {
    id: 576,
    warehouse_id: 1688,
    warehouse_name: '',
    area_name: 'bjzxn-xx仓收货区',
    parent_id: 0,
    create_time: '2023-10-07 09:05:59',
    last_update_time: '2023-10-07 09:05:59',
    is_valid: true,
    tenant_id: 2757,
    area_property: 3
  }
]
const shelfItemData:shelfItemInfoType[] = [
  {
    id: 441,
    warehouse_id: 1688,
    warehouse_name: 'bjzxn-xx仓库',
    warehouse_area_name: 'bjzxn-xx仓存货区',
    warehouse_area_property: 6,
    location_name: 'mn-1-1-5-45',
    location_length: 5.00,
    location_width: 5.00,
    location_heigth: 5.00,
    location_volume: 5.00,
    location_load: 5.00,
    roadway_number: '5',
    shelf_number: '1',
    layer_number: '5',
    tag_number: '45',
    create_time: '2023-10-07 09:08:29',
    last_update_time: '2023-10-07 14:22:15',
    is_valid: true,
    tenant_id: 2757,
    warehouse_area_id: 573
  },
  {
    id: 441,
    warehouse_id: 1688,
    warehouse_name: 'bjzxn-xx仓库',
    warehouse_area_name: 'bjzxn-xx仓存货区',
    warehouse_area_property: 6,
    location_name: 'mn-1-1-2-11',
    location_length: 5.00,
    location_width: 5.00,
    location_heigth: 5.00,
    location_volume: 5.00,
    location_load: 5.00,
    roadway_number: '5',
    shelf_number: '1',
    layer_number: '2',
    tag_number: '11',
    create_time: '2023-10-07 09:08:29',
    last_update_time: '2023-10-07 14:22:15',
    is_valid: true,
    tenant_id: 2757,
    warehouse_area_id: 573
  },
  {
    id: 442,
    warehouse_id: 1688,
    warehouse_name: 'bjzxn-xx仓库',
    warehouse_area_name: 'bjzxn-xx仓存货区',
    warehouse_area_property: 6,
    location_name: 'mn-1-1-2-18',
    location_length: 5.00,
    location_width: 5.00,
    location_heigth: 5.00,
    location_volume: 5.00,
    location_load: 5.00,
    roadway_number: '5',
    shelf_number: '1',
    layer_number: '2',
    tag_number: '18',
    create_time: '2023-10-07 09:09:02',
    last_update_time: '2023-10-07 10:29:25',
    is_valid: true,
    tenant_id: 2757,
    warehouse_area_id: 573
  },
  {
    id: 443,
    warehouse_id: 1688,
    warehouse_name: 'bjzxn-xx仓库',
    warehouse_area_name: 'bjzxn-xx仓存货区',
    warehouse_area_property: 6,
    location_name: 'mn-1-1-2-17',
    location_length: 5.00,
    location_width: 5.00,
    location_heigth: 5.00,
    location_volume: 5.00,
    location_load: 5.00,
    roadway_number: '5',
    shelf_number: '1',
    layer_number: '2',
    tag_number: '17',
    create_time: '2023-10-07 09:10:00',
    last_update_time: '2023-10-07 10:29:01',
    is_valid: true,
    tenant_id: 2757,
    warehouse_area_id: 573
  },
  {
    id: 444,
    warehouse_id: 1688,
    warehouse_name: 'bjzxn-xx仓库',
    warehouse_area_name: 'bjzxn-xx仓存货区',
    warehouse_area_property: 6,
    location_name: 'mn-1-1-5-41',
    location_length: 5.00,
    location_width: 5.00,
    location_heigth: 5.00,
    location_volume: 5.00,
    location_load: 5.00,
    roadway_number: '5',
    shelf_number: '1',
    layer_number: '5',
    tag_number: '41',
    create_time: '2023-10-07 09:10:00',
    last_update_time: '2023-10-07 10:29:01',
    is_valid: true,
    tenant_id: 2757,
    warehouse_area_id: 573
  },
  {
    id: 444,
    warehouse_id: 1688,
    warehouse_name: 'bjzxn-xx仓库',
    warehouse_area_name: 'bjzxn-xx仓存货区',
    warehouse_area_property: 6,
    location_name: 'mn-1-2-4-2',
    location_length: 5.00,
    location_width: 5.00,
    location_heigth: 5.00,
    location_volume: 5.00,
    location_load: 5.00,
    roadway_number: '3',
    shelf_number: '2',
    layer_number: '4',
    tag_number: '11',
    create_time: '2023-10-07 09:10:31',
    last_update_time: '2023-10-07 14:23:00',
    is_valid: true,
    tenant_id: 2757,
    warehouse_area_id: 573
  },
  {
    id: 445,
    warehouse_id: 1688,
    warehouse_name: 'bjzxn-xx仓库',
    warehouse_area_name: 'bjzxn-xx仓存货区',
    warehouse_area_property: 6,
    location_name: 'mn-1-3-2-6',
    location_length: 5.00,
    location_width: 5.00,
    location_heigth: 5.00,
    location_volume: 5.00,
    location_load: 5.00,
    roadway_number: '2',
    shelf_number: '3',
    layer_number: '2',
    tag_number: '6',
    create_time: '2023-10-07 09:10:54',
    last_update_time: '2023-10-07 09:11:35',
    is_valid: true,
    tenant_id: 2757,
    warehouse_area_id: 573
  },
  {
    id: 446,
    warehouse_id: 1688,
    warehouse_name: 'bjzxn-xx仓库',
    warehouse_area_name: 'bjzxn-xx仓存货区',
    warehouse_area_property: 6,
    location_name: 'mn-1-4-3-6',
    location_length: 5.00,
    location_width: 5.00,
    location_heigth: 5.00,
    location_volume: 5.00,
    location_load: 5.00,
    roadway_number: '1',
    shelf_number: '4',
    layer_number: '3',
    tag_number: '14',
    create_time: '2023-10-07 09:11:19',
    last_update_time: '2023-10-07 14:24:29',
    is_valid: true,
    tenant_id: 2757,
    warehouse_area_id: 573
  },
  {
    id: 447,
    warehouse_id: 1689,
    warehouse_name: 'bjzxn-xx仓库',
    warehouse_area_name: 'bjzxn-xx仓存货区',
    warehouse_area_property: 6,
    location_name: 'mn-2-1-5-5',
    location_length: 5.00,
    location_width: 5.00,
    location_heigth: 5.00,
    location_volume: 5.00,
    location_load: 5.00,
    roadway_number: '5',
    shelf_number: '1',
    layer_number: '5',
    tag_number: '15',
    create_time: '2023-10-07 09:12:26',
    last_update_time: '2023-10-07 14:24:36',
    is_valid: true,
    tenant_id: 2757,
    warehouse_area_id: 577
  },
  {
    id: 448,
    warehouse_id: 1688,
    warehouse_name: 'bjzxn-xx仓库',
    warehouse_area_name: 'bjzxn-xx仓拣货区',
    warehouse_area_property: 1,
    location_name: 'mn-1-1-3-10',
    location_length: 0.00,
    location_width: 0.00,
    location_heigth: 0.00,
    location_volume: 0.00,
    location_load: 0.00,
    roadway_number: '5',
    shelf_number: '1',
    layer_number: '3',
    tag_number: '10',
    create_time: '2023-10-11 14:50:48',
    last_update_time: '2023-10-11 14:50:59',
    is_valid: true,
    tenant_id: 2757,
    warehouse_area_id: 574
  },
  {
    id: 449,
    warehouse_id: 1688,
    warehouse_name: 'bjzxn-xx仓库',
    warehouse_area_name: 'bjzxn-xx仓存货区',
    warehouse_area_property: 6,
    location_name: 'mn-1-1-3-14',
    location_length: 0.00,
    location_width: 0.00,
    location_heigth: 0.00,
    location_volume: 0.00,
    location_load: 0.00,
    roadway_number: '5',
    shelf_number: '1',
    layer_number: '3',
    tag_number: '14',
    create_time: '2023-10-11 14:53:24',
    last_update_time: '2023-10-11 14:53:24',
    is_valid: true,
    tenant_id: 2757,
    warehouse_area_id: 573
  }
]
const productData:productInfoType[] = [
  {
    warehouse_name: 'bjzxn-xx仓库',
    location_name: 'mn-1-1-3-10',
    spu_code: 'candy',
    spu_name: '奶糖',
    sku_id: 767,
    sku_code: 'candy2',
    sku_name: '打包奶糖',
    qty: 200,
    qty_available: 200,
    qty_locked: 0,
    qty_frozen: 0,
    goods_owner_name: '空',
    series_number: '',
    goods_location_id: 448
  },
  {
    warehouse_name: 'bjzxn-xx仓库',
    location_name: 'mn-1-1-5-6',
    spu_code: 'mnmilk',
    spu_name: '牛奶',
    sku_id: 766,
    sku_code: 'mnmilk1',
    sku_name: '小瓶牛奶',
    qty: 50,
    qty_available: 0,
    qty_locked: 50,
    qty_frozen: 0,
    goods_owner_name: '空',
    series_number: '',
    goods_location_id: 441
  },
  {
    warehouse_name: 'bjzxn-xx仓库',
    location_name: 'mn-1-1-2-8',
    spu_code: 'mnmilk',
    spu_name: '牛奶',
    sku_id: 766,
    sku_code: 'mnmilk1',
    sku_name: '小瓶牛奶',
    qty: 100,
    qty_available: 0,
    qty_locked: 100,
    qty_frozen: 0,
    goods_owner_name: '空',
    series_number: '',
    goods_location_id: 442
  },
  {
    warehouse_name: 'bjzxn-xx仓库',
    location_name: 'mn-1-1-2-7',
    spu_code: 'mnmilk',
    spu_name: '牛奶',
    sku_id: 766,
    sku_code: 'mnmilk1',
    sku_name: '小瓶牛奶',
    qty: 150,
    qty_available: 0,
    qty_locked: 150,
    qty_frozen: 0,
    goods_owner_name: '空',
    series_number: '',
    goods_location_id: 443
  },
  {
    warehouse_name: 'bjzxn-xx仓库',
    location_name: 'mn-1-2-4-2',
    spu_code: 'mnmilk',
    spu_name: '牛奶',
    sku_id: 766,
    sku_code: 'mnmilk1',
    sku_name: '小瓶牛奶',
    qty: 200,
    qty_available: 0,
    qty_locked: 200,
    qty_frozen: 0,
    goods_owner_name: '空',
    series_number: '',
    goods_location_id: 444
  },
  {
    warehouse_name: 'bjzxn-xx仓库',
    location_name: 'mn-1-3-2-6',
    spu_code: 'mnmilk',
    spu_name: '牛奶',
    sku_id: 766,
    sku_code: 'mnmilk1',
    sku_name: '小瓶牛奶',
    qty: 50,
    qty_available: 10,
    qty_locked: 40,
    qty_frozen: 0,
    goods_owner_name: '空',
    series_number: '',
    goods_location_id: 445
  },
  {
    warehouse_name: 'bjzxn-xx仓库',
    location_name: 'mn-1-4-3-6',
    spu_code: 'mnmilk',
    spu_name: '牛奶',
    sku_id: 766,
    sku_code: 'mnmilk1',
    sku_name: '小瓶牛奶',
    qty: 50,
    qty_available: 50,
    qty_locked: 0,
    qty_frozen: 0,
    goods_owner_name: '空',
    series_number: '',
    goods_location_id: 446
  },
  {
    warehouse_name: 'bjzxn-xx仓库',
    location_name: 'mn-1-1-3-14',
    spu_code: 'mnmilk',
    spu_name: '牛奶',
    sku_id: 765,
    sku_code: 'mnmilk2',
    sku_name: '大瓶牛奶',
    qty: 300,
    qty_available: 300,
    qty_locked: 0,
    qty_frozen: 0,
    goods_owner_name: '空',
    series_number: '',
    goods_location_id: 449
  },
  {
    warehouse_name: 'bjzxn-xx仓库',
    location_name: 'mn-1-1-2-8',
    spu_code: 'ssa',
    spu_name: '酸奶',
    sku_id: 770,
    sku_code: 'ssa1',
    sku_name: '小盒酸奶',
    qty: 100,
    qty_available: 100,
    qty_locked: 0,
    qty_frozen: 0,
    goods_owner_name: '空',
    series_number: '',
    goods_location_id: 442
  },
  {
    warehouse_name: 'bjzxn-xx仓库',
    location_name: 'mn-1-1-2-8',
    spu_code: 'ssa',
    spu_name: '酸奶',
    sku_id: 769,
    sku_code: 'ssa2',
    sku_name: '大盒酸奶',
    qty: 600,
    qty_available: 600,
    qty_locked: 0,
    qty_frozen: 0,
    goods_owner_name: '空',
    series_number: '',
    goods_location_id: 442
  }
]
const warehouseData:warehouseInfoType = {
  id: 1688,
  warehouse_name: 'bjzxn-xx仓库',
  city: '北京市',
  address: '北京市',
  email: 'bjzxn@foxmail.com',
  manager: '空',
  contact_tel: '18514777759',
  creator: 'saals',
  create_time: '2023-10-07 09:03:20',
  last_update_time: '2023-10-12 10:35:16',
  is_valid: true,
  tenant_id: 2757
}

export {
  factoryData,
  shelfItemData,
  productData,
  warehouseData
}