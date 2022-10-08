// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 * IAMPolicyMember is the Schema for the iampolicies API
 *
 * @schema IAMPolicyMember
 */
export class IamPolicyMember extends ApiObject {
  /**
   * Returns the apiVersion and kind for "IAMPolicyMember"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'iam.cnrm.cloud.google.com/v1beta1',
    kind: 'IAMPolicyMember',
  }

  /**
   * Renders a Kubernetes manifest for "IAMPolicyMember".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: IamPolicyMemberProps = {}): any {
    return {
      ...IamPolicyMember.GVK,
      ...toJson_IamPolicyMemberProps(props),
    };
  }

  /**
   * Defines a "IAMPolicyMember" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: IamPolicyMemberProps = {}) {
    super(scope, id, {
      ...IamPolicyMember.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...IamPolicyMember.GVK,
      ...toJson_IamPolicyMemberProps(resolved),
    };
  }
}

/**
 * IAMPolicyMember is the Schema for the iampolicies API
 *
 * @schema IAMPolicyMember
 */
export interface IamPolicyMemberProps {
  /**
   * @schema IAMPolicyMember#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * IAMPolicyMemberSpec defines the desired state of IAMPolicyMember
   *
   * @schema IAMPolicyMember#spec
   */
  readonly spec?: IamPolicyMemberSpec;

}

/**
 * Converts an object of type 'IamPolicyMemberProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPolicyMemberProps(obj: IamPolicyMemberProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_IamPolicyMemberSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * IAMPolicyMemberSpec defines the desired state of IAMPolicyMember
 *
 * @schema IamPolicyMemberSpec
 */
export interface IamPolicyMemberSpec {
  /**
   * Immutable. Optional. The condition under which the binding applies.
   *
   * @schema IamPolicyMemberSpec#condition
   */
  readonly condition?: IamPolicyMemberSpecCondition;

  /**
   * Immutable. The IAM identity to be bound to the role. Exactly one of 'member' or 'memberFrom' must be used.
   *
   * @schema IamPolicyMemberSpec#member
   */
  readonly member?: string;

  /**
   * Immutable. The IAM identity to be bound to the role. Exactly one of 'member' or 'memberFrom' must be used, and only one subfield within 'memberFrom' can be used.
   *
   * @schema IamPolicyMemberSpec#memberFrom
   */
  readonly memberFrom?: IamPolicyMemberSpecMemberFrom;

  /**
   * Immutable. Required. The GCP resource to set the IAM policy on.
   *
   * @schema IamPolicyMemberSpec#resourceRef
   */
  readonly resourceRef: IamPolicyMemberSpecResourceRef;

  /**
   * Immutable. Required. The role for which the Member will be bound.
   *
   * @schema IamPolicyMemberSpec#role
   */
  readonly role: string;

}

/**
 * Converts an object of type 'IamPolicyMemberSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPolicyMemberSpec(obj: IamPolicyMemberSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'condition': toJson_IamPolicyMemberSpecCondition(obj.condition),
    'member': obj.member,
    'memberFrom': toJson_IamPolicyMemberSpecMemberFrom(obj.memberFrom),
    'resourceRef': toJson_IamPolicyMemberSpecResourceRef(obj.resourceRef),
    'role': obj.role,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. Optional. The condition under which the binding applies.
 *
 * @schema IamPolicyMemberSpecCondition
 */
export interface IamPolicyMemberSpecCondition {
  /**
   * @schema IamPolicyMemberSpecCondition#description
   */
  readonly description?: string;

  /**
   * @schema IamPolicyMemberSpecCondition#expression
   */
  readonly expression: string;

  /**
   * @schema IamPolicyMemberSpecCondition#title
   */
  readonly title: string;

}

/**
 * Converts an object of type 'IamPolicyMemberSpecCondition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPolicyMemberSpecCondition(obj: IamPolicyMemberSpecCondition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'expression': obj.expression,
    'title': obj.title,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. The IAM identity to be bound to the role. Exactly one of 'member' or 'memberFrom' must be used, and only one subfield within 'memberFrom' can be used.
 *
 * @schema IamPolicyMemberSpecMemberFrom
 */
export interface IamPolicyMemberSpecMemberFrom {
  /**
   * The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role.
   *
   * @schema IamPolicyMemberSpecMemberFrom#logSinkRef
   */
  readonly logSinkRef?: IamPolicyMemberSpecMemberFromLogSinkRef;

