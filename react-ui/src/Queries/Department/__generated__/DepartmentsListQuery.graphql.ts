/**
 * @generated SignedSource<<001dba2224e0b4bae0305e22d0f69aca>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type DepartmentsListQuery$variables = Record<PropertyKey, never>;
export type DepartmentsListQuery$data = {
  readonly departments: ReadonlyArray<{
    readonly departmentID: any;
    readonly departmentName: string;
  }>;
};
export type DepartmentsListQuery = {
  response: DepartmentsListQuery$data;
  variables: DepartmentsListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "DepartmentModel",
    "kind": "LinkedField",
    "name": "departments",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "departmentID",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "departmentName",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DepartmentsListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DepartmentsListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e9ed52cb5e2376a38cbb7ab9e907f22a",
    "id": null,
    "metadata": {},
    "name": "DepartmentsListQuery",
    "operationKind": "query",
    "text": "query DepartmentsListQuery {\n  departments {\n    departmentID\n    departmentName\n  }\n}\n"
  }
};
})();

(node as any).hash = "1bed8eb42e34f5d5e8291b7d182db9c3";

export default node;
