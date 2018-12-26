import { NgModule } from '@angular/core';

import { MomentsTasksSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MomentsTasksSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MomentsTasksSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MomentsTasksSharedCommonModule {}
