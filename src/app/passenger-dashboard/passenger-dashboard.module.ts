import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDashboardService } from './passenger-dashboard.service';
import { HttpClientModule } from "@angular/common/http";
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: 'passengers',
     children: [
        { path: '', component: PassengerDashboardComponent },
        { path: ':id', component: PassengerViewerComponent }
     ] }
];
@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerDetailComponent,
        PassengerCountComponent,
        PassengerViewerComponent,
        PassengerFormComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {
    
}