import { NgModule } from '@angular/core';

import { SpringBasicSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SpringBasicSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SpringBasicSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SpringBasicSharedCommonModule {}
