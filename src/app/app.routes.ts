import { Routes } from '@angular/router';
import { FamilyTreeComponent } from './family-tree/family-tree.component';
import { TimelineComponent } from './timeline/timeline.component';


export const routes: Routes = [
    {path: '', component: FamilyTreeComponent, title: 'Biblical Lineage'},
    {path: 'timeline', component: TimelineComponent, title: 'Timeline'}
];