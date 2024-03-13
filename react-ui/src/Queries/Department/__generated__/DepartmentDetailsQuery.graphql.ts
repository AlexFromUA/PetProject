/**
 * @generated SignedSource<<b3d813f1a32fe2ab2857e5731beed6c4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type DepartmentDetailsQuery$variables = {
  id: any;
};
export type DepartmentDetailsQuery$data = {
  readonly department: {
    readonly departmentID: any;
    readonly departmentName: string;
  };
};
export type DepartmentDetailsQuery = {
  response: DepartmentDetailsQuery$data;
  variables: DepartmentDetailsQuery$variables;
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
    "concreteType": "DepartmentModel",
    "kind": "LinkedField",
    "name": "department",
    "plural": false,
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DepartmentDetailsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DepartmentDetailsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1cdb14fce3391c2b42225a0edfb213b3",
    "id": null,
    "metadata": {},
    "name": "DepartmentDetailsQuery",
    "operationKind": "query",
    "text": "query DepartmentDetailsQuery(\n  $id: UUID!\n) {\n  department(id: $id) {\n    departmentID\n    departmentName\n  }\n}\n"
  }
};
})();

(node as any).hash = "62ea51879008ef98d61055a5a8b3c078";

export default node;
