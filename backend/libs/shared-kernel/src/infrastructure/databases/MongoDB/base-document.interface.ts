import { IAudit } from '@app/shared-kernel/domain/audit';

export interface IBaseDocument extends IAudit {
  readonly _id?: any;
}
