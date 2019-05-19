import { NgModule } from '@angular/core';

import { MongoAngularSpringBootAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [MongoAngularSpringBootAppSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [MongoAngularSpringBootAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MongoAngularSpringBootAppSharedCommonModule {}