  /**
   * The IAMServiceAccount to be bound to the role.
   *
   * @schema IamPolicyMemberSpecMemberFrom#serviceAccountRef
   */
  readonly serviceAccountRef?: IamPolicyMemberSpecMemberFromServiceAccountRef;

  /**
   * The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role.
   *
   * @schema IamPolicyMemberSpecMemberFrom#sqlInstanceRef
   */
  readonly sqlInstanceRef?: IamPolicyMemberSpecMemberFromSqlInstanceRef;

}

/**
 * Converts an object of type 'IamPolicyMemberSpecMemberFrom' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPolicyMemberSpecMemberFrom(obj: IamPolicyMemberSpecMemberFrom | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'logSinkRef': toJson_IamPolicyMemberSpecMemberFromLogSinkRef(obj.logSinkRef),
    'serviceAccountRef': toJson_IamPolicyMemberSpecMemberFromServiceAccountRef(obj.serviceAccountRef),
    'sqlInstanceRef': toJson_IamPolicyMemberSpecMemberFromSqlInstanceRef(obj.sqlInstanceRef),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. Required. The GCP resource to set the IAM policy on.
 *
 * @schema IamPolicyMemberSpecResourceRef
 */
export interface IamPolicyMemberSpecResourceRef {
  /**
   * @schema IamPolicyMemberSpecResourceRef#apiVersion
   */
  readonly apiVersion?: string;

  /**
   * @schema IamPolicyMemberSpecResourceRef#external
   */
  readonly external?: string;

  /**
   * @schema IamPolicyMemberSpecResourceRef#kind
   */
  readonly kind: string;

  /**
   * @schema IamPolicyMemberSpecResourceRef#name
   */
  readonly name?: string;

  /**
   * @schema IamPolicyMemberSpecResourceRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'IamPolicyMemberSpecResourceRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPolicyMemberSpecResourceRef(obj: IamPolicyMemberSpecResourceRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiVersion': obj.apiVersion,
    'external': obj.external,
    'kind': obj.kind,
    'name': obj.name,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role.
 *
 * @schema IamPolicyMemberSpecMemberFromLogSinkRef
 */
export interface IamPolicyMemberSpecMemberFromLogSinkRef {
  /**
   * @schema IamPolicyMemberSpecMemberFromLogSinkRef#name
   */
  readonly name: string;

  /**
   * @schema IamPolicyMemberSpecMemberFromLogSinkRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'IamPolicyMemberSpecMemberFromLogSinkRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPolicyMemberSpecMemberFromLogSinkRef(obj: IamPolicyMemberSpecMemberFromLogSinkRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The IAMServiceAccount to be bound to the role.
 *
 * @schema IamPolicyMemberSpecMemberFromServiceAccountRef
 */
export interface IamPolicyMemberSpecMemberFromServiceAccountRef {
  /**
   * @schema IamPolicyMemberSpecMemberFromServiceAccountRef#name
   */
  readonly name: string;

  /**
   * @schema IamPolicyMemberSpecMemberFromServiceAccountRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'IamPolicyMemberSpecMemberFromServiceAccountRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPolicyMemberSpecMemberFromServiceAccountRef(obj: IamPolicyMemberSpecMemberFromServiceAccountRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role.
 *
 * @schema IamPolicyMemberSpecMemberFromSqlInstanceRef
 */
export interface IamPolicyMemberSpecMemberFromSqlInstanceRef {
  /**
   * @schema IamPolicyMemberSpecMemberFromSqlInstanceRef#name
   */
  readonly name: string;

  /**
   * @schema IamPolicyMemberSpecMemberFromSqlInstanceRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'IamPolicyMemberSpecMemberFromSqlInstanceRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IamPolicyMemberSpecMemberFromSqlInstanceRef(obj: IamPolicyMemberSpecMemberFromSqlInstanceRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

