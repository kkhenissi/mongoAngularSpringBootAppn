import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  MongoAngularSpringBootAppSharedLibsModule,
  MongoAngularSpringBootAppSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [MongoAngularSpringBootAppSharedLibsModule, MongoAngularSpringBootAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MongoAngularSpringBootAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MongoAngularSpringBootAppSharedModule {
  static forRoot() {
    return {
      ngModule: MongoAngularSpringBootAppSharedModule
    };
  }
}
