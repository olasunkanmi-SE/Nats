import { IAudit } from '@app/shared-kernel/domain/audit';
import { Audit } from '@app/shared-kernel/domain/audit/audit';

export class AuditParser {
  static createAuditResponse(audit: Audit): IAudit {
    const auditResponse: IAudit = {
      auditCreatedBy: audit.auditCreatedBy,
      auditCreatedDateTime: audit.auditCreatedDateTime,
      auditModifiedBy: audit.auditModifiedBy,
      auditModifiedDateTime: audit.auditModifiedDateTime,
      auditDeletedDateTime: audit.auditDeletedDateTime,
      auditDeletedBy: audit.auditDeletedBy,
    };
    return auditResponse;
  }
}
