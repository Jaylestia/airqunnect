import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { MapsRoutingModule, routedComponents } from './maps-routing.module';
import { GooglemapComponent } from './googlemap/googlemap.component';

@NgModule({
  imports: [
    ThemeModule,
    AgmCoreModule.forRoot(),
    LeafletModule.forRoot(),
    MapsRoutingModule,
    NgxEchartsModule,
  ],
  exports: [],
  declarations: [
    ...routedComponents,
    GooglemapComponent,
  ],
})
export class MapsModule { }
