/**
 * @generated SignedSource<<5c7ef567369630bc22a341e2ba23be8a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type EmployeeDetailsQuery$variables = {
  id: any;
};
export type EmployeeDetailsQuery$data = {
  readonly employee: {
    readonly employeeID: any;
    readonly firstName: string;
    readonly surName: string;
  };
};
export type EmployeeDetailsQuery = {
  response: EmployeeDetailsQuery$data;
  variables: EmployeeDetailsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "EmployeeModel",
    "kind": "LinkedField",
    "name": "employee",
    "plural": false,
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EmployeeDetailsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EmployeeDetailsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3763d5902cb9528eb8c401b4bc2aea89",
    "id": null,
    "metadata": {},
    "name": "EmployeeDetailsQuery",
    "operationKind": "query",
    "text": "query EmployeeDetailsQuery(\n  $id: Decimal!\n) {\n  employee(id: $id) {\n    employeeID\n    firstName\n    surName\n  }\n}\n"
  }
};
})();

(node as any).hash = "6d06cab5afa265ba103f6d7fa83a1934";

export default node;
