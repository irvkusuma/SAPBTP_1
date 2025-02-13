using { irfan_kusuma_f_41 as my } from '../db/schema.cds';

@path: '/service/irfan_kusuma_f_41'
@requires: 'authenticated-user'
service irfan_kusuma_f_41Srv {
  @odata.draft.enabled
  entity CustomerMessage as projection on my.CustomerMessage;
}