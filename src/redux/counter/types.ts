//counter自身の型定義、各アクションの型定義
//counterにかかるアクション一覧を定義
//Redux内で受け渡しされるアクションの型を定義
import { Action } from "redux";
import { ActionTypes } from "../actionTypes";

// 取り扱うデータ型を定義
export type Count = {
  value: number;
};

// インターフェースは中身の実装を持たずに、メンバー*や方の定義だけをもつ,typeと同様に型定義をおこなうd
// *JavaScriptのクラスではコンストラクタ、メソッド、プロパティのことをまとめてメンバーと呼ぶ
//interfaceは継承が可能でActionクラスを継承している
interface incrementAction extends Action {
  type: typeof ActionTypes.incremant;
  payload: Count;
}

interface decrementAction extends Action {
  type: typeof ActionTypes.decremant;
  //operationファイルで変更したステート
  payload: Count;
}

// アクション一覧を定義,定義外のアクションを渡さない
export type CountActionTypes = incrementAction | decrementAction;
