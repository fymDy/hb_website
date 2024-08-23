import { useSearchParams } from "react-router-dom";

/*
 * @Author: Mark
 * @Date: 2024-07-10 12:03:38
 * @LastEditTime: 2024-07-15 13:56:25
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /react-router6.4-antm/src/utils/common.ts
 */
export function decodeSearchParamsFunc() {
    const [searchParams]=useSearchParams()
    const iParams: { [key: string]: string } = {}; // 创建一个空对象，用于存储参数
    // 判断查询字符串是否为空
    if (searchParams.size) {
      // 遍历键值对，将参数解析为字典
      searchParams.forEach((value:any,key:string) => {
        const decodedKey: string = decodeURIComponent(key); // 解码参数名
        const decodedValue: string = decodeURIComponent(value || ''); // 解码参数值，处理没有值的情况
        iParams[decodedKey] = decodedValue; // 将键值对存入字典中
      });
    }
  
    return iParams; // 返回解析后的字典
  }

