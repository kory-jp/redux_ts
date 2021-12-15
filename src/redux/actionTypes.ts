// プロジェクトにおけるアクションの一意性の確保の役割
export const ActionTypes = {
  incremant: "INCREMENT",
  decremant: "DECREMANT"
} as const;
// as const はReadOnlyとなり、外部から変更ができない
//初めに全体の上書き不可能なアクション一覧を定義

// Actionで発行されるtype はプロジェクトで一意である必要があるので、
// src/store/actionTypesの中の一つのオブジェクトとして管理
