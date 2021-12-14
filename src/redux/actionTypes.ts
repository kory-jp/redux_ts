// as const はReadOnlyとなり、外部から変更ができない
//初めに全体の上書き不可能なアクション一覧を定義
export const ActionTypes = {
  incremant: "INCREMENT",
  decremant: "DECREMANT"
} as const;
