/**
 * Represents the data transfer object for an audit response.
 */
export interface IAuditResponseDTO {
  readonly auditCreatedDateTime: string;
  readonly auditCreatedBy: string;
  auditModifiedBy?: string;
  auditModifiedDateTime?: string;
  auditDeletedBy?: string;
  auditDeletedDateTime?: string;
}
