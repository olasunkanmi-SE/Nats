import { Context } from '../context';
import { Result } from '../result';
import { ValueObjects } from '../value_object';
import { IAudit } from './audit_props';

/**
 * Represents an audit object that tracks the creation, modification, and deletion of an entity.
 */
export class Audit extends ValueObjects<IAudit> {
  get auditCreatedDateTime(): string {
    return this.props.auditCreatedDateTime;
  }

  get auditCreatedBy(): string {
    return this.props.auditCreatedBy;
  }

  get auditModifiedBy(): string | undefined {
    return this.props.auditModifiedBy;
  }

  set auditModifiedBy(email: string | undefined) {
    this.props.auditModifiedBy = email;
  }

  get auditModifiedDateTime(): string | undefined {
    return this.props.auditModifiedDateTime;
  }

  set auditModifiedDateTime(date: string | undefined) {
    this.props.auditModifiedDateTime = date;
  }

  get auditDeletedBy(): string | undefined {
    return this.props.auditDeletedBy;
  }

  set auditDeletedBy(email: string | undefined) {
    this.props.auditDeletedBy = email;
  }

  get auditDeletedDateTime(): string | undefined {
    return this.props.auditDeletedDateTime;
  }

  set auditDeletedDateTime(date: string | undefined) {
    this.props.auditDeletedDateTime = date;
  }

  static create(props: IAudit): Result<Audit> {
    return Result.ok(new Audit(props));
  }

  static createInsertContext(context: Context): Audit {
    const audit: IAudit = {
      auditCreatedDateTime: new Date().toISOString(),
      auditCreatedBy: context.email,
    };
    return Audit.create(audit).getValue();
  }

  static updateContext(email: string, entity: any): IAudit {
    const audit: IAudit = {
      auditCreatedDateTime: entity.audit.auditCreatedDateTime,
      auditCreatedBy: entity.audit.auditCreatedBy,
      auditModifiedBy: email,
      auditModifiedDateTime: new Date().toISOString(),
    };
    return audit;
  }
}
