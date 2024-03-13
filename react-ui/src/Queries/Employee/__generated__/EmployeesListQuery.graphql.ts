/**
 * @generated SignedSource<<e21424cc751d68dfceb21964fbcf1002>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type EmployeesListQuery$variables = Record<PropertyKey, never>;
export type EmployeesListQuery$data = {
  readonly employees: ReadonlyArray<{
    readonly employeeID: any;
    readonly firstName: string;
    readonly surName: string;
  }>;
};
export type EmployeesListQuery = {
  response: EmployeesListQuery$data;
  variables: EmployeesListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "EmployeeModel",
    "kind": "LinkedField",
    "name": "employees",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "employeeID",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "firstName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "surName",
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
    "name": "EmployeesListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "EmployeesListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "298b2f6a040c6daabad9c0246dbc215e",
    "id": null,
    "metadata": {},
    "name": "EmployeesListQuery",
    "operationKind": "query",
    "text": "query EmployeesListQuery {\n  employees {\n    employeeID\n    firstName\n    surName\n  }\n}\n"
  }
};
})();

(node as any).hash = "5f17a0ef75bff1fe088fff0dc33d995f";

export default node;
